export default {
  namespaced: true,
  state: {
    tableColumns: [],
    rightFixedWidth: '',
    clickRow: -1,
    hasChildOpen: [],
    hasRowExpand: [],
  },
  mutations: {
    chgTableColumns(state, value) {
      state.tableColumns = value;
    },
    chgRightFixedWidth(state, value) {
      state.rightFixedWidth = value;
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
