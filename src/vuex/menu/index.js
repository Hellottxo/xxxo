export default {
  namespaced: true,
  state: {
    selectIndex: '',
    mode: '',
  },
  mutations: {
    chgSelectIndex(state, value) {
      state.selectIndex = value;
    },
    chgMode(state, value) {
      state.mode = value;
    },
  },
};
