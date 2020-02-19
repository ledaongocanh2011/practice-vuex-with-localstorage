import Vue from 'vue'
import Router from 'vue-router'
import listProducts from '@/components/listProducts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/listProduct',
      name: 'listProduct',
      component: listProducts
    }
  ]
})
