import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://azazefir.github.io/geekart-test/',
  plugins: [react()],
})
