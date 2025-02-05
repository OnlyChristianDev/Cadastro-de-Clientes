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
      
      component: () => import('../views/ListaUsuario.vue'),
    },
  ],
})

export default router
