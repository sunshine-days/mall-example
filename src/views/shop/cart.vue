<template>
  <div>
    <div class="empty-cart">
      <divider style="margin-top:10px">购物车</divider>
      <flexbox orient="vertical" style="margin-top:30px;">
      <flexbox-item><div class="flex-demo"><img src="../../assets/cart-icon.png"></div></flexbox-item>
      <flexbox-item>
        <div class="flex-demo">
          <span>您的购物车空空如也</span>
        </div>
        </flexbox-item>
        <flexbox-item>
        <div class="flex-demo">
          <x-button type="primary" style="width:40%">去逛逛</x-button>
        </div>
        </flexbox-item>
    </flexbox>
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
      <tabbar-item :selected="true" link="/shop/cart">
        <img slot="icon" src="../../assets/cart.png">
        <img slot="icon-active" src="../../assets/cart-active.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/user">
        <img slot="icon" src="../../assets/user.png">
        <img slot="icon-active" src="../../assets/user-active.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Flexbox, FlexboxItem, Divider, XButton } from 'vux'

export default {
  components: {
    Tabbar, TabbarItem, Flexbox, FlexboxItem, Divider, XButton
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

<style>
.mall-tabbar{
  position: fixed;
  width: 100%;
  bottom: 0;
}
.empty-cart{
  margin:0 auto;
  width:98%;
}
.flex-demo {
  text-align: center;
  border-radius: 4px;
  color:#99A9BF;
  background-clip: padding-box;
}
</style>
