import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project site: set base to '/<REPO_NAME_HERE>/'
// For user site (yourusername.github.io): set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME_HERE/'
})
