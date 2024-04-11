import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/vue-mysite'
  },
  {
    path: '/vue-mysite',
    name: 'main',
    component: () => import('../pages/MainForm.vue')
  },
  {
    path: '/mysites',
    name: 'mysites',
    component: () => import('../pages/MySites.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../pages/Contacts.vue')
  },
  {
    path: '/photos',
    name: 'photos',
    component: () => import('../pages/Photos.vue')
  },
  {
    path: '/hobby',
    name: 'hobby',
    component: () => import('../pages/Photos.vue')
  },
  {
    path: '/handmade',
    name: 'handmade',
    component: () => import('../pages/Photos.vue')
  },
  {
    path: '/dysnai',
    name: 'dysnai',
    component: () => import('../pages/Dysnai.vue')
  },
  {
    path: '/platezh',
    name: 'platezh',
    component: () => import('../components/platezh/Platezh.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
