import Vue from 'vue'
import Router from 'vue-router'
// import All from '@/components/HelloWorld'
import Allmovies from '@/components/Allmovies'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Allmovies',
      component: Allmovies
    }
  ]
})
