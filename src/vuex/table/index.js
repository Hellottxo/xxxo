export default {
  namespaced: true,
  state: {
    lastColumnsWidth: '',
    clickRow: -1,
    hasChildOpen: [],
    hasRowExpand: [],
  },
  mutations: {
    chglastColumnsWidth(state, value) {
      state.lastColumnsWidth = value;
    },
    chgClickRow(state, value) {
      state.clickRow = value;
    },
    chgChildOpen(state, value) {
      state.hasChildOpen = value;
    },
    chgRowExpand(state, value) {
      state.hasRowExpand = value;
    },
  },
};
