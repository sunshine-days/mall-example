<template>
  <div>
      <!--顶部选项卡-->
      <div class="mall-tab">
        <tab active-color="#20A0FF">
            <tab-item selected @on-item-click="onItemClick">全部</tab-item>
            <tab-item  @on-item-click="onItemClick">待付款</tab-item>
            <tab-item @on-item-click="onItemClick">待发货</tab-item>
            <tab-item @on-item-click="onItemClick">已发货</tab-item>
            <tab-item @on-item-click="onItemClick">已完成</tab-item>
            <tab-item @on-item-click="onItemClick">已取消</tab-item>
        </tab>
      </div>
      <!--页面主体-->
      <div class="content">
          <!--订单列表-->
            <flexbox orient="vertical">
                <flexbox-item style="background-color:white">
                    <div style="width:100%;">
                        <div style="margin-top:10px;margin-bottom:10px;color:#8492A6;font-size:0.8rem">
                            <span style="margin-left:10px;">订单号:</span>
                            <span>YA1226554455663</span>
                            <span style="display:inline-block;float:right;margin-right:10px;color:#20A0FF;font-size:1rem;line-height:1.1">待收货</span>
                        </div>
                        <div style="padding-top:10px;margin-bottom:10px;border-top:1px solid #eee;">
                            <div style="width:84px;height:84px;margin-left:10px;">
                                <img src="https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80" style="width:100%;height:100%;">
                            </div>
                        </div>
                    </div>
                </flexbox-item>
                <flexbox-item style="background-color:white">
                    <div style="width:100%;">
                        <div style="margin-top:10px;margin-bottom:10px;color:#8492A6;font-size:0.8rem">
                            <span style="margin-left:10px;">订单号:</span>
                            <span>YA1226554455663</span>
                            <span style="display:inline-block;float:right;margin-right:10px;color:#20A0FF;font-size:1rem;line-height:1.1">待收货</span>
                        </div>
                        <div style="padding-top:10px;margin-bottom:10px;border-top:1px solid #eee;">
                            <div style="width:84px;height:84px;margin-left:10px;">
                                <img src="https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80" style="width:100%;height:100%;">
                            </div>
                        </div>
                    </div>
                </flexbox-item>
            </flexbox>
      </div>
  </div>
</template>

<script>
import { Tab, TabItem, Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Tab, TabItem, Flexbox, FlexboxItem
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

<style scoped>
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
    top:44px;
    bottom:30px;
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
