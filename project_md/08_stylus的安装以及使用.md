# stylus的安装以及使用

* 安装

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

* 优点

  * stylus可以自动将px转成rem，这就节省自己算rem的时间

  - stylus可以像sass一样使用变量、计算模式

  - stylus可以像sass一样嵌套样式

* 使用

  * 引入stylus文件

    * 在css文件内引入styl文件要加@import

      ```js
      @import '~@/assets/variable.styl';
      ```

    * 在css文件中引入其他文件@代表其他文件夹，此时要加~@

  * 变量

    * 定义时加$

      ```js
      $bgColor = rgb(0,188,212)
      ```

    * 使用时加$

      ```js
      background-color: $bgColor;
      ```

  * 后代选择器
    * 代码嵌套书写，不加花括号{}