<template>
  <div class="hello">
    <h1>Hello world!</h1>
  </div>
</template>

<script>
// export default单页面组件定义
export default {
  name: 'World',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
