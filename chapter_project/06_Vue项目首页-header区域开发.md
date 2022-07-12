## header区域开发

#### 1、辅助工具stylus的安装(依赖)

```
//打开终端，安装stylus:css开发辅助工具
npm install stylus --save                 

//安装stylus-loader
npm install stylus-loader --save

//重启项目
npm run start
```

#### 2、将小的子组件引入到大的组件里面

```
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

```
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

