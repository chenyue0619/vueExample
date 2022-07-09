import Vue from 'vue'
import Router from 'vue-router'
// @指的是当前目录src文件夹
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home.vue'

Vue.use(Router)

export default new Router({
  // 当访问根目录的时候，引入一个组件HelloWorld
  routes: [
    // 当访问根路径/的时候，展示component组件HelloWorld
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      // 路由的名字Home
      name: 'Home',
      // vue组建的名字Home
      component: Home
    }
  ]
})
