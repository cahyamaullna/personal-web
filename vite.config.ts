import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { spaLoading } from 'vite-plugin-spa-loading'

export default defineConfig({
  plugins: [
    vue(),
    spaLoading('img', {
      debounce: 100,
      src: './src/assets/loading.gif',
      devEnable: true,
      tipText: '',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: './',
  build: {
    assetsDir: '.',
  },
})
