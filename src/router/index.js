import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signin from '@/components/auth/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/login',
      name: 'Signin',
      component: Signin
    }
  ]
})
