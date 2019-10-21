import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex';
import components from './index';
// import './common/common.less';
// import './common/icon.less';
// import './common/transition.less';

Vue.use(components);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
