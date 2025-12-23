#!/usr/bin/env node
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const QUALITY = 80; // WebP quality (80 is a good balance)
const MAX_WIDTH = 1920; // Max width for desktop images
const MAX_WIDTH_MOBILE = 1080; // Max width for mobile images

async function compressDirectory(dirPath, maxWidth) {
  console.log(`\n📁 Processing directory: ${dirPath}`);
  
  try {
    const files = await fs.readdir(dirPath);
    const imageFiles = files.filter(f => /\.(jpe?g|png)$/i.test(f));
    
    console.log(`Found ${imageFiles.length} images to compress`);
    
    for (const file of imageFiles) {
      const inputPath = path.join(dirPath, file);
      const outputPath = path.join(dirPath, file.replace(/\.(jpe?g|png)$/i, '.webp'));
      
      // Skip if WebP already exists
      try {
        await fs.access(outputPath);
        console.log(`⏭️  Skipping ${file} (WebP already exists)`);
        continue;
      } catch {
        // WebP doesn't exist, proceed with compression
      }
      
      try {
        const stats = await fs.stat(inputPath);
        const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
        
        console.log(`🔄 Compressing ${file} (${sizeMB}MB)...`);
        
        await sharp(inputPath)
          .resize(maxWidth, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: QUALITY })
          .toFile(outputPath);
        
        const newStats = await fs.stat(outputPath);
        const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
        const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);
        
        console.log(`✅ ${file} → ${path.basename(outputPath)} (${sizeMB}MB → ${newSizeMB}MB, saved ${savings}%)`);
      } catch (error) {
        console.error(`❌ Error compressing ${file}:`, error.message);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

async function deleteOriginalImages(dirPath) {
  console.log(`\n🗑️  Checking for original JPG/PNG files in: ${dirPath}`);
  
  try {
    const files = await fs.readdir(dirPath);
    const imageFiles = files.filter(f => /\.(jpe?g|png)$/i.test(f));
    
    for (const file of imageFiles) {
      const jpgPath = path.join(dirPath, file);
      const webpPath = path.join(dirPath, file.replace(/\.(jpe?g|png)$/i, '.webp'));
      
      // Check if WebP equivalent exists
      try {
        await fs.access(webpPath);
        // WebP exists, safe to delete original
        await fs.unlink(jpgPath);
        console.log(`🗑️  Deleted ${file} (WebP version exists)`);
      } catch {
        console.log(`⚠️  Keeping ${file} (no WebP version found)`);
      }
    }
  } catch (error) {
    console.error(`Error deleting files in ${dirPath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Image Compression Script');
  console.log('━'.repeat(50));
  
  const desktopDir = path.join(rootDir, 'public', 'desktop-background');
  const mobileDir = path.join(rootDir, 'public', 'mobile-background');
  
  // Compress images
  await compressDirectory(desktopDir, MAX_WIDTH);
  await compressDirectory(mobileDir, MAX_WIDTH_MOBILE);
  
  console.log('\n' + '━'.repeat(50));
  console.log('✅ Compression complete!');
  console.log('\n⚠️  IMPORTANT: Review the WebP images before deleting originals.');
  console.log('To delete original JPG/PNG files, run:');
  console.log('  node scripts/compress-images.mjs --delete-originals\n');
  
  // If --delete-originals flag is passed, delete the original images
  if (process.argv.includes('--delete-originals')) {
    console.log('\n🗑️  Deleting original images...\n');
    await deleteOriginalImages(desktopDir);
    await deleteOriginalImages(mobileDir);
    console.log('\n✅ Original images deleted!');
  }
}

main().catch(console.error);

