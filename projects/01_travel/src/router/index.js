import Vue from 'vue'
import Router from 'vue-router'

// @表示src这个文件夹
import HelloWorld from '@/components/HelloWorld'
// 新建一个组件一定要引入路由
import Home from '@/components/Home/Home'

Vue.use(Router)

// export default new Router导出路由配置项
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 当访问path后面的这个路径的时候显示此组件效果
      path: '/Home',
      // 路由的名字
      name: 'Home',
      // 组件的名字
      component: Home
    }
  ]
})
