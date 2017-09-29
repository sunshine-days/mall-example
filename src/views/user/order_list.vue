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
            <flexbox orient="vertical" v-if="orderList.length != 0">
                <flexbox-item class="order-info" v-for="order in orderList" >
                  <!--订单信息-->
                    <div style="width:100%;">
                        <div class="order-no">
                            <span class="order-no-title">订单号:</span>
                            <span>{{order.orderId}}</span>
                            <span class="order-state">{{getStateName(order.state)}}</span>
                        </div>
                        <!--订单商品信息-->
                        <div class="order-item" v-for="item in order.items">
                            <div class="order-item-img">
                                <img :src="item.imgUrl">
                            </div>
                            <div class="order-item-info-left">
                              <span class="order-item-info-name">{{item.name}}</span>
                              <span class="order-item-info-spec">规格:{{item.spec}}</span>
                            </div>
                            <div class="order-item-info-right">
                              <div class="order-item-info-price">
                                <p>
                                  <span>￥{{item.salePrice}}</span>
                                </p>
                                <span class="order-item-info-quantity">x{{item.quantity}}</span>
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
                          <div class="order-options-button-group" v-if="order.state === 'ORDERING'">
                            <x-button  type="primary" plain mini>取消订单</x-button>
                            <x-button type="primary" plain mini style="color: #fff;background-color: #20A0FF;">付款</x-button>
                          </div>
                          <div class="order-options-button-group" v-if="order.state === 'PAID'">
                            <x-button  type="primary" plain mini>退款</x-button>
                            <x-button type="primary" plain mini style="color: #fff;background-color: #20A0FF;">通知发货</x-button>
                          </div>
                          <div class="order-options-button-group" v-if="order.state === 'DELIVERED'">
                            <x-button  type="primary" plain mini>查看物流</x-button>
                            <x-button type="primary" plain mini style="color: #fff;background-color: #20A0FF;">确认收货</x-button>
                          </div>
                          <div class="order-options-button-group" v-if="order.state === 'FINISHED'">
                            <x-button  type="primary" plain mini>删除订单</x-button>
                            <x-button type="primary" plain mini style="color: #fff;background-color: #20A0FF;">再买一次</x-button>
                          </div>
                        </div>
                    </div>
                </flexbox-item>
            </flexbox>
          <div class="empty-order" v-else>
            <divider style="margin-top:10px">暂无订单</divider>
              <flexbox orient="vertical" style="margin-top:30px;">
                <flexbox-item><div class="flex-demo"><img src="../../assets/cart-icon.png"></div></flexbox-item>
                  <flexbox-item>
                    <div class="flex-demo">
                      <span>您还没有任何订单记录</span>
                    </div>
                  </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo">
                    <x-button type="primary" style="width:40%">去逛逛</x-button>
                  </div>
                </flexbox-item>
              </flexbox>
          </div>
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
  </div>
</template>

<script>
import { Tab, TabItem, Flexbox, FlexboxItem, XButton, Divider } from 'vux'

export default {
  components: {
    Tab, TabItem, Flexbox, FlexboxItem, XButton, Divider
  },
  mounted () {
    // this.orderList = this.allList
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      showMore: false,
      orderList: [],
      onOrderingList: [
        {
          orderId: 'TD12222547854548612',
          state: 'ORDERING',
          items: [
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            },
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼辛苦辛苦开心开心看开心卡卡西开心开心看开心开心看',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            }
          ]
        }
      ],
      paidList: [
        {
          orderId: 'TD12222547854548612',
          state: 'PAID',
          items: [
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            }
          ]
        }
      ],
      deliveredList: [
        {
          orderId: 'TD12222547854548612',
          state: 'DELIVERED',
          items: [
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            },
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼辛苦辛苦开心开心看开心卡卡西开心开心看开心开心看',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            }
          ]
        }
      ],
      finishedList: [
        {
          orderId: 'TD12222547854548612',
          state: 'FINISHED',
          items: [
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            }
          ]
        }
      ],
      allList: [
        {
          orderId: 'TD12222547854548612',
          state: 'ORDERING',
          items: [
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            },
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼辛苦辛苦开心开心看开心卡卡西开心开心看开心开心看',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            }
          ]
        },
        {
          orderId: 'TD12222547854548612',
          state: 'DELIVERED',
          items: [
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            },
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼辛苦辛苦开心开心看开心卡卡西开心开心看开心开心看',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            }
          ]
        },
        {
          orderId: 'TD12222547854548612',
          state: 'PAID',
          items: [
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            }
          ]
        },
        {
          orderId: 'TD12222547854548612',
          state: 'FINISHED',
          items: [
            {
              imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
              name: '双层茶杯+茶味月饼',
              spec: '红色套装',
              quantity: 1,
              salePrice: 2669
            }
          ]
        }
      ]
    }
  },
  methods: {
    onItemClick (index) {
      switch (index) {
        case 0:
          this.orderList = this.allList
          break
        case 1:
          this.orderList = this.onOrderingList
          break
        case 2:
          this.orderList = this.paidList
          break
        case 3:
          this.orderList = this.deliveredList
          break
        case 4:
          this.orderList = this.finishedList
          break
      }
    },
    getStateName (state) {
      let name = '未知'
      switch (state) {
        case 'ORDERING':
          name = '待付款'
          break
        case 'PAID':
          name = '待发货'
          break
        case 'DELIVERED':
          name = '已发货'
          break
        case 'FINISHED':
          name = '完成'
          break
      }
      return name
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
.order-item:after{
  content:'';
  display: table;
  clear: both;
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
.empty-order{
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
