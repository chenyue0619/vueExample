<!--
    template只能向外暴露一个标签:当超过一个标签的时候要另外加一个标签包裹起来
-->
<template>
    <div>
        <div>home</div>
        <!--
            跳转页面引入:router-link元素中的to属性
            /代表根路径
        -->
        <router-link to="/Hello world">Hello world</router-link>
    </div>   
</template>

<script>
export default{
  name: 'Home'
}
</script>

<style>
</style>
