<template>
  <div id="app">
    <div id="nav">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  components: {
    Home
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// div {
//   -moz-user-select:none;/*火狐*/
//   -webkit-user-select:none;/*webkit浏览器*/
//   -ms-user-select:none;/*IE10*/
//   -khtml-user-select:none;/*早期浏览器*/
//   user-select:none;
// }
</style>
