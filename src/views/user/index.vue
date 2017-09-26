<template>
  <div>
    <div class="options">
      <group>
        <cell title="你好啊"> 
          <img slot="icon" width="64" style="display:block;margin-right:5px;border:1px solid #324057;border-radius:10px;" src="../../assets/head-img.png">
        </cell>
      </group>
      <group >
      <cell title="我的订单" is-link style="margin-top:10px;" link="/user/order">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/order.png">  
      </cell>
     
      <cell  title="优惠券" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/gift.png">  
      </cell>
      <cell  title="收货地址" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/address.png">
      </cell>
      <cell  title="常见问题" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/question.png">
      </cell>
      <cell  title="联系客服" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/contact.png">
      </cell>
    </group>
    </div>
    <div class="mall-tabbar">
      <tabbar >
      <tabbar-item link="/">
        <img slot="icon" src="../../assets/home.png">
        <img slot="icon-active" src="../../assets/home-active.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item  link="/shop/category">
        <img slot="icon" src="../../assets/category.png">
        <img slot="icon-active" src="../../assets/category-active.png">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item  link="/shop/cart">
        <img slot="icon" src="../../assets/cart.png">
        <img slot="icon-active" src="../../assets/cart-active.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item :selected="true" link="/user">
        <img slot="icon" src="../../assets/user.png">
        <img slot="icon-active" src="../../assets/user-active.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Flexbox, FlexboxItem, Divider, XButton, Cell, Group } from 'vux'

export default {
  components: {
    Tabbar, TabbarItem, Flexbox, FlexboxItem, Divider, XButton, Cell, Group
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      showMore: false,
      itemList: [
        {
          url: '1',
          img: 'https://static.vux.li/demo/3.jpg'
        },
        {
          url: '2',
          img: 'https://static.vux.li/demo/2.jpg'
        },
        {
          url: '3',
          img: 'https://static.vux.li/demo/1.jpg'
        },
        {
          url: '4',
          img: 'https://static.vux.li/demo/3.jpg'
        },
        {
          url: '5',
          img: 'https://static.vux.li/demo/2.jpg'
        }
      ]
    }
  },
  methods: {
    onItemClick (index) {
      switch (index) {
        case 0:
          this.itemList = [
            {
              url: '1',
              img: 'https://static.vux.li/demo/3.jpg'
            },
            {
              url: '2',
              img: 'https://static.vux.li/demo/2.jpg'
            },
            {
              url: '3',
              img: 'https://static.vux.li/demo/1.jpg'
            },
            {
              url: '4',
              img: 'https://static.vux.li/demo/3.jpg'
            },
            {
              url: '5',
              img: 'https://static.vux.li/demo/2.jpg'
            }
          ]
          break
        case 1:
          this.itemList = [
            {
              url: '1',
              img: 'https://static.vux.li/demo/3.jpg'
            },
            {
              url: '2',
              img: 'https://static.vux.li/demo/2.jpg'
            },
            {
              url: '3',
              img: 'https://static.vux.li/demo/1.jpg'
            }
          ]
          break
        case 2:
          this.itemList = [
            {
              url: '1',
              img: 'https://static.vux.li/demo/3.jpg'
            },
            {
              url: '2',
              img: 'https://static.vux.li/demo/2.jpg'
            },
            {
              url: '3',
              img: 'https://static.vux.li/demo/1.jpg'
            },
            {
              url: '4',
              img: 'https://static.vux.li/demo/1.jpg'
            }
          ]
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped>
.mall-tabbar{
  position: fixed;
  width: 100%;
  bottom: 0;
}
.empty-cart{
  margin:0 auto;
  width:98%;
}
.options {
  color:#324057
}
</style>
