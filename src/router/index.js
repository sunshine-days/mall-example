import Vue from 'vue'
import Router from 'vue-router'
// import header from '@/components/header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/shop'
    },
    {
      path: '/shop',
      name: 'index',
      component (resolve) {
        require(['views/shop/index.vue'], resolve)
      }
    },
    {
      path: '/shop/category',
      name: 'category',
      component (resolve) {
        require(['views/shop/category.vue'], resolve)
      }
    },
    {
      path: '/shop/cart',
      name: 'cart',
      component (resolve) {
        require(['views/shop/cart.vue'], resolve)
      }
    },
    {
      path: '/shop/item/:id',
      name: 'item',
      component (resolve) {
        require(['views/shop/item.vue'], resolve)
      }
    },
    {
      path: '/user',
      name: 'head',
      component (resolve) {
        require(['views/user/index.vue'], resolve)
      },
      children: [
        {
          path: '/user/order',
          name: 'order',
          component (resolve) {
            require(['views/user/order.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component (resolve) {
        require(['views/login.vue'], resolve)
      }
    }
  ]
})
