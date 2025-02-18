import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {} // Isso evita o erro de "process is not defined"
  },
  build: {
    target: "esnext",
  }
})
