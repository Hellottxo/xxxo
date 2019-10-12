import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex';
import clickOutside from './directive/clickoutside/index';
import lazyload from './directive/lazylod/index';
import components from './components/index';
import './common/icon.less';
import './common/transition.less';

Vue.use(components);
Vue.use(clickOutside);
Vue.use(lazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
