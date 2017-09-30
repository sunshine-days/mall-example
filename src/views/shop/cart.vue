<template>
  <div>
    <x-header :left-options="{showBack: false}" style="background-color:#20A0FF;">购物车</x-header>
    <div class="empty-cart" v-show="false">
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
    <div style="width:100%">
      <group >
      <cell title="操作" >
          <x-button type="primary" mini @click.native="selectOption('edit')" v-if="!optionFlag">编辑</x-button>
          <x-button type="primary" mini @click.native="selectOption('close')" v-else>完成</x-button>
        </cell>
        <cell-box >
          <check-icon :value.sync="demo1"></check-icon>
          <div style="width:84px;height:84px;">
            <img src="https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80" style="width:100%;height:100%;">
          </div>
          <div style="margin-left:10px;">
            <p style="font-size:0.9rem">日式鹏软抱枕</p>
            <p style="font-size:0.7rem;color:#8492A6">黑色</p>
            <p style="font-size:1rem;">￥45</p>
          </div>
          <inline-x-number style="position:absolute;right:0px;bottom:10px" :min="1" width="40px" button-style="round"></inline-x-number>
        </cell-box>
        <cell-box>
          <check-icon :value.sync="demo1"></check-icon>
          <div style="width:84px;height:84px;">
            <img src="https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80" style="width:100%;height:100%;">
          </div>
          <div style="margin-left:10px;">
            <p style="font-size:0.9rem">日式鹏软抱枕</p>
            <p style="font-size:0.7rem;color:#8492A6">黑色</p>
            <p style="font-size:1rem;">￥45</p>
          </div>
          <inline-x-number style="position:absolute;right:0px;bottom:10px" :min="1" width="40px" button-style="round"></inline-x-number>
        </cell-box>
        </group>
    </div>
    <div style="position:fixed;bottom:53px;width:100%">
      <group >
      <cell-box style="background-color:#F7F7FA;">
         <check-icon :value.sync="demo1">全选</check-icon>
         <div style="position:absolute;right:10px;" v-if="!optionFlag">
          <span style="color:#475669;font-size:0.8rem">合计:</span>
          <span style="color:#FF4949;font-size:1.2rem">￥45.00</span>
          <x-button type="primary" mini link="/demo">下单</x-button>
         </div>
         <div style="position:absolute;right:10px;" v-else>
          <x-button type="primary" mini link="/demo" style="background-color:#FF4949">删除选中</x-button>
         </div>
      </cell-box>
    </group>
    </div>
    <tabbars activeTab="cart"></tabbars>
  </div>
</template>

<script>
import tabbars from 'components/tabbar'
import { Flexbox, Cell, CellBox, FlexboxItem, Divider, XButton, XHeader, Checker, CheckerItem, CheckIcon, InlineXNumber, Group } from 'vux'

export default {
  components: {
    Flexbox, FlexboxItem, Cell, CellBox, Divider, XButton, tabbars, XHeader, Checker, CheckerItem, CheckIcon, InlineXNumber, Group
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      demo1: false,
      showMore: false,
      optionFlag: false,
      items: [
        {
          imgUrl: 'https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80',
          name: '双层茶杯+茶味月饼',
          spec: '红色套装',
          quantity: 1,
          salePrice: 2669
        }
      ],
      inlineDescList: [
        {key: '1', value: 'tiger is good', inlineDesc: 'Tiger is the king of mountain'},
        {key: '2', value: 'lion is better', inlineDesc: 'Lion is the king of woods'},
        {key: '3', value: 'camel is best, no inline-desc'}
      ],
      inlineDescListValue: [1],
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
    change () {
    },
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
    },
    selectOption (flag) {
      if (flag === 'edit') {
        this.optionFlag = true
      }
      if (flag === 'close') {
        this.optionFlag = false
      }
    }
  },
  watch: {
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
</style>
