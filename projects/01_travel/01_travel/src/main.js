// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 导入App这个文件
// 全写import App from './App.vue'
// 会匹配名字为App，不一定是vue文件，也可能是json/js/css文件
import App from './App'
import router from './router'

// 文件初始化

// 1、引入样式初始化css文件
import './assets/styles/reset.css'
// 2、引入边框初始化css文件
import './assets/styles/border.css'
// 3、移动端点击300ms延迟的问题
// install手动安装

// 引入iconfont.css
import './assets/styles/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // ES6缩写语法：App完全写法App：App
  components: { App },
  template: '<App/>'
})
