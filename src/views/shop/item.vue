<template>
<div>
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
        <a class="tabbar-right" style="background-color:#475669">
            <span>加入购物车</span>
        </a>
        <a class="tabbar-right" style="background-color:#FF4949">
            <span>立即下单</span>
        </a>
    </div>
</div>
</template>

<script>
// import tabbars from '@/components/tabbar'
import { XButton } from 'vux'
export default {
  components: {
    XButton
  },
  data () {
    return {
      results: [],
      value: 'test',
      swiperList: [
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
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

<style>
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
</style>
