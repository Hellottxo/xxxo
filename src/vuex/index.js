import Vue from 'vue';
import Vuex from 'vuex';
import tableModuel from './table/index';


Vue.config.devtools = true;

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    tableModuel,
  },
  state: {
  },
  getters: {

  },
  mutations: {
  },
});
