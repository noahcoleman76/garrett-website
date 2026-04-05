import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/garrett-website/',
  plugins: [react()],
  base: '/',          // important for custom domain at root
  build: { outDir: 'dist' } // default, just being explicit
})
