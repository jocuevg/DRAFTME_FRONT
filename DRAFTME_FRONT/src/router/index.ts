import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout, 
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'jugadores',
          name: 'jugadores',
          component: Home
        },
        {
          path: 'equipos',
          name: 'equipos',
          component: Home
        },
        {
          path: 'categorias',
          name: 'categorias',
          component: Home
        },
        {
          path: 'favoritos',
          name: 'favoritos',
          component: Home
        },
        {
          path: 'perfil',
          name: 'perfil',
          component: Home
        }
      ]
    }
  ]
})

export default router
