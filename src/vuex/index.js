import Vue from 'vue';
import Vuex from 'vuex';
import tableModuel from './table/index';
import treeModuel from './tree/index';
import menuModuel from './menu/index';

Vue.config.devtools = true;
Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    tableModuel,
    treeModuel,
    menuModuel,
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
});
