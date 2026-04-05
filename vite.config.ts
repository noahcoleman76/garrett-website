import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/garrett-website/',
  plugins: [react()],
  build: { outDir: 'dist' } // default, just being explicit
})
