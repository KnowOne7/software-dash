import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['flowbite']
  },
  resolve: {
    alias: {
      moment: 'moment/moment.js'
    },
  },
})
