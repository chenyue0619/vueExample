## header区域开发

#### 1、辅助工具stylus的安装(依赖)

* 优点：

  * stylus可以自动将px转成rem，这就节省自己算rem的时间

  * stylus可以像sass一样使用变量、计算模式

  * stylus可以像sass一样嵌套样式

```js
//打开终端，安装stylus:css开发辅助工具
npm install stylus --save                 

//安装stylus-loader，注意版本
npm install stylus-loader --save
npm install vue-style-loader

//若上述两个命令都不对
npm install stylus stylus-loader@3.0.1 --save-dev 

//重启项目
npm run start
```

#### 2、将小的子组件引入到大的组件里面

* 所以整个流程就是：

  * 1、先在子组件里面声明导出子组件

  * 2、再将子组件导入到整体大组件里面，这里需要定义局部组件声明变量接收子组件

    * 子组件需要在局部声明ES6简写HomeHeader:HomeHeader
    * 第一个HomeHeader代表属性名，在本文件中使用的；第二个HomeHeader代表属性值，是引入进来的

    ```js
    export default {
      name: 'Home',
      // 子组件需要在局部声明ES6简写HomeHeader:HomeHeader
      // 第一个HomeHeader代表属性名，在本文件中使用的；第二个HomeHeader代表属性值，是引入进来的
      // 所以整个流程就是：1、先在子组件里面声明导出组件2、再将子组件导入到整体大组件里面，这里需要声明变量接收子组件3、再将整体大组件引入到路由里面4、路由只需要一次导入到入口文件就可以了
      components: {
        HomeHeader
      }
    }
    ```

  * 3、再将整体大组件引入到路由里面

  * 4、路由只需要一次导入到入口文件就可以了

```js
<script>
//将小的子组件引入到大的子组件里面
	import (组件名) from '(组件地址)'
	import default{
	//注册子组件
        components:{
        	组件名
        }
	}
</script>
```

#### 3、对组件设置样式stylus

* **stylus书写规范**
  * 不加花括号
  * 不加冒号
  * 嵌套标签换行空格书写

```html
<!--
  lang="stylus"表示利用stylus来写样式
  scoped属性保证当前样式只对当前组件元素有效,保证样式是局部化的样式
  移动端的布局一般采用rem:1rem = html font-size = 50px
  stylus编写样式:
    1、不加花括号
    2、不加冒号
    3、嵌套标签换行空格书写
-->
<!--
	flex弹性盒模型：
        父元素:display:flex
        子元素:flex:1
        两端元素宽度固定，中间盒子就会自动撑开
        可以根据外边距计算盒子高度
-->
<style lang="stylus" scoped>
	.header
	  display:flex
      height: .86rem
      .header-left
        width: .64rem
        float: left
      .header-input
		flex:1
      .header-right
        width: 1.24rem
        float: right
</style>
```

