import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '@/views/layout'
import home from '@/views/home.vue'
import user from '@/views/user.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/',
        component: home,
      },
      {
        path: '/user',
        component: user,
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
