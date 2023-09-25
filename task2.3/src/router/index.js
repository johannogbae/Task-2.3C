import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TaskList',
      component: () => import('../views/TaskList.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/TaskForm',
      name: 'TaskForm',
      component: () => import('../views/TaskForm.vue')
    },
    {
      path: '/Components',
      name: 'Components',
      component: () => import('../views/Components.vue')
    },
    {
      path: '/ListRendering',
      name: 'ListRendering',
      component: () => import('../views/ListRendering.vue')
    }
  ]
})

export default router
