import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Calendar from './views/Calendar.vue'
import Bot from './views/Bot.vue'
import Activity from './views/Activity.vue'
import Gallery from './views/Gallery.vue'
import GanttChart from './views/GanttChart'

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
    {
      path: '/bot',
      name: 'bot',
      component: Bot
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/gantt-chart',
      name: 'gantt-chart',
      component: GanttChart
    }

  ]
})
