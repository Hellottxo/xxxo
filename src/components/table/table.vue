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
    height: `${widthGutter ? height - 10 : height}px`,
    width: `${endFixedWidth - 10}px`,
    right: this.showGutter ? `10px` : 0
    }"
    :class="{end: widthGutter}"
    @mousewheel="fixedMousewheel"
    class="xo-table-endFixed xo-table-fixed"
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
    height: `${widthGutter ? height - 10 : height}px`,
    width: `${startFixedWidth}px`,
    }"
    @mousewheel="fixedMousewheel"
    class="xo-table-fixed"
    :class="{start: widthGutter}"
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
import { mapState, mapMutations } from 'vuex';
import tableHeader from './table-header';
import tableBody from './table-body';
import { debounce } from '@/untils/debounce-throttle.js';

export default {
  name: 'xo-table',
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
      widthGutter: false,
      scrollTopWidth: 0,
      canScrollHeight: 0,
      lastColumnsWidth: 0,
      endFixed: false,
      startFixed: false,
      tableWidth: '',
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
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
  },
  computed: {
    ...mapState('tableModuel', ['endFixedWidth', 'startFixedWidth']),
  },
  methods: {
    ...mapMutations('tableModuel', ['chgTableColumns']),
    rowClick(row, column) {
      this.$emit('row-click', row, column);
    },
    tableScroll(e) {
      this.scrollWidth = -e.target.scrollLeft;
      this.scrollTopWidth = -e.target.scrollTop;
    },
    fixedMousewheel(e) {
      if (this.canScrollHeight > 0) {
        this.$refs.displayTableBody.scrollTop += e.deltaY;
      }
    },
    getTableColumns() {
      const temp = [];
      const startTemp = [];
      const endTemp = [];
      this.columns.forEach((e) => {
        if (e.fixed === 'start') {
          startTemp.push(e);
        } else if (e.fixed === 'end') {
          endTemp.push(e);
        } else {
          temp.push(e);
        }
        this.endFixed = endTemp.length > 0;
        this.startFixed = startTemp.length > 0;
        this.chgTableColumns(startTemp.concat(temp).concat(endTemp));
      });
    },
    isShowGutter() {
      const displayHeight = this.$refs.displayTableBody.clientHeight;
      const scrollHeight = this.$refs.scrollTableBody.$el.clientHeight;
      const displayWidth = this.$refs.displayTableBody.clientWidth;
      const scrollWidth = this.$refs.scrollTableBody.$refs.table.clientWidth;
      this.canScrollHeight = scrollHeight - displayHeight;
      this.showGutter = displayHeight < scrollHeight;
      this.widthGutter = displayWidth < scrollWidth;
    },
    setTableWidth: debounce(function() {
      this.tableWidth = `${this.$refs.xoTable.clientWidth}`;
      this.isShowGutter();
    }, 500)
  },
  created() {
    this.getTableColumns();
  },
  mounted() {
    this.setTableWidth();
    window.onresize = this.setTableWidth;
    ;
  },
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
  .xo-table-fixed {
    position: absolute;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .end {
    box-shadow: -2px 0 6px -2px rgba(0,0,0,.2);
  }
  .start {
    box-shadow: 2px 0 6px -2px rgba(0,0,0,.2);
  }
  .xo-table-fixed_body {
    overflow: hidden;
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
    height: 30px;
    box-sizing: border-box;
    span {
      padding-right: 5px;
    }
    i {
      position: absolute;
      top: 11px;
      right: 10px;
    }
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
