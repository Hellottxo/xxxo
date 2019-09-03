export default {
  namespaced: true,
  state: {
    highlightRow: '',
  },
  mutations: {
    chgHighlightRow(state, value) {
      state.highlightRow = value;
    },
  },
};
