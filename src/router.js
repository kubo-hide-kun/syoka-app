import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Activity from './views/Activity.vue'
<<<<<<< HEAD
//import Bot from './views/Bot'
//import Gallery from './views/Gallery'

//あたらしいるーとをかく
=======
import Bot from './views/Bot.vue'
import Calendar from './views/Calendar.vue'
import Gallery from './views/Gallery.vue'
import GanttChart from './views/GanttChart.vue'

>>>>>>> 921171154e92a748fca4bd0995e10be3269b6c48
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
<<<<<<< HEAD
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
=======
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

>>>>>>> 921171154e92a748fca4bd0995e10be3269b6c48
  ]
})
