<template>
  <div
  class="table-header">
    <table
      :style="{
      marginLeft: rightFlag > -1 || leftFlag > -1 ? `${leftWidth-1}px` : 0
      }"
      ref="table"
    >
      <colgroup>
        <col width="40" v-if="expand">
        <col v-for="config in tableColumns" :key="config.key" :width="config.width ? config.width : ''">
        <col width="10px" v-if="showGutter">
      </colgroup>
      <thead>
        <tr>
          <th :class="{'border-right': verticalLine}" v-if="expand"></th>
          <th
          v-for="config in tableColumns"
          :key="config.key"
          :class="{
            'border-right': verticalLine,
            'hidden': isHidden(config.fixed) }">
            <div
              class="cell"
              :style="{
              'justify-content': config.align,
              'color': config.color
              }"
            >{{ config.label }}</div>
          </th>
          <th
          v-if="showGutter"
          :class="{'border-right': verticalLine}"></th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex';

export default {
  data() {
    return {
      leftWidth: 0,
      rightFixedWidth: 0
    }
  },
  props: {
    border: {
      type: Boolean,
      default: true
    },
    expand: {
      type: Boolean,
      default: false
    },
    verticalLine: {
      type: Boolean,
      default: false
    },
    showGutter: {
      type: Boolean,
      default: false
    },
    rightFlag: {
      type: Number,
      default: -1
    },
    leftFlag: {
      type: Number,
      default: -1
    },
    width: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState('tableModuel', ['tableColumns'])
  },
  methods: {
    ...mapMutations('tableModuel', ['chgRightFixedWidth']),
    isHidden(val) {
      if(this.rightFlag > -1 || this.leftFlag > -1) {
        return !val ? true : false;
      }else {
        return false;
      }
    },
    getRightFixedWidth() {
      const th = this.$refs.table.getElementsByTagName('th');
      const len = th.length;
      this.rightFixedWidth = len > this.tableColumns.length ? 
       `${th[len - 1].clientWidth}` : `${th[len].clientWidth}`;
      this.chgRightFixedWidth(this.rightFixedWidth);
    }
  },
  mounted() {
    this.getRightFixedWidth();
    const tableWidth = this.$refs.table.clientWidth;
    this.leftWidth = this.rightFixedWidth - tableWidth;
  }
};
</script>

<style lang="less" scoped>
.table-header {
  .hidden {
    visibility: hidden;
  }
}
</style>
