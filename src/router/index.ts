import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import("../views/LoginPage.vue")
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      
      component: () => import('../views/Cadastro.vue'),
    },
    {
      path: '/listausuarios',
      name: 'listausuarios',
      
      component: () => import('../views/ListaDeUsuarios.vue'),
    },
    {
      path: '/removeuser',
      name: 'removerusuarios',
      
      component: () => import('../views/RemoveUser.vue'),
    },
  ],
})

export default router
