<template>
<!--template标签里面只能嵌套一个标签-->
  <!--<h1>home</h1>-->
  <home-header></home-header>
</template>

<script>
import HomeHeader from './components/Header'
// export default单页面组件定义
export default {
  name: 'Home',
  components: {
    // 键与值相等的情况下，可以省略只写一个
    HomeHeader: HomeHeader
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
