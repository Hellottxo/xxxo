export default {
  namespaced: true,
  state: {
    lastColumnsWidth: '',
  },
  mutations: {
    chglastColumnsWidth(state, value) {
      state.lastColumnsWidth = value;
    },
  },
};
