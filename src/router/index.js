import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '@/views/HistoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/occurrences',
      name: 'occurrences',
      component: () => import('../views/OccurrencesView.vue'),
    },
    {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/historico',
      name: 'historico',
      component: HistoryView,
    },
  ],
})

export default router
