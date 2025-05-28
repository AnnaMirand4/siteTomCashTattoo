import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function optimizeImages() {
  const assetsDir = path.join(__dirname, 'src', 'assets');
  const optimizedDir = path.join(assetsDir, 'optimized');

  // Limpa e recria o diretório de saída
  try {
    await fs.rm(optimizedDir, { recursive: true, force: true });
  } catch (err) {
    console.log('Diretório optimized não existia, criando...');
  }
  await fs.mkdir(optimizedDir, { recursive: true });

  const processImage = async (filePath, relativePath) => {
    const outputPath = path.join(optimizedDir, relativePath);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    try {
      await sharp(filePath)
        .jpeg({ quality: 70, mozjpeg: true })
        .png({ quality: 70 })
        .toFile(outputPath);
      console.log(`✅ ${relativePath} otimizada com sucesso`);
      return true;
    } catch (err) {
      console.error(`❌ Erro ao processar ${relativePath}:`, err.message);
      return false;
    }
  };

  const processDirectory = async (currentDir, relativePath = '') => {
    const items = await fs.readdir(currentDir, { withFileTypes: true });

    for (const item of items) {
      const itemPath = path.join(currentDir, item.name);
      const newRelativePath = path.join(relativePath, item.name);

      if (item.isDirectory()) {
        await processDirectory(itemPath, newRelativePath);
      } else if (/\.(jpg|jpeg|png|JPG)$/i.test(item.name)) {
        await processImage(itemPath, newRelativePath);
      }
    }
  };

  console.log('🔄 Iniciando otimização de imagens...');
  await processDirectory(assetsDir);
  console.log('✅ Todas as imagens foram processadas!');
}

optimizeImages().catch(err => {
  console.error('❌ Erro fatal:', err);
  process.exit(1);
});