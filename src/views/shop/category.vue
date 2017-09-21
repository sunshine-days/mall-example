<template>
  <div>
      <div class="mall-tab">
        <tab active-color="#20A0FF">
            <tab-item selected @on-item-click="onItemClick">推荐</tab-item>
            <tab-item  @on-item-click="onItemClick">基因检测</tab-item>
            <tab-item @on-item-click="onItemClick">健康服务</tab-item>
            <tab-item @on-item-click="onItemClick">周边产品</tab-item>
        </tab>
      </div>
      <div class="content">
            <flexbox orient="vertical" style="margin-top:30px;">
        <flexbox-item v-for="item in itemList">
          
          <div style="width:90%;margin:0 auto;background-color:#fff;box-shadow:0 0 1px #000 inset;">
            <a :href="item.url"></a>
            <div>
              <img :src="item.img" style="width:100%;height:200px;">
            </div>
            <div style="padding:0.5rem">
               <div><span class="item-title">这是一次简单的旅行</span></div>
            <div ><span class="item-price"><em style="font-style:normal">￥</em>455</span><span class="item-price-old">￥455</span></div>
            </div>
          </div>
          
        </flexbox-item>
      </flexbox>
      </div>
      <tabbars activeTab="category"></tabbars>
  </div>
</template>

<script>
import tabbars from 'components/tabbar'
import { Tab, TabItem, Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Tab, TabItem, Flexbox, FlexboxItem, tabbars
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
        case 3:
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
.mall-tab{
    position: fixed;
    width: 100%;
    top: 0;
    z-index:100;
}
.content{
    width:100%;
    overflow: auto;
    position:fixed;
    top:30px;
    bottom:60px;
    z-index:80;
}
.item-title{

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
