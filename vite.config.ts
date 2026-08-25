import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Update `base` to your GitHub repo name when deploying to GitHub Pages.
// Example: base: '/adeel-portfolio/'
export default defineConfig({
  base: '/adeel-portfolio/',
  plugins: [react(), tailwindcss()],
})
