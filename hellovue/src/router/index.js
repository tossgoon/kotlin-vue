import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Alert from '@/components/Alert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/Index',
      name: 'Index',
      component: Index
    }, {
      path: '/Alert',
      name: 'Alert',
      component: Alert
    }
  ]
})