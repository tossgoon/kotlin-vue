import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/pages/user/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/user/index', component: UserIndex }
  ]
})
