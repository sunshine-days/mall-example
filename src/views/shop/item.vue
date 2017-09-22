<template>
<div style="overflow:scroll">
    <div class="content">
      <div class="swiper">
        <swiper :list="swiperList" auto  height="300px" dots-class="custom-bottom" dots-position="center"></swiper>
      </div>
      <div class="info">
        <group>
          <div style="margin:15px;">
            <p class="name">双层茶杯+茶味月饼</p>
            <p class="second-title">作为中秋节礼物很有心意</p>
            <p class="show-price"><span class="price"><span style="font-size:15px;color:#ad0e11">￥</span>4299</span><span class="fr">免运费</span></p>
          </div>
        </group>
        <group>
          <cell title="cell" value="hello" is-link></cell>
          <cell title="cell" value="hello" is-link></cell>
    </group>
      </div>
      <div class="detail"></div>
    </div>
    <div class="mall-tabbar">
        <a class="tabbar-left">
            <div class="tabbar-icon">
                <img src="../../assets/customerservice.png">
            </div> 
            <span>客服</span>
        </a>
        <a class="tabbar-left">
            <div class="tabbar-icon">
                <img src="../../assets/home.png">
            </div> 
            <span>首页</span>
        </a>
        <a class="tabbar-left">
            <div class="tabbar-icon">
                <img src="../../assets/cart.png">
            </div> 
            <span>购物车</span>
        </a>
        <a class="tabbar-right" style="background-color:#F7BA2A">
            <span>加入购物车</span>
        </a>
        <a class="tabbar-right" style="background-color:#20A0FF">
            <span>立即下单</span>
        </a>
    </div>
</div>
</template>

<script>
// import tabbars from '@/components/tabbar'
import { XButton, Swiper, SwiperItem, Group, Cell, CellBox } from 'vux'
export default {
  components: {
    XButton, Swiper, SwiperItem, Group, Cell, CellBox
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
    font-size:1.2rem;
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
</style>
