import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from "@/views/LayoutView/index.vue"
import LoginView from "@/views/LoginView/index.vue"
import HomeView from "@/views/HomeView/index.vue"
import CategoryView from "@/views/CategoryView/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      children:[
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'category',
          name: 'category',
          component: CategoryView,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    
  ]
})

export default router
