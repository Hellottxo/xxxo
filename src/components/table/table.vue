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
      />
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
    width: `${endFixedWidth}px`,
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
      v-if="this.startFixed"
    >
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
        />
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
import tableHeader from './table-header.vue';
import tableBody from './table-body.vue';
import { debounce } from '../../utils/debounce-throttle';

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
      type: [String, Number],
      default: '100%',
    },
    height: {
      type: [String, Number],
      default: '100%',
    },
  },
  computed: {
    ...mapState('tableModuel', ['endFixedWidth', 'startFixedWidth']),
  },
  methods: {
    ...mapMutations('tableModuel', ['chgTableColumns']),
    rowClick(row) {
      this.$emit('rowClick', row);
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
    }, 500),
  },
  created() {
    this.getTableColumns();
  },
  mounted() {
    this.setTableWidth();
    window.onresize = this.setTableWidth;
  },
};
</script>
