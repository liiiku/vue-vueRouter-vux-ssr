import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

// const root = document.createElement('div')
// document.body.appendChild(root)
const router = createRouter()

new Vue({
  router,
  render: (h) => h(App) // h 实际上是vue的createElement的参数
}).$mount('#root')
