import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    replace({
      'process.env': 'import.meta.env'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})