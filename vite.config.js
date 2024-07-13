import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin(), // добавляем плагин для минификации HTML
  ],
  base: '/shri2024-task/',
  build: {
    minify: 'terser', // минификация JavaScript
  },
});