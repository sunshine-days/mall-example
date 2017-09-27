<template>
  <div id="app">
   <transition>
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  width:100%;
  height:100%;
  background-color: #EFF2F7;
  -webkit-overflow-scrolling:touch;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
a,a:hover{ text-decoration:none; color:#333}
</style>
