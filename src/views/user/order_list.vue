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
            <flexbox >
                <flexbox-item class="order-info">
                  <!--订单信息-->
                    <div style="width:100%;">
                        <div class="order-no">
                            <span class="order-no-title">订单号:</span>
                            <span>YA1226554455663</span>
                            <span class="order-state">待付款</span>
                        </div>
                        <!--订单商品信息-->
                        <div class="order-item">
                            <div class="order-item-img">
                                <img src="https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80">
                            </div>
                            <div class="order-item-info-left">
                              <span class="order-item-info-name">双层茶杯+茶味月饼</span>
                              <span class="order-item-info-spec">规格:红色套装</span>
                            </div>
                            <div class="order-item-info-right">
                              <div class="order-item-info-price">
                                <p>
                                  <span>￥2266.00</span>
                                </p>
                                <span class="order-item-info-quantity">x1</span>
                              </div>
                            </div>
                        </div>
                        <div class="order-item">
                            <div class="order-item-img">
                                <img src="https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80">
                            </div>
                            <div class="order-item-info-left">
                              <span class="order-item-info-name">双层茶杯+茶味月饼神神道道沙第三方胜多负少的发撒打算打算双方都是固定的范德萨发胜多负少的</span>
                              <span class="order-item-info-spec">规格:红色套装</span>
                            </div>
                            <div class="order-item-info-right">
                              <div class="order-item-info-price">
                                <p>
                                  <span>￥499.00</span>
                                </p>
                                <span class="order-item-info-quantity">x1</span>
                              </div>
                            </div>
                        </div>
                        <!--订单总价-->
                        <div class="order-total">
                            <div class="order-total-body">
                                <span class="order-total-title">合计:</span>
                                <span class="order-total-price">￥499.00</span>
                            </div>
                        </div>
                        <!--订单操作-->
                        <div class="order-options">
                          <div class="order-options-button-group">
                            <x-button  type="primary" plain mini>取消订单</x-button>
                            <x-button type="primary" plain mini style="color: #fff;background-color: #20A0FF;">付款</x-button>
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
      orderList: [
        {
          orderId: 'TD12222547854548612',
          state: 'ORDERING'
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
.order-info{
  background-color:white;
  margin-bottom:10px;
}
.order-no{
  margin-top:10px;
  margin-bottom:10px;
  color:#8492A6;
  font-size:0.7rem
}
.order-no .order-no-title{
  margin-left:20px;
}
.order-no .order-state{
  display:inline-block;
  float:right;
  margin-right:10px;
  color:#20A0FF;
  font-size:1rem;
  line-height:1.1
}
.order-item{
  padding-top:10px;
  border-top:1px solid #eee;
  display:flow-root;
}
.order-item .order-item-img{
  width:84px;
  height:84px;
  margin-left:20px;
  float:left;
  padding-bottom:10px;
}
.order-item .order-item-img img{
  width:100%;
  height:100%;
}
.order-item .order-item-info-left{
  margin-left:10px;
  float:left;
  display:inline-block;
  width:40%;
}
.order-item-info-left .order-item-info-name{
  font-size:0.9rem;
  text-overflow:-o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height:1.2;
}
.order-item-info-left .order-item-info-spec{
  color:#8492A6;
  font-size:0.9rem;
  margin-top:20px;
}
.order-item .order-item-info-right{
  margin-right:10px;
  float:right;
  display:inline-block;
  width:15%;
}
.order-item-info-right .order-item-info-price{
  float:right;
  line-height:1;
  font-size:0.9rem;
}
.order-item-info-right .order-item-info-quantity{
  color:#8492A6;
  margin-top:10px;
  float:right;
}
.order-total{
  padding-top:10px;
  padding-bottom:20px;
  border-top:1px solid #eee;
  clear:both;
}
.order-total .order-total-body{
  float:right;
  margin-right:10px;
}
.order-total-body .order-total-title{
  color:#8492A6;
  font-size:0.7rem;
}
.order-total-body .order-total-price{
  font-size:1.15rem;
}
.order-options{
  margin-top:10px;
  border-top:1px solid #eee;
}
.order-options .order-options-button-group{
  float:right;
  padding-bottom:10px;
  margin-right:10px;
}
</style>
