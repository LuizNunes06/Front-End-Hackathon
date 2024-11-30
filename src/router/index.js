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
          {
            path: '/aluno',
            name: 'aluno',
            component: () => import('../views/StudentView.vue'),
          },
          {
            path:  '/notas',
            name:   'notas',
            component: () => import('../components/Student/Mobile/MobileGrades.vue')
          }
          ,
          {
            path:  '/obsantigas',
            name:   'obsantigas',
            component: () => import('../components/Student/Mobile/MobileOldObservation.vue')
          }
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
