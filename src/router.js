import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Calendar from './views/Calendar.vue'
import Bot from './views/Bot.vue'
import Activity from './views/Activity.vue'
import Gallery from './views/Gallery.vue'
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
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Bot',
      name: 'Bot',
      component: Bot
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },

  ]
})
