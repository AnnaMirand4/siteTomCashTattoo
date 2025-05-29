import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Função para normalizar caminhos no Windows
function normalizePath(p) {
  return process.platform === 'win32' ? p.replace(/\\/g, '/') : p;
}

const assetsDir = path.join(__dirname, '../src/assets');
const optimizedDir = path.join(assetsDir, 'optimized');

async function optimizeImage(filePath, relativePath) {
  const normalizedRelativePath = normalizePath(relativePath).replace(/\.(jpe?g|png)$/i, '.webp');
  const outputPath = path.join(optimizedDir, normalizedRelativePath);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  try {
    await sharp(filePath)
      .resize({ width: 1200 })
      .webp({ quality: 70 })
      .toFile(outputPath);

    console.log(`✅ ${normalizedRelativePath} otimizada com sucesso`);
  } catch (err) {
    console.error(`❌ Erro ao processar ${normalizedRelativePath}:`, err.message);
  }
}

async function processDirectory(currentDir, relativePath = '') {
  const items = await fs.readdir(currentDir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(currentDir, item.name);
    const newRelativePath = path.join(relativePath, item.name);

    if (item.isDirectory()) {
      await processDirectory(itemPath, newRelativePath);
    } else if (/\.(jpe?g|png)$/i.test(item.name)) {
      await optimizeImage(itemPath, newRelativePath);
    }
  }
}

async function optimizeImages() {
  try {
    await fs.rm(optimizedDir, { recursive: true, force: true });
    await fs.mkdir(optimizedDir, { recursive: true });

    console.log('📂 Iniciando otimização de imagens...');
    await processDirectory(assetsDir);
    console.log('🎉 Otimização concluída!');
  } catch (err) {
    console.error('❌ Erro geral:', err.message);
  }
}

optimizeImages();
