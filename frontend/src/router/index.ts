import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "../views/home/index.vue"
import Singup from "../views/signup/index.vue"
import Login from "../views/login/index.vue"
import Profile from "../views/profile/index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Singup
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
