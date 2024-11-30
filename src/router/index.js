import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'ocorrencias',
          component: () => import('../views/OccurrencesView.vue'),
        },
        {
          path: '/historico',
          name: 'historico',
          component: () => import('../views/HistoryView.vue'),
        },
        {
          path: '/turma',
          name: 'turma',
          component: () => import('../views/ConsultaTurmaView.vue'),
          },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/turma',
      name: 'turma',
      component: () => import('../views/ConsultaTurmaView.vue'),
      },
  ],
})

export default router
