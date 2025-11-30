import './assets/css/main.css'

import { ViteSSG } from 'vite-ssg/single-page'
import type { Component } from 'vue'
import App from './App.vue'
import { createApp } from 'vue'

async function setupApp() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const app = createApp(App)

      const viteSSG = ViteSSG(App as Component)
      viteSSG.init()
      resolve(app)
    }, 2500)
  })
}

setupApp().then((app) => {
  app.mount('#app')
})
