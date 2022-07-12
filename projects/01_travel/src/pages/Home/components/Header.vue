<template>
  <div class="header">
    <div class="header-left">nihaoa</div>
    <div class="header-input">wohenhao</div>
    <div class="header-right">dajiadouhenhao</div>
  </div>
</template>
<script>
// export default单页面组件定义
export default {
  name: 'HomeHeader'
}
</script>
<!--
  lang="stylus"表示利用stylus来写样式
  scoped属性保证当前样式只对当前组件元素有效
  移动端的布局一般采用rem:1rem = html font-size = 50px
-->
<style lang="stylus" scoped>
  .header 
    height: .86rem
    .header-left
      width: .64rem
      float: left
    .header-right:
      width: 1.24rem
      float: right
</style>