import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app1'
  },
  {
    path: '/app1',
    component: Todo
  },
  {
    path: '/login',
    component: Login
  }
]
