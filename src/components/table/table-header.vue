<template>
  <div
  class="table-header">
    <table
      :style="{
        marginLeft:`${endFixed ? leftWidth : 0}px`,
        width: `${width}px`
      }"
      ref="table"
    >
      <colgroup>
        <col width="40" v-if="expand">
        <col
          v-for="config in tableColumns"
          :key="config.key"
          :width="config.width ? config.width : ''"
        >
        <col width="10" v-if="showGutter">
      </colgroup>
      <thead>
        <tr>
          <th :class="{'border-right': verticalLine}" v-if="expand"></th>
          <th
          v-for="(config, i) in tableColumns"
          :key="config.key"
          :class="{
            'border-right': i === tableColumns.length - 1 ? '' : verticalLine,
            'hidden': isHidden(config.fixed) }">
            <div
              class="cell"
              :style="{
              'justify-content': config.align,
              'color': config.color
              }"
            >
            <span>{{ config.label }}</span>
            <span v-if="config.sort">
              <i class="icon-caret-top top"></i>
              <i class="icon-caret-bottom bottom"></i>
            </span>
            </div>
          </th>
          <th
            :rowspan="tableColumns.length"
            v-if="showGutter"
          />
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      leftWidth: 0,
      endFixedWidth: 0,
      startFixedwidth: 0,
      timeout: null,
    };
  },
  props: {
    border: {
      type: Boolean,
      default: true,
    },
    expand: {
      type: Boolean,
      default: false,
    },
    verticalLine: {
      type: Boolean,
      default: false,
    },
    showGutter: {
      type: Boolean,
      default: false,
    },
    endFixed: {
      type: Boolean,
      default: false,
    },
    startFixed: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    ...mapState('tableModuel', ['tableColumns']),
  },
  watch: {
    width() {
      this.$nextTick(() => {
        this.setFixedWidth();
      });
    },
  },
  methods: {
    ...mapMutations('tableModuel', ['chgEndFixedWidth', 'chgStartFixedWidth', 'chgEndLeftWidth']),
    isHidden(val) {
      if (this.endFixed) {
        return val !== 'end';
      } if (this.startFixed) {
        return val !== 'start';
      }
      return false;
    },
    getFixedCount(str) {
      const temp = this.tableColumns.filter((e) => e.fixed === str);
      return temp.length;
    },
    getFixedWidth(str) {
      let count = this.getFixedCount(str);
      const th = this.$refs.table.getElementsByTagName('th');
      const len = th.length;
      if (this.showGutter && str === 'end') count += 1;
      let width = 0;
      while (count > 0) {
        if (str === 'end') {
          width += th[len - count].clientWidth;
        }
        if (str === 'start') {
          width += th[count - 1].clientWidth;
        }
        count -= 1;
      }
      if (this.expand && str === 'start') width += th[0].clientWidth;
      return width;
    },
    setFixedWidth() {
      const width = this.$refs.table.clientWidth;
      if (this.endFixed) {
        this.endFixedWidth = this.getFixedWidth('end');
        this.chgEndFixedWidth(this.endFixedWidth);
        this.leftWidth = this.endFixedWidth - width;
        this.chgEndLeftWidth(this.leftWidth);
      }
      if (this.startFixed) {
        this.startFixedwidth = this.getFixedWidth('start');
        this.chgStartFixedWidth(this.startFixedwidth + 1);
      }
    },
  },
  mounted() {
    this.setFixedWidth();
  },
};
</script>
