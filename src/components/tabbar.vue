<template>
  <div>
    <div class="mall-tabbar">
      <tabbar >
      <tabbar-item :selected="true">
        <img slot="icon" src="../assets/home.png">
        <img slot="icon-active" src="../assets/home-active.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item >
        <img slot="icon" src="../assets/category.png">
        <img slot="icon-active" src="../assets/category-active.png">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item >
        <img slot="icon" src="../assets/cart.png">
        <img slot="icon-active" src="../assets/cart-active.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/user.png">
        <img slot="icon-active" src="../assets/user-active.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar, TabbarItem
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      showMore: false
    }
  },
  methods: {
  }
}
</script>

<style>
.mall-tabbar{
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
