import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/Pages/Home/Home'
// import List from '@/Pages/List/List'

Vue.use(Router)

// 定义一个路由对象，保存每一个路由的信息（路由的名字name，组件的名字component）
// Router对象里面的name属性是Router的名字
export default new Router({
  routes: [
    {
      // 根路径http://localhost:8081/#/
      path: '/',
      name: 'Home',
      component: Home
    }
    // 这里不同对象之间加逗号切要换行，不可以写在上一个屁股后面，会报错
    // {
    //   // /List路径：http://localhost:8081/#/List
    //   // 当我们访问路径/List的时候会显示下面页面中的信息
    //   path: '/List',
    //   name: 'List',
    //   component: List
    // }
  ]
})
