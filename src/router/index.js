import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
//import Contacts from '../views/Contacts'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /*{
      path: '/ ',
      name: 'Contacts',
      component: () => import(Contacts)
    },*/
    {
      path: '/contacts ',
      name: 'Main',
      component: () => import(Main)
    }
  ]
})

export default router