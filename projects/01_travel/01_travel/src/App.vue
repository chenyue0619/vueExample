<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// <router-view/>这个标签表示的是当前路由所对应的页面
// http://localhost:8081/#/这里显示的是哪个路由名字，页面内容<router-view/>就会展示对应路由里面的信息

// 导出App这个组件
export default {
  name: 'App'
}
</script>

<style>

</style>
