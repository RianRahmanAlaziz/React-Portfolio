import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // memungkinkan akses dari network
    port: 5173, // port default atau sesuaikan jika kamu menggunakan port lain
    hmr: {
      host: '0.0.0.0', // atau IP lokal
    },
  },
})
