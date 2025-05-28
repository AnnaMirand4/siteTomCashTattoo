import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@assets': path.resolve(__dirname, './src/assets/optimized'),
      '@pages': path.resolve(__dirname, './src/pages')
    },
     extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs']
  },
  build: {
    // Aumenta o limite de aviso de tamanho
    chunkSizeWarningLimit: 1600,
    // Configuração adicional para o Rollup
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignora avisos específicos
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        warn(warning);
      }
    }
  },
  assetsInclude: ['**/*.JPG']
  
});