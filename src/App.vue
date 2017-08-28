<template>
  <div id="app">
    <router-view></router-view>
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
  background-color: #EFF2F7;
  -webkit-overflow-scrolling:touch;
}
a,a:hover{ text-decoration:none; color:#333}
</style>
