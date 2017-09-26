<template>
<div>
    <div class="view-body">
      <div class="swiper">
        <swiper :list="swiperList" auto  height="300px" dots-class="custom-bottom" dots-position="center"></swiper>
      </div>
      <!--商品信息-->
      <div class="info">
        <group>
          <div style="margin:15px;">
            <p class="name">双层茶杯+茶味月饼</p>
            <p class="second-title">作为中秋节礼物很有心意</p>
            <p class="show-price"><span class="price"><span style="font-size:15px;color:#ad0e11">￥</span>4299</span><span class="fr">免运费</span></p>
          </div>
          <!--服务信息-->
          <a @click="isServiceShow = true" style="display:block;border-top:1px solid #eee;">
          <cell is-link value-align="left" >
          <div class="tips">
            <img src="../../assets/hook.png" style="width:18px;height:18px;display:block;float:left;">
            <span slot="value" style="display:block;float:left;font-size:13px;">正品保障</span>
          </div>
          <div class="tips">
            <img src="../../assets/hook.png" style="width:18px;height:18px;display:block;float:left">
            <span slot="value" style="display:block;float:left;font-size:13px;">售后无忧</span>
          </div>
          </cell>
        </a>
        </group>
        <!--规格-->
        <group style="margin-top:20px;">
        <a @click="showPanel('spec')" style="display:block;border-top:1px solid #eee;">
          <cell title="请选择规格" is-link ></cell>
        </a>
        <!--产品信息-->
        <a @click="showPanel" style="display:block;border-top:1px solid #eee;">
          <cell title="产品参数" is-link ></cell>
        </a>
    </group>
      </div>
      <!--图文介绍-->
      <div class="detail">
        <p>ssss</p>
        <p>ssss</p>
        <p>ssss</p>
        <p>ssss</p>
        <p>ssss</p>
        
      </div>
    </div>
    <!--底部tabbar-->
    <div class="mall-tabbar">
        <a class="tabbar-left">
            <div class="tabbar-icon">
                <img src="../../assets/customerservice.png">
            </div> 
            <span>客服</span>
        </a>
        <router-link class="tabbar-left" to="/">
           <div class="tabbar-icon">
                <img src="../../assets/home.png">
            </div> 
            <span>首页</span>
        </router-link>
         <router-link class="tabbar-left" to="/shop/cart">
           <div class="tabbar-icon">
                <img src="../../assets/cart.png">
            </div> 
            <span>购物车</span>
        </router-link>
        <a class="tabbar-right" style="background-color:#F7BA2A" @click="showPanel('cart')">
            <span>加入购物车</span>
        </a>
        <a class="tabbar-right" style="background-color:#20A0FF" @click="showPanel('order')">
            <span>立即下单</span>
        </a>
    </div>
    <!--服务说明弹窗-->
      <div class="service-info">
        <popup v-model="isServiceShow" position="bottom" height="60%" style="background-color:white">
          <div style="text-align:center;font-size:20px;margin-top:15px"><span>服务说明</span></div>
        <group>
          <cell  title="正品保证" inline-desc="正品保证，杜绝假货"></cell>
          <cell  title="售后无忧" inline-desc="专业的售后服务，让你买的放心"></cell>
        </group>
        <div style="padding:4%;position:fixed;bottom:10px;width:92%">
          <x-button @click.native="isServiceShow = false"  type="primary"> 确定 </x-button>
        </div>
      </popup>
      </div>
      <!--规格选择弹窗-->
      <div class="select-spec">
         <popup v-model="panelShow" position="bottom" height="70%" style="background-color:white">
          <div class="item-info" style="margin-top:15px;margin-bottom:20px;">
            <div class="item-img">
              <img src="https://img01.yit.com/5/7/577335f00d263.jpg-124.124.80">
            </div>
            <div class="item-price">
              <p><span>￥</span><span>588</span></p>
              <p style="color:#99A9BF;text-decoration:line-through;font-size:14px;"><span>￥</span><span>6888</span></p>
            </div>
          </div>
        <group style="margin-bottom:60px;">
          <cell-box style="display:block;">
            <h4 style="margin-bottom:10px;font-size:18px;">选择颜色</h4>
            <div class="spec-radio">
              <Bradio v-for="color in colorList" :val="color.value" v-model="itemColor">{{color.label}}</Bradio>
            <!--<label v-for="color in colorList" :class="{'isActive':(itemColor === color.value)}">
              <input type="radio" style="display:none;" :value="color.value" v-model="itemColor">
              <span >{{color.label}}</span>
            </label>-->
          </div>
          </cell-box>
          <cell-box style="display:block;">
            <h4 style="margin-bottom:10px;font-size:18px;">选择类型</h4>
            <div class="spec-radio">
              <label v-model="itemStyle" v-for="sty in styleList">
              <input type="radio" style="display:none;" :value="sty.value">
              <span >{{sty.label}}</span>
            </label>
            </div>
          </cell-box>
          <cell  title="数量">
            <x-number :min="0" button-style="round"></x-number>
          </cell>
        </group>
        <div style="position:fixed;bottom:0;width:100%" v-show="isCartShow">
          <x-button @click.native="isSpecShow = false"  type="primary" style="background-color:#F7BA2A"> 加入购物车 </x-button>
        </div>
        <div style="position:fixed;bottom:0;width:100%" v-show="isOrderShow">
          <x-button @click.native="isSpecShow = false"  type="primary" style="background-color:#20A0FF"> 立即下单 </x-button>
        </div>
        <div style="position:fixed;bottom:0;width:100%" v-show="isSpecShow">
      <flexbox :gutter="0">
      <flexbox-item >
        <x-button @click.native="isSpecShow = false"   type="primary" style="background-color:#F7BA2A;"> 加入购物车 </x-button>
      </flexbox-item>
      <flexbox-item >
        <x-button @click.native="isSpecShow = false"   type="primary" style="background-color:#E5E9F2;color:#20A0FF;"> 立即下单 </x-button>
      </flexbox-item>
      </flexbox>   
        </div>
      </popup>
      </div>
</div>
</template>

<script>
import Bradio from 'components/bto-radio'
import { XButton, Swiper, SwiperItem, Group, Cell, CellBox, Popup, Flexbox, FlexboxItem, XNumber } from 'vux'
export default {
  components: {
    XButton, Swiper, SwiperItem, Group, Cell, CellBox, Popup, Flexbox, FlexboxItem, XNumber, Bradio
  },
  data () {
    return {
      results: [],
      value: 'test',
      swiperList: [
        {
          url: 'javascript:',
          img: 'http://iph.href.lu/300x300?text=%E5%95%86%E5%93%81%E5%8D%A0%E4%BD%8D%E5%9B%BE&bg=FF4949',
          title: '送你一朵fua'
        },
        {
          url: 'javascript:',
          img: 'http://iph.href.lu/300x300?text=%E5%95%86%E5%93%81%E5%8D%A0%E4%BD%8D%E5%9B%BE&bg=FF4949',
          title: '送你一辆车'
        },
        {
          url: 'javascript:',
          img: 'http://iph.href.lu/300x300?text=%E5%95%86%E5%93%81%E5%8D%A0%E4%BD%8D%E5%9B%BE&bg=FF4949',
          title: '送你一次旅行'
        }
      ],
      isServiceShow: false,
      isSpecShow: false,
      panelShow: false,
      isOrderShow: false,
      isCartShow: false,
      itemColor: '',
      itemStyle: '',
      colorList: [
        {
          label: '红色',
          value: 'red'
        },
        {
          label: '白色',
          value: 'white'
        },
        {
          label: '黑色',
          value: 'black'
        }
      ],
      styleList: [
        {
          label: '清爽型',
          value: 'qingshuang'
        },
        {
          label: '补水型',
          value: 'bushui'
        },
        {
          label: '美白型',
          value: 'meibai'
        }
      ]
    }
  },
  methods: {
    showPanel (type) {
      this.panelShow = true
      switch (type) {
        case 'spec':
          this.isSpecShow = true
          this.isOrderShow = false
          this.isCartShow = false
          break
        case 'order':
          this.isOrderShow = true
          this.isSpecShow = false
          this.isCartShow = false
          break
        case 'cart':
          this.isCartShow = true
          this.isOrderShow = false
          this.isSpecShow = false
          break
      }
    }
  },
  watch: {
    itemColor: function (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
.mall-tabbar{
  position:fixed;
  width:100%;
  height: 48px;
  line-height:inherit;
  bottom:0;
  text-align:center;
  background-color:#F7F7FA;
  z-index:100;
}
.view-body{
  overflow:scroll;
  margin-bottom:50px;
}
.tabbar-icon{
    margin:0 auto;
    width:27px;
    height:27px;
}
.tabbar-icon img{
    width: 100%;
    height: 100%;
}
.tabbar-left{
    display:block;
    float:left;
    width: 12%;
    font-size:0.6rem;
    padding-top:5px;
    line-height:18px;
}
.tabbar-right{
    display:block;
    float:left;
    line-height:48px;
    font-size:1rem;
    width: 32%;
    height:48px;
    color: #F9FAFC;
}
.name{
  font-size: 16px;
}
.second-title{
    margin-top: 4px;
    font-size: 13px;
    color: #7a7a7a;
}
.show-price{
  font-size:18px;
  margin-top:10px;
  color:#ad0e11;
}
.fr{
  float: right;
  color:#848484;
  font-size: 12px;
}
.tips{
  float:left;
  margin-right:10px;
}
.select-spec .weui-btn:after{
  border-radius:0px !important;
}
.select-spec button{
  border-radius:0px !important;
}
.item-info .item-img{
  width:85px;
  height:85px;
}
.item-img img{
  width:100%;
}
.item-info{
  margin-left:15px;
  display:flex;
}
.item-price{
  margin-left:10px;
  color:#ad0e11;
  font-size:18px;
}
.spec-radio{
  margin-top:30px;
  margin-bottom:10px;
}
.spec-radio label{
  border:1px solid #D3DCE6;
  padding:6px;
  border-radius:5px;
  margin-right:10px;
  display:inline-block;
}
input[type=radio]:checked:after {
  border:1px solid #D3DCE6;
  padding:6px;
  border-radius:5px;
  margin-right:10px;
  display:inline-block;
}
</style>
