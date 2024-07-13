import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 20 },
      pngquant: { quality: [0.6, 0.8] },
      svgo: {
          plugins: [
              { removeViewBox: false },
              { removeEmptyAttrs: false }
          ]
      },
      webp: { quality: 20 },
      avif: { quality: 20 }
  })],
  base: "/shri2024-task/",
  
})
