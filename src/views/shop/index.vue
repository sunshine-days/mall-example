<template>
<div>
  <div class="mall-search">
    <search
    @result-click="resultClick"
    @on-change="getResult"
    :results="results"
    v-model="value"
    @on-focus="onFocus"
    @on-cancel="onCancel"
    @on-submit="onSubmit"
    placeholder="搜索商品"
    ref="search"></search>
  </div>
  <div class="view-body">
    <div class="swiper">
      <swiper :list="swiperList" auto style="width:90%;margin:0 auto;" height="200px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <div class="item">
      <divider>热门商品</divider>
      <flexbox orient="vertical" style="margin-top:30px;">
        <flexbox-item v-for="item in itemList">

           <router-link :to="{path: '/shop/item/' + item.id}">
 <div style="width:90%;margin:0 auto;background-color:#fff;box-shadow:0 0 1px #000 inset;">   
            <div>
              <img :src="item.img" style="width:100%;height:200px;">
            </div>
            <div style="padding:0.5rem">
               <div><span class="item-title">这是一次简单的旅行</span></div>
            <div ><span class="item-price"><em style="font-style:normal">￥</em>455</span><span class="item-price-old">￥455</span></div>
            </div>
          </div>
          
           </router-link>
         
        </flexbox-item>
      </flexbox>

       <divider style="margin-top:30px">小壹推荐</divider>
      <flexbox orient="vertical" style="margin-top:30px;">
        <template v-for="item in itemList">
          <flexbox-item >
            <router-link :to="{path: '/shop/item/' + item.id}">
            <div style="width:90%;margin:0 auto;background-color:#fff">
            
            <div>
              <img :src="item.img" style="width:100%;height:200px;">
            </div>
           <div style="padding:0.5rem">
               <div><span class="item-title">这是一次简单的旅行</span></div>
            <div ><span class="item-price"><em style="font-style:normal">￥</em>455</span><span class="item-price-old">￥455</span></div>
            </div>
            </div>
            </router-link>
          
        </flexbox-item>
          </template>
      </flexbox>
    </div>
  </div>
    <tabbars activeTab="index"></tabbars>
</div>
</template>

<script>
import tabbars from 'components/tabbar'
import { Search, Swiper, SwiperItem, Flexbox, FlexboxItem, Divider } from 'vux'
export default {
  components: {
    Search, Swiper, SwiperItem, Flexbox, FlexboxItem, Divider, tabbars
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
          id: 1,
          img: 'https://static.vux.li/demo/3.jpg'
        },
        {
          id: 2,
          img: 'https://static.vux.li/demo/2.jpg'
        },
        {
          id: 3,
          img: 'https://static.vux.li/demo/1.jpg'
        },
        {
          id: 4,
          img: 'https://static.vux.li/demo/3.jpg'
        },
        {
          id: 5,
          img: 'https://static.vux.li/demo/2.jpg'
        }
      ]
    }
  },
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  }
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style scoped>
.mall-search{
  position:fixed;
  width:100%;
  top:0;
}
.view-body{
  width:100%;
  overflow: auto;
  position:fixed;
  top:50px;
  bottom:60px;
}
.item{
  margin-top:1.5rem;
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
