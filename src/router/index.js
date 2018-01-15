import Vue from 'vue'
import Router from 'vue-router'
import Desktop from '@/components/Desktop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Desktop',
      component: Desktop
    }
  ]
})
