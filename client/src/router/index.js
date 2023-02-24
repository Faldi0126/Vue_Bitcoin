import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Btc from '../views/BtcIdr.vue'
import Idr from '../views/IdrBtc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/btc',
      name: 'btc',
      component: Btc
    },
    {
      path: '/idr',
      name: 'idr',
      component: Idr
    }
  ]
})

export default router
