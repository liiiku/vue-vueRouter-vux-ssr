import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

// const root = document.createElement('div')
// document.body.appendChild(root)
const router = createRouter()

// 在每一次路由守卫进行跳转的时候，都会触发这个钩子
router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  if (to.fullPath === '/app') { // 运用场景：一些页面是需要用户登录才能去显示的，这个验证就可以放在这里做
    // next()
    // next('/login') // 如果判断了需要登录，会执行这一步
    next({
      paht: '/login'
    })
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

// 每次导航已经跳转后才会触发，跳转完成了就不需要next了
router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  render: (h) => h(App) // h 实际上是vue的createElement的参数
}).$mount('#root')
