import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Login from '@/components/pages/Login'
import Display from '@/components/pages/Display'
import Publish from '@/components/pages/Publish'
import Information from '@/components/pages/Information'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        requireLogin: true
      },
      children: [
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Display',
      component: Display
    },
    {
      path: '/Publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/Information',
      name: 'Information',
      component: Information,
      children: [
      ]
    }
  ]
})
