import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealView from '../views/MealView.vue'
import SearchResultsView from '../views/SearchResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/meal/:id',
      name: 'meal',
      component: MealView
    },
    {
      path: '/find',
      name: 'find',
      component: SearchResultsView
    }
  ]
})

export default router
