import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
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
      name: 'login',
      component: Login
    },

    {
      path: '/home',
      name: 'home',
      component: Home
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
