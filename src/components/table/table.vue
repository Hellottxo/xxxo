<template>
  <div class="xo-table"
  :style="{
  height: `${height}px`,
  width: `${width}px`}">
    <div
    class="xo-table-header"
    v-if="showHeader">
      <table-header
        :border="border"
        :expand="expand"
        :columns="columns"
        :verticalLine="verticalLine"
        :style="{marginLeft: `${scrollWidth}px`}"
        :showGutter="showGutter"
      ></table-header>
    </div>
    <div
    class="xo-table-body"
    @scroll="tableScroll"
    ref="displayTableBody">
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
        ref="scrollTableBody"
      >
        <template v-slot="scope" v-if="$scopedSlots.default">
          <slot :data="scope.data"></slot>
        </template>
        <template v-slot:append="scope">
          <slot name="append" :data="scope.data"></slot>
        </template>
      </table-body>
    </div>
    <div
    :style="{
    height: `${height - 10}px`,
    width: `${width}px`,
    }"
    class="xo-table-endFixed"
    v-if="this.rightFlag > -1">
      <div
      class="xo-table-header"
      v-if="showHeader">
        <table-header
          :border="border"
          :expand="expand"
          :columns="columns"
          :verticalLine="verticalLine"
          :showGutter="showGutter"
          :rightFlag="rightFlag"
          :leftFlag="leftFlag"
          :width="width"
        ></table-header>
      </div>
      <div
      class="xo-table-body">
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
          :rightFlag="rightFlag"
          :leftFlag="leftFlag"
          :width="width"
          :height="height"
        >
          <template v-slot="scope" v-if="$scopedSlots.default">
            <slot :data="scope.data"></slot>
          </template>
          <template v-slot:append="scope">
            <slot name="append" :data="scope.data"></slot>
          </template>
        </table-body>
      </div>
    </div>
    <div class="xo-table-tip" v-if="data.length === 0">
      <table :class="{
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
import tableHeader from "./table-header";
import tableBody from "./table-body";

export default {
  name: "xoTable",
  components: {
    tableHeader,
    tableBody,
  },
  data() {
    return {
      highlightIndex: -1,
      hasChildOpen: [],
      hasRowExpand: [],
      hasSelect: [],
      scrollWidth: 0,
      showGutter: false,
      rightFlag: -1,
      leftFlag: -1,
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
      default: "",
    },
    highlightRow: {
      type: Boolean,
      default: false,
    },
    expand: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    }
  },
  methods: {
    rowClick(row, column) {
      this.$emit("row-click", row, column);
    },
    tableScroll(e) {
      this.scrollWidth = -e.target.scrollLeft;
    }
  },
  mounted() {
    const displayHeight = this.$refs.displayTableBody.clientHeight;
    const scrollHeight = this.$refs.scrollTableBody.$el.clientHeight;
    if(displayHeight < scrollHeight) {
      this.showGutter = true;
    }else {
      this.showGutter = false;
    }
    this.rightFlag = this.columns.findIndex(e => e.fixed === "right");
    this.leftFlag = this.columns.findIndex(e => e.fixed === "left");
  }
};
</script>

<style lang="less">
.xo-table {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  .xo-table-header {
    overflow: hidden;
  }
  .xo-table-body {
    overflow: auto;
    flex: 1;
  }
  .xo-table-endFixed {
    position: absolute;
    right: 0;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .xo-table-body::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
  }
  .xo-table-body::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    background: #e8eaec;
  }
  .xo-table-body::-webkit-scrollbar-track {/*滚动条里面轨道*/
    border-radius: 10px;
    background: #fff;
  }
  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    user-select: none;
    font-size: 12px;
    color: #515a6e;
  }
  tr {
    background: #fff;
  }
  tr:hover {
    background: #fafbfc;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
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
    background-color: #ebf7ff !important;
  }
}
</style>
