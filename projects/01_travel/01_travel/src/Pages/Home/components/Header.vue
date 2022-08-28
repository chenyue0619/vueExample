<template>
    <div class="header">
        <div class="return">
            <span class="iconfont left_arrow">&#xe660;</span>
        </div>
        <div class="search">
            <span class="iconfont search_icon">&#xe651;</span>
            输入城市/景点/主题</div>
        <div class="direction">
            地址
            <span class="iconfont durection_icon">&#xe600;</span>
        </div>
    </div>
</template>

<script>
// 导出这个组件，组建的名称为name的属性值，组件的名称不是该文件的名称，也可以同名，不过要区分开两者不要搞混
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/variable.styl';
/*
1、scoped是为了保证本文件中的style设置只对本文件有用，不会波及到其他文件里面的同名选择器
2、1rem === html font-size(50px)
*/
.header
    display:flex;
    height: .86rem;
    background-color: $bgColor;
    color:#fff;
    font-size:.1rem;
    line-height: .86rem;
    .return
        width: .64rem;
        text-align: center;
        .left_arrow
            font-size: .50rem;
    .search
        margin-top: 0.13rem;
        padding-left: 0.20rem;
        flex: 1;/*父级display:flex;子级flex:1自动撑开开宽度*/
        height: .60rem;
        border-radius:0.14rem;
        background-color: #fff;
        color: #ccc;
        line-height: .60rem;
    .direction
        width: 1rem;
        text-align:center;
        .durection_icon
            font-size:.20rem;
</style>
