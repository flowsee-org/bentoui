import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repository under /bentoui/.
export default defineConfig({
  base: '/bentoui/',
  plugins: [react(), tailwindcss()],
})
