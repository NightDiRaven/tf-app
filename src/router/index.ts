import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ExpensesView from '../views/ExpensesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ExpensesView
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import(/* webpackChunkName: "categories" */ '../views/CategoriesView.vue')
  },
  {
    path: '/family',
    name: 'family',
    component: () => import(/* webpackChunkName: "family" */ '../views/FamilyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
