import fs from 'node:fs';
import path from 'node:path';

export function getImagesForForklift(slug) {
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'forklifts', slug);
  
  try {
    if (!fs.existsSync(imagesDir)) {
      return [];
    }

    const files = fs.readdirSync(imagesDir);
    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file)) // Фильтруем только изображения
      .map(file => `/images/forklifts/${slug}/${file}`);
      
    return images;
  } catch (error) {
    console.error(`Error reading images for ${slug}:`, error);
    return [];
  }
}