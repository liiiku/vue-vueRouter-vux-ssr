// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id', // /app/xxx
    // path: '/app',
    props: true,
    // props: {
    //   id: '456'
    // },
    // props: (route) => ({
    //   id: route.query.b
    // }),
    component: () => {
      return import('../views/todo/todo.vue') // 使用这个需要安装babel-plugin-syntax-dynamic-import
    },
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'xxxxxx'
    },
    beforeEnter: (to, from, next) => {
      console.log('app route before enter')
      next() // 一定要执行next，要不不会进入的
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => {
      return import('../views/login/login.vue')
    }
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
