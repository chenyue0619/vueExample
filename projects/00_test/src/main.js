// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入当前文件夹下面的App文件,./App虽然没文件后缀名,但是会去自动寻找(vue/js/json)
import App from './App'
import router from './router'

// import fastClick from 'fastclick'
// import  fastClick  from  'fastclick'

// 在入口文件里面应用 reset.css
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
// fastClick自带的一个方法attach(),将fastClick应用在body上面
// FastClick.attach(document.body);

/* eslint-disable no-new */
// 根实例
new Vue({
  // vue实例，与index.js文件里面的app元素挂载在一起
  el: '#app',
  // 完整写法:router: router,在ES6中,键和值相等等情况下可以简写
  router,
  // components: { App },局部组件注册,
  //  完整写法:components: { App = App },在vue实例里面与局部组件定义都叫做vue
  //  在ES6里面，键和值一样的话，只写一个就行了
  components: { App },
  template: '<App/>'
})
