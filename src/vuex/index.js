import Vue from 'vue';
import Vuex from 'vuex';
import menuModuel from './menu/index';

Vue.config.devtools = true;
Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    menuModuel,
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
});
