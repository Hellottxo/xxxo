<template>
  <div class="xo-table">
    <template v-if="showHeader">
      <table-header
      :border="border"
      :expand="expand"
      :columns="columns"
      :verticalLine="verticalLine"></table-header>
    </template>
    <template>
      <table-body
      :columns="columns"
      :childcolumns="childcolumns"
      :data="data"
      :border="border"
      :verticalLine="verticalLine"
      :stripe="stripe"
      :stripeColor="stripeColor"
      :highlightRow="highlightRow"
      :expand="expand"
      @row-click="rowClick"
      ></table-body>
    </template>
    <div class="xo-table-tip" v-if="data.length === 0">
      <table 
        :class="{
        'border-left': border,
        'border-right': border }">
        <tbody>
          <tr>
            <td>暂无筛选结果</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import tableHeader from './table-header';
import tableBody from './table-body';

export default {
  name: 'xoTable',
  components:{
    tableHeader,
    tableBody,
  },
  data() {
    return {
      highlightIndex: -1,
      hasChildOpen: [],
      hasRowExpand: [],
      hasSelect: [],
    };
  },
  props: {
    columns: Array,
    childcolumns: Array,
    data: Array,
    showHeader: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
    verticalLine: {
      type: Boolean,
      default: false,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    stripeColor: {
      type: String,
      default: '',
    },
    highlightRow: {
      type: Boolean,
      default: false,
    },
    expand: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    rowClick(row,column) {
      this.$emit('row-click', row, column)
    }
  }
};
</script>

<style lang="less">
.xo-table {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  .xo-table-body {
    overflow: auto;
  }
  table {
    width: 100%;
    table-layout: fixed;
    border-collapse:collapse;
    user-select: none;
    font-size: 12px;
    color: #515a6e;
  }
  tr{
    background: #fff;
  }
  tr:hover {
    background: #FAFBFC;
  }
  th {
    border-bottom: 1px solid #e8eaec;
    background-color: #f8f8f9;
  }
  td {
    padding: 3px;
    border-bottom: 1px solid #e8eaec;
  }
  .border-right {
    border-right: 1px solid #e8eaec;
  }
  .border-left {
    border-left: 1px solid #e8eaec;
  }
  .border-top {
    border-top: 1px solid #e8eaec;
  }
  .stripe {
    background-color: #f8f8f9;
  }
  .cell {
    padding: 7px;
    position: relative;
  }
  .icon-triangle {
    width: 0; 
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #515a6e;
    position: absolute;
    top: 12px;
    right: 10px;
    transition: all 0.3s;
  }
  .icon-triangle::after {
    content: "";
    border-width: 4px;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
    position: absolute;
    top: -4px;
    right: -2px;
    transition: all 0.3s;
  }
  .open {
    transform: rotate(90deg);
  }
  .child-tr {
    background-color: #f8f8f9;
  }
  .slot {
    border-right: 1px solid #e8eaec;
    border-bottom: 1px solid #e8eaec;
    width: 100vh;
  }
  .highlight {
    background-color: #ebf7ff !important
  }
}
</style>
