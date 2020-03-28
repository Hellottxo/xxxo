import Vue from 'vue';
import App from './App.vue';
import store from './vuex';
import components from './index';

Vue.use(components);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
