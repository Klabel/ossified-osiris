import fs from 'node:fs';
import path from 'node:path';
import { getImagesForForklift } from './getImages';

export function getForkliftData(slug) {
  const infoPath = path.join(process.cwd(), 'public', 'images', 'forklifts', slug, 'info.json');
  
  try {
    if (!fs.existsSync(infoPath)) {
      // Возвращаем базовую структуру, если info.json не найден
      return {
        slug,
        title: `Погрузчик ${slug}`,
        price: 'Цена по запросу',
        specs: [],
        description: 'Описание скоро появится.',
        images: getImagesForForklift(slug)
      };
    }

    const infoRaw = fs.readFileSync(infoPath, 'utf-8');
    const info = JSON.parse(infoRaw);

    return {
      slug,
      ...info,
      images: getImagesForForklift(slug)
    };
  } catch (error) {
    console.error(`Error reading data for ${slug}:`, error);
    // Возвращаем ошибку или базовую структуру
    return {
      slug,
      title: `Ошибка загрузки данных для ${slug}`,
      price: 'N/A',
      specs: [],
      description: 'Не удалось загрузить информацию.',
      images: []
    };
  }
}

export function getAllForkliftSlugs() {
    const forkliftsDir = path.join(process.cwd(), 'public', 'images', 'forklifts');
    try {
        const slugs = fs.readdirSync(forkliftsDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
        return slugs;
    } catch (error) {
        console.error("Could not read forklift directories:", error);
        return [];
    }
}
