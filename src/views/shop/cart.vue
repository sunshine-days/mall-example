<template>
  <div>
    <x-header>This is the page title.</x-header>
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
    <div class="guess-like">
            <divider style="margin-top:20px;margin-bottom:15px;">猜你喜欢</divider>
              <flexbox style="margin-bottom:15px;">
                <flexbox-item>
                   <router-link to="/">
                      <div style="width:96%;padding:5px;background-color:#fff">
                        <div style="width:100%;height:180px;">
                          <img src="https://static.vux.li/demo/1.jpg" style="width:100%;height:100%;">
                      </div>
                      <div style="padding:0.5rem">
                      <div><span class="item-title">这是一次简单的旅行</span></div>
                        <div >
                          <span class="item-price">
                          <em style="font-style:normal">￥</em>455</span>
                          <span class="item-price-old">￥455</span>
                        </div>
                      </div>
                    </div>
                    </router-link>
                </flexbox-item>
                <flexbox-item>
                  <router-link to="/">
                      <div style="width:96%;padding:5px;background-color:#fff">
                      <div style="width:100%;height:180px;">
                          <img src="https://static.vux.li/demo/3.jpg" style="width:100%;height:100%;">
                      </div>
                      <div style="padding:0.5rem">
                      <div><span class="item-title">这是一次简单的旅行</span></div>
                        <div >
                          <span class="item-price">
                          <em style="font-style:normal">￥</em>455</span>
                          <span class="item-price-old">￥455</span>
                        </div>
                      </div>
                    </div>
                    </router-link>
                </flexbox-item>
              </flexbox>
              <flexbox style="margin-bottom:15px;">
                <flexbox-item>
                   <router-link to="/">
                      <div style="width:96%;padding:5px;background-color:#fff">
                        <div style="width:100%;height:180px;">
                          <img src="https://static.vux.li/demo/1.jpg" style="width:100%;height:100%;">
                      </div>
                      <div style="padding:0.5rem">
                      <div><span class="item-title">这是一次简单的旅行</span></div>
                        <div >
                          <span class="item-price">
                          <em style="font-style:normal">￥</em>455</span>
                          <span class="item-price-old">￥455</span>
                        </div>
                      </div>
                    </div>
                    </router-link>
                </flexbox-item>
                <flexbox-item>
                  <router-link to="/">
                      <div style="width:96%;padding:5px;background-color:#fff">
                      <div style="width:100%;height:180px;">
                          <img src="https://static.vux.li/demo/3.jpg" style="width:100%;height:100%;">
                      </div>
                      <div style="padding:0.5rem">
                      <div><span class="item-title">这是一次简单的旅行</span></div>
                        <div >
                          <span class="item-price">
                          <em style="font-style:normal">￥</em>455</span>
                          <span class="item-price-old">￥455</span>
                        </div>
                      </div>
                    </div>
                    </router-link>
                </flexbox-item>
              </flexbox>
          </div>
    </div>
    <tabbars activeTab="cart"></tabbars>
  </div>
</template>

<script>
import tabbars from 'components/tabbar'
import { Flexbox, FlexboxItem, Divider, XButton, XHeader } from 'vux'

export default {
  components: {
    Flexbox, FlexboxItem, Divider, XButton, tabbars, XHeader
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
.flex-demo {
  text-align: center;
  border-radius: 4px;
  color:#99A9BF;
  background-clip: padding-box;
}
.guess-like{
  margin-bottom:65px;
}
.item-price{
  font-size: 1.2rem;
  color: #FF4949;
}
.item-price-old{
  margin-left:.3rem;
  font-size:0.9rem;
  color: #99A9BF;
  text-decoration:line-through;
}
</style>
