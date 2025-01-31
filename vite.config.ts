import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: '/chasanah-service.github.io',
  build: {
    outDir: 'dist',
  },
  server: {
    fs: {
      strict: true,
    },
  },
})
