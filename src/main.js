import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex';
import clickOutside from './lib/directive/index';
import components from './components/index';

Vue.use(clickOutside);
Vue.use(components);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
