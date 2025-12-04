import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pathcraft-portfolio/', // 🔥 OBLIGATOIRE pour GitHub Pages
  plugins: [react()],
})
