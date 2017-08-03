import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'
import TheApp from '@/components/TheApp'
import TheSite from '@/components/TheSite'
import Webnician from '@/components/Webnician'

Vue.use(Router)

export default new Router({
  routes:
  [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/site',
      name: 'TheSite',
      component: TheSite
    },
    {
      path: '/app',
      name: 'TheApp',
      component: TheApp
    },
    {
      path: '/webnician',
      name: 'Webnician',
      component: Webnician
    }
  ]
})
