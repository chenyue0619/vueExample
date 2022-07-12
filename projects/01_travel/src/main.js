// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
import router from './router'

// 引入reset.css文件，样式初始化
import 'styles/reset.css'
// 引入border.css文件，边框1像素问题
import 'styles/border.css'
// 引入iconfont.css文件，图标
import 'styles/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
