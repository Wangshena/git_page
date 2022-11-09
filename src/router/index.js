import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Page2 from '@/components/Page2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    },{
      path: '/Page2',
      name: 'Page2',
      component: Page2
    }
  ]
})

