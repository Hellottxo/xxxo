<template>
  <div class="table-header">
    <table
      ref="table"
      :class="{
        'border-top': border,
        'border-left': border,
        'border-right': border,
      }"
      :style="{
      marginLeft: rightFlag > -1 || leftFlag > -1 ? `${leftWidth}px` : 0
      }"
    >
      <colgroup>
        <col width="40" v-if="expand">
        <col v-for="config in columns" :key="config.key" :width="config.width ? config.width : ''">
        <col width="10px" v-if="showGutter">
      </colgroup>
      <thead>
        <tr>
          <th :class="{'border-right': verticalLine}" v-if="expand"></th>
          <th
          v-for="config in columns"
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
export default {
  data() {
    return {
      leftWidth: 0
    }
  },
  props: {
    columns: Array,
    border: {
      type: Boolean,
      default: true
    },
    expand: {
      type: Boolean,
      default: false
    },
    columns: Array,
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
  methods: {
    isHidden(val) {
      if(this.rightFlag > -1 || this.leftFlag > -1) {
        return !val ? true : false;
      }else {
        return false;
      }
    }
  },
  mounted() {
    const tableWidth = this.$refs.table.offsetWidth;
    this.leftWidth = tableWidth - this.width
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
