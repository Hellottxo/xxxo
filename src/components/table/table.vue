<template>
  <div
  ref="xoTable"
  class="xo-table"
  :style="{
    height: `${height}px`,
    width: `${width}px`,
    minWidth: `${endFixedWidth + startFixedWidth}px`,
  }"
  :class="{
    'border-top': border,
    'border-left': border,
    'border-right': border,
    'border-bottom': border,
  }">
    <div
    class="xo-table-header"
    v-if="showHeader">
      <table-header
        :border="border"
        :expand="expand"
        :verticalLine="verticalLine"
        :style="{marginLeft: `${scrollWidth}px`}"
        :showGutter="showGutter"
        ref="tableHeader"
      ></table-header>
    </div>
    <div
    class="xo-table-body"
    @scroll="tableScroll"
    ref="displayTableBody"
    >
      <table-body
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
      width: `${endFixedWidth}px`,
      right: this.showGutter ? `10px` : 0
      }"
      @mousewheel="fixedMousewheel"
      class="xo-table-endFixed"
      v-if="this.endFixed">
      <div
      class="xo-table-fixed_header"
      v-if="showHeader">
        <table-header
          :border="border"
          :expand="expand"
          :verticalLine="verticalLine"
          :showGutter="showGutter"
          :endFixed="endFixed"
          :width="tableWidth"
        ></table-header>
      </div>
      <div
      class="xo-table-fixed_body">
        <table-body
          :childcolumns="childcolumns"
          :data="data"
          :border="border"
          :verticalLine="verticalLine"
          :stripe="stripe"
          :stripeColor="stripeColor"
          :highlightRow="highlightRow"
          :expand="expand"
          @row-click="rowClick"
          :endFixed="endFixed"
          :width="tableWidth"
          :height="height"
          :scrollTopWidth="scrollTopWidth"
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
    <div
      :style="{
      height: `${height - 10}px`,
      width: `${startFixedWidth}px`,
      }"
      @mousewheel="fixedMousewheel"
      class="xo-table-startFixed"
      v-if="this.startFixed">
      <div
      class="xo-table-fixed_header"
      v-if="showHeader">
        <table-header
          :border="border"
          :expand="expand"
          :verticalLine="verticalLine"
          :showGutter="showGutter"
          :startFixed="startFixed"
          :width="tableWidth"
        ></table-header>
      </div>
      <div class="xo-table-fixed_body">
        <table-body
          :childcolumns="childcolumns"
          :data="data"
          :border="border"
          :verticalLine="verticalLine"
          :stripe="stripe"
          :stripeColor="stripeColor"
          :highlightRow="highlightRow"
          :expand="expand"
          @row-click="rowClick"
          :startFixed="startFixed"
          :height="height"
          :width="tableWidth"
          :scrollTopWidth="scrollTopWidth"
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
import { mapState, mapMutations } from 'vuex';
import { debounceThrottle } from '../../mixins/debounce-throttle.js';

export default {
  name: "xoTable",
  mixins: [debounceThrottle],
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
      scrollTopWidth: 0,
      canScrollHeight: 0,
      lastColumnsWidth: 0,
      endFixed: false,
      startFixed: false,
      tableWidth: ""
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
  computed: {
    ...mapState('tableModuel', ['endFixedWidth', 'startFixedWidth'])
  },
  methods: {
    ...mapMutations('tableModuel', ['chgTableColumns']),
    rowClick(row, column) {
      this.$emit("row-click", row, column);
    },
    tableScroll(e) {
      this.scrollWidth = -e.target.scrollLeft;
      this.scrollTopWidth = -e.target.scrollTop;
    },
    fixedMousewheel(e) {
      if(this.canScrollHeight > 0) {
        this.$refs.displayTableBody.scrollTop += e.deltaY
      }
    },
    getTableColumns() {
      let temp = [],
      startTemp = [],
      endTemp = [];
      this.columns.forEach(e => {
        if(e.fixed === 'start') {
          startTemp.push(e);
        }else if(e.fixed === 'end') {
          endTemp.push(e);
        }else {
          temp.push(e);
        }
        this.endFixed = endTemp.length > 0 ? true : false;
        this.startFixed = startTemp.length > 0 ? true : false;
        this.chgTableColumns(startTemp.concat(temp).concat(endTemp));
      })
    },
    isShowGutter() {
      const displayHeight = this.$refs.displayTableBody.clientHeight;
      const scrollHeight = this.$refs.scrollTableBody.$el.clientHeight;
      this.canScrollHeight = scrollHeight - displayHeight;
      if(displayHeight < scrollHeight) {
        this.showGutter = true;
      }else {
        this.showGutter = false;
      }
    },
    setTableWidth() {
      this.tableWidth = `${this.$refs.xoTable.clientWidth}`;
    }
  },
  created() {
    this.getTableColumns();
  },
  mounted() {
    this.isShowGutter();
    this.setTableWidth()
    const that = this;
    window.onresize = function() {
      that.debounce(that.setTableWidth, 500, that.timeout)
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
  .xo-table-header {
    overflow: hidden;
  }
  .xo-table-body {
    overflow: auto;
    flex: 1;
  }
  .xo-table-endFixed {
    position: absolute;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .xo-table-fixed_body {
    overflow: hidden;
  }
  .xo-table-startFixed {
    position: absolute;
    left: 0;
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
  .hover {
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
.border-right {
  border-right: 1px solid #e8eaec;
}
.border-left {
  border-left: 1px solid #e8eaec;
}
.border-top {
  border-top: 1px solid #e8eaec;
}
.border-bottom {
  border-bottom: 1px solid #e8eaec;
}
</style>
