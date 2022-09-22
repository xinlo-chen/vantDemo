import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../view/cart'
import Goods from '../view/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
