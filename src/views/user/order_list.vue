<template>
  <div>
      <!--顶部选项卡-->
      <div class="mall-tab">
        <tab active-color="#20A0FF">
            <tab-item selected @on-item-click="onItemClick">全部</tab-item>
            <tab-item  @on-item-click="onItemClick">待付款</tab-item>
            <tab-item @on-item-click="onItemClick">待发货</tab-item>
            <tab-item @on-item-click="onItemClick">已发货</tab-item>
            <tab-item @on-item-click="onItemClick">完成</tab-item>
        </tab>
      </div>
      <!--页面主体-->
      <div class="content">
          <!--订单列表-->
            <flexbox orient="vertical" >
                <flexbox-item style="background-color:white;margin-bottom:10px;">
                    <div style="width:100%;">
                        <div style="margin-top:10px;margin-bottom:10px;color:#8492A6;font-size:0.7rem">
                            <span style="margin-left:20px;">订单号:</span>
                            <span>YA1226554455663</span>
                            <span style="display:inline-block;float:right;margin-right:10px;color:#20A0FF;font-size:1rem;line-height:1.1">待收货</span>
                        </div>
                        <div style="padding-top:10px;border-top:1px solid #eee;">
                            <div style="width:84px;height:84px;margin-left:20px;float:left;padding-bottom:10px;">
                                <img src="https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80" style="width:100%;height:100%;">
                            </div>
                            <div style="margin-left:10px;float:left;display:inline-block;width:40%;">
                              <span style="font-size:0.9rem;text-overflow:-o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height:1.2;">双层茶杯+茶味月饼神神道道沙第三方胜多负少的发撒打算打算双方都是固定的范德萨发胜多负少的</span>
                              <br>
                              <span style="color:#8492A6;font-size:0.9rem;margin-top:20px;">规格:红色套装</span>
                            </div>
                            <div style="margin-right:10px;float:right;display:inline-block;width:15%;">
                              <div style="float:right;line-height:1;">
                                <p>
                                  <span style="font-size:0.9rem;">￥499.00</span>
                                </p>
                                <span style="color:#8492A6;font-size:0.9rem;margin-top:10px;float:right;">x1</span>
                              </div>
                            </div>
                        </div>
                        <div style="padding-top:10px;padding-bottom:20px;border-top:1px solid #eee;clear:both">
                            <div style="float:right;margin-right:10px;">
                                <span style="color:#8492A6;font-size:0.7rem">合计:</span>
                                <span style="font-size:1.15rem">￥499.00</span>
                            </div>
                        </div>
                        <div style="margin-top:10px;border-top:1px solid #eee;">
                          <div style="float:right;padding-bottom:10px;margin-right:10px;">
                            <x-button  type="primary" plain mini>取消订单</x-button>
                            <x-button type="primary" plain mini style="color: #fff;background-color: #20A0FF;">付款</x-button>
                          </div>
                        </div>
                    </div>
                </flexbox-item>
                <flexbox-item style="background-color:white">
                    <div style="width:100%;">
                        <div style="margin-top:10px;margin-bottom:10px;color:#8492A6;font-size:0.7rem">
                            <span style="margin-left:20px;">订单号:</span>
                            <span>YA1226554455663</span>
                            <span style="display:inline-block;float:right;margin-right:10px;color:#20A0FF;font-size:1rem;line-height:1.1">待收货</span>
                        </div>
                        <div style="padding-top:10px;border-top:1px solid #eee;">
                            <div style="width:84px;height:84px;margin-left:20px;float:left;padding-bottom:10px;">
                                <img src="https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80" style="width:100%;height:100%;">
                            </div>
                            <div style="margin-left:10px;float:left;display:inline-block;width:40%;">
                              <span style="font-size:0.9rem;text-overflow:-o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height:1.2;">双层茶杯+茶味月饼神神道道沙第三方胜多负少的发撒打算打算双方都是固定的范德萨发胜多负少的</span>
                              <br>
                              <span style="color:#8492A6;font-size:0.9rem;margin-top:20px;">规格:红色套装</span>
                            </div>
                            <div style="margin-right:10px;float:right;display:inline-block;width:15%;">
                              <div style="float:right;line-height:1;">
                                <p>
                                  <span style="font-size:0.9rem;">￥499.00</span>
                                </p>
                                <span style="color:#8492A6;font-size:0.9rem;margin-top:10px;float:right;">x1</span>
                              </div>
                            </div>
                        </div>
                        <div style="padding-top:10px;padding-bottom:20px;border-top:1px solid #eee;clear:both">
                            <div style="float:right;margin-right:10px;">
                                <span style="color:#8492A6;font-size:0.7rem">合计:</span>
                                <span style="font-size:1.15rem">￥499.00</span>
                            </div>
                        </div>
                        <div style="margin-top:10px;border-top:1px solid #eee;">
                          <div style="float:right;padding-bottom:10px;margin-right:10px;">
                            <x-button  type="primary" plain mini>删除订单</x-button>
                            <x-button type="primary" plain mini style="color: #fff;background-color: #20A0FF;">再买一次</x-button>
                          </div>
                        </div>
                    </div>
                </flexbox-item>
            </flexbox>
      </div>
  </div>
</template>

<script>
import { Tab, TabItem, Flexbox, FlexboxItem, XButton } from 'vux'

export default {
  components: {
    Tab, TabItem, Flexbox, FlexboxItem, XButton
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
.weui-btn_plain-primary{
  color:#20A0FF;
  border:1px solid #20A0FF;
}
</style>
