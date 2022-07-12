<template>
  <div class="header">
    <div class="header-left">
    <!--
      iconfont图标:
        每一个图标的类名可以从iconfont.css文件中知晓
        在标签元素文本位置写入相应标签对应的代码(在iconfont官网可以看到)
    -->
    <!--
      span是行内元素，没有宽高属性
    -->
      <div class="iconfont back-icon">&#xe8b5;</div>
    </div>
    <div class="header-input">
      <span class ="iconfont">&#xe651;</span>
      输入城市/游玩景点/主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe600;</span>
    </div>
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
  stylus编写样式
    1、不加花括号
    2、不加冒号
    3、嵌套标签换行空格书写
-->
<!--
  flex弹性盒模型：
    父元素:display:flex
    子元素:flex:1
    两端元素宽度固定，中间盒子就会自动撑开
-->
<style lang="stylus" scoped>
// @import '../../../assets/styles/varibles.styl'
// @import '~@/assets/styles/varibles.styl'
.header
  display:flex
  height: .86rem
  // background:$bgColor
  background:#00bcd4
  color:#fff
  line-height:.86rem
  .header-left
    width: .64rem
    float: left
    .back-icon
      margin-left:.24rem
      text-align:center
      font-size:.6rem
  .header-input
    flex:1
    margin:.12rem .2rem
    padding-left:.2rem
    height:.62rem
    line-height:.62rem
    background:#fff
    border-radius:.1rem
    color:#ccc
  .header-right
    width: 1.24rem
    float: right
    .arrow-icon
      font-size:.24rem
</style>
