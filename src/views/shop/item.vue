<template>
<div>
 
    <div class="mall-tabbar">
        <ul>
            <li class="tabbar-list list-common">
                <div class="list-icon">
                    <img class="list-icon-img" src="../../assets/home.png"/>
                </div>
                <p class="list-label">
                    <span>首页</span>
                </p>
            </li>
            <li class="tabbar-list list-common">
                <div class="list-icon">
                    <img class="list-icon-img" src="../../assets/home.png"/>
                </div>
                <p class="list-label">
                    <span>首页</span>
                </p>
            </li>
            <li class="tabbar-list list-common">
                <div class="list-icon">
                    <img class="list-icon-img" src="../../assets/home.png"/>
                </div>
                <p class="list-label">
                    <span>首页</span>
                </p>
            </li>
            <li class="tabbar-list list-cart">

                <x-button type="warn" mini>购物车</x-button>
            </li>
            <li class="tabbar-list list-order">
                <x-button type="warn" mini>立即下单</x-button>
            </li>
        </ul>
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
  bottom:0;
  border-top:1px solid #C0BFC4;
  background-color:#F7F7FA;
}
.tabbar-list{
    list-style:none;
    float:left;
    display:block;
    text-align:center;
    line-height:1;
}
.list-common{
    width:15%;
    padding:5px 0;
}
.list-cart{
    width:25%;
    height:100%;
    background-color:green;
}
.list-order{
    background-color:blue;
}
.list-icon{
    width:27px;
    height:27px;
    display:inline-block;
}
.list-icon-img{
    width:100%;
    height:100%;
}
.list-label{
    font-size:10px;
}
</style>
