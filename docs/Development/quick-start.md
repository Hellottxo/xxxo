# 快速上手

在main.js中引入

```JavaScript
import Vue from 'vue'
import XOUI from 'xo-ui'
import 'xo-ui/dist/xo-ui.css'
import App from './App.vue'

Vue.use(XOUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```