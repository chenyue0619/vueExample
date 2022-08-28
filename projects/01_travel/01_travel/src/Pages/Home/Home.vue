<template>
    <div class="home">
      <home-header></home-header>
    </div>
</template>

<script>
// 导入HomeHeader组件,导入之后需要在本组件里面声明
import HomeHeader from './components/Header.vue'
// 这都是一个页面里面的一个小组件
//  Home是一个页面
//      Home页面下的一个Home组件
// ----

// 导出代码export代码块必须靠左放置
// 里面的属性名与属性值之间有一个空格
// 属性名与最左边两个空格

// 导出一个对象，放置组件的信息，比如组件名字name
export default {
  name: 'Home',
  // 子组件需要在局部声明ES6简写HomeHeader:HomeHeader
  // 第一个HomeHeader代表属性名，在本文件中使用的；第二个HomeHeader代表属性值，是引入进来的
  // 所以整个流程就是：1、先在子组件里面声明导出组件2、再将子组件导入到整体大组件里面，这里需要声明变量接收子组件3、再将整体大组件引入到路由里面4、路由只需要一次导入到入口文件就可以了
  components: {
    HomeHeader
  }
}
</script>

<style scoped>
/*
style代码块后面要加一个空格
1、1rem 等于根元素(html)设置的字体大小1rem === html font-size
*/

  .wrap{
    font-size:30px;
  }
</style>
