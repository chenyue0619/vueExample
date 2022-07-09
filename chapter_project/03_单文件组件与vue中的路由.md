## 单文件组件与vue中的路由(src -> router)

#### 1、单文件组件(app.vue)由三部分组成template/script/style

```
//单文件组件完整写法:Vue.component("",{template:""})

//vue组件的模板dom定义,
<template>
	<div id="app">
        <img src="./assets/logo.png">
        //<router-view/>显示的是当前路由地址所对应的内容
        <router-view/>
  	</div>
</template>

//vue组件的逻辑定义:{}
<script></script>

//组件的css样式定义
<style></style>
```



#### 2、路由

* 定义：路由就是根据网址的不同，返回不同的内容给用户

```
// export default new Router导出路由配置项
export default new Router({
  routes: [
    {
      // path: '/',表示根路径，components
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 当访问path后面的这个路径的时候显示此组件效果
      // 根据此路径找组件位置
      path: '/Home',
      // 路由的名字
      name: 'Home',
      // 组件的名字
      component: Home
    }
  ]
})
```



#### 3、一个简单的vue组件定义

```
//dom模板定义
<template>
    <div>home</div>
</template>

//组件的逻辑定义
<script>
export default{
	//组件的名字定义name:'Home',注意单引号
    name:'Home'
}
</script>

//组件的css样式定义
<style>
</style>
```

#### 4、一个简单的组件引入路由:index.js

```
import Vue from 'vue'
import Router from 'vue-router'
// @指的是当前目录src文件夹
import HelloWorld from '@/components/HelloWorld'


//引入Home路由:
//	@src文件夹下面的components文件夹下面的Home组件，可以省略Home.vue
//import Home(组件名字) from '@/components/Home/Home.vue'(组件地址)
import Home from '@/components/Home/Home.vue'

Vue.use(Router)

export default new Router({
  // 当访问根目录的时候，引入一个组件HelloWorld
  routes: [
    // 当访问根路径的时候，展示组件HelloWorld
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
    //当访问/Home目录时，显示的是Home组件
      path: '/Home',
      // 路由的名字Home
      name: 'Home',
      //  vue组件的名字Home
      component: Home
    }
  ]
})
```

