import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Data',
    component: () => import('../views/Data.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
    
  },
  {
    path: '/leaflet',
    name: 'leaflet',
    component: () => import('../views/Leaflet.vue')
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
