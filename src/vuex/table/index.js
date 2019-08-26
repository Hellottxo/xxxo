export default {
  namespaced: true,
  state: {
    tableColumns: [],
    endFixedWidth: '',
    startFixedWidth: '',
    clickRow: -1,
    hasChildOpen: [],
    hasRowExpand: [],
    endLeftWidth: 0,
    hoverIndex: -1,
  },
  mutations: {
    chgTableColumns(state, value) {
      state.tableColumns = value;
    },
    chgEndFixedWidth(state, value) {
      state.endFixedWidth = value;
    },
    chgStartFixedWidth(state, value) {
      state.startFixedWidth = value;
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
    chgEndLeftWidth(state, value) {
      state.endLeftWidth = value;
    },
    chgHoverIndex(state, value) {
      state.hoverIndex = value;
    },
  },
};
