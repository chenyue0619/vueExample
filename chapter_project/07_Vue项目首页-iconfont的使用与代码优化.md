#### iconfont的使用与代码优化

##### 1、下载文件

```
//将文件引入到项目assets文件夹
src -> assets -> styles -> iconfonts(新建文件夹)
iconfont.css -> styles
字体文件 -> iconfonts

//修改文件路径
iconfont.css -> @font-face -> url

//删除图标style设置
```

##### 2、将文件引入项目main.js(入口文件)

```
import './assets/styles/iconfont.css'
```

##### 3、在子组件中使用iconfont

```
<div class="header-left">
//每一个图标的类名可以从iconfont.css文件中知晓
//在标签元素文本位置写入相应标签对应的代码(在iconfont官网可以看到)
	<span class="iconfont">&#xe8b5;</span>
</div>
```



#### 4、代码优化

* ##### 将多次使用的style(颜色)存放在全局(varibles)文件里面

  ```
  //新建全局文件varibles.styl
  assets -> styles -> varibles.styl
  //书写形式
  $bgColor = #00bcd4
  
  //引入到组件style元素中
  //style中引入文件用@import
  //第一种写法
  @import '../../../assets/styles/varibles.styl'
  //第二种写法:@代表根文件夹，即src文件，但是在style元素中引入外部css文件要加~
  @import '~@/assets/styles/varibles.styl'
  
  //使用的时候
  background:$bgColor
  ```

* ##### 将一大串的相同文件路径简化用别名来代替

  ```
  //文件设置位置(注意文件层级)
  build文件夹 -> webpack.base.conf.js文件 -> resolve对象 -> alias(别名)对象
  
  //设置代码
  'styles': resolve('src/assets/styles'),
  
  //重启项目，不然会报错
  ```

  