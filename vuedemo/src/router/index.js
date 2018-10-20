import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// user
import UserIndex from '@/pages/user/Index'
import UserAdd from '@/pages/user/add'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },

    // user
    { path: '/user/index', component: UserIndex },
    { path: '/user/add', component: UserAdd }
  ]
})
