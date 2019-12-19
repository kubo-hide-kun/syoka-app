import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'


import Activity from './views/Activity.vue'
//import Bot from './views/Bot'
//import Gallery from './views/Gallery'

//あたらしいるーとをかく
Vue.use(Router)

export default new Router({



  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
//    {
//      path: '/bot',
//      name: 'Bot',
//      component: Bot
//    },
//    {
//      path: '/Gallery',
//      name: 'Gallery',
//      component: Gallery
//    },
  ]
})
