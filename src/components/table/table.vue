<template>
  <div class="xo-table">
    <div class="xo-table-header" v-if="showHeader">
      <table :class="{
        'border-top': border,
        'border-left': border,
        'border-right': border
      }">
        <colgroup>
          <col width="40" v-if="expand">
          <col v-for="config in columns"
          :key="config.key"
          :width="config.width ? config.width : ''">
        </colgroup>
        <thead>
          <tr>
            <th
            :class="{'border-right': verticalLine}"
            v-if="expand">
            
            </th>
            <th v-for="config in columns"
            :key="config.key"
            :class="{'border-right': verticalLine}">
              <div class="cell"
              :style="{
              'justify-content': config.align,
              'color': config.color
              }">
              {{ config.label }}
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="xo-table-body" v-if="data.length > 0">
      <table :class="{
        'border-left': border,
        'border-right': border }">
        <colgroup>
          <col width="40" v-if="expand">
          <col v-for="config in columns"
          :key="config.key"
          :width="config.width ? config.width : ''">
        </colgroup>
        <tbody>
          <template v-for="(item, index) in data">
            <tr :key="index"
            :class="{
              'stripe': stripe && (index + 1)%2 === 0,
              'highlight': index === highlightIndex
            }"
            :style="{ 'background-color': stripeColor && (index + 1)%2 === 0 ? stripeColor : '' }">
              <td
              :class="{ 'border-right': verticalLine }"
              @click="showExpand(index)"
              v-if="expand">
                <div class="cell">
                  <i class="icon-triangle"
                  style="top: 3px; right:10px"
                  :class="{'open': hasRowExpand.indexOf(index) > -1}"
                  v-if="item.rowExpand"></i>
                </div>
              </td>
              <td v-for="(config, i) in columns"
              :key="config.key"
              :class="{ 'border-right': verticalLine }"
              @click="clickRow(index, config.$index)">
                <div class="cell">
                  <span :title="item[config.key]">
                    {{ item[config.key] }}
                  </span>
                  <i class="icon-triangle"
                  v-if="item.children && (item.arrowPosition ? item.arrowPosition === config.key : i === 0)"
                  :class="{'open': hasChildOpen.indexOf(index) > -1}"></i>
                </div>
              </td>
            </tr>
            <template v-if="item.children && hasChildOpen.indexOf(index) > -1">
              <tr 
              v-for="child in item.children"
              :key="child.$index"
              class="child-tr">
                <td v-if="expand"
                :class="{ 'border-right': verticalLine }"></td>
                <td v-for="config in (childcolumns ? childcolumns : columns)"
                :key="config.key"
                :class="{ 'border-right': verticalLine }">
                  <div class="cell">
                    <span :title="child[config.key]">
                      {{ child[config.key] }}
                    </span>
                  </div>
                </td>
              </tr>
            </template>
            <tr class="slot" :key="item.$index"
            v-if="hasRowExpand.indexOf(index) > -1 && item.rowExpand">
              <td :colspan="columns.length+1">
                <slot name="append" :data="item"></slot>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
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
export default {
  name: 'xoTable',
  data() {
    return {
      highlightIndex: -1,
      hasChildOpen: [],
      hasRowExpand: [],
      hasSelect: [],
      isAllChecked: false
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
    clickRow(row, column) {
      if (this.highlightRow) {
        this.highlightIndex = row;
      }
      this.$emit('row-click', row, column);
      if(this.data[row].children) {
        const flag = this.hasChildOpen.indexOf(row);
        if(flag > -1) {
          this.hasChildOpen.splice(flag, 1);
        }else {
          this.hasChildOpen.push(row);
        }
      }
    },
    showExpand(index) {
      const flag = this.hasRowExpand.indexOf(index);
      if(flag > -1) {
        this.hasRowExpand.splice(flag, 1);
      }else {
        this.hasRowExpand.push(index);
      }
    }
  },
};
</script>

<style lang="less" scoped>
.xo-table {
  display: flex;
  flex: 1;
  flex-direction: column;
  .xo-table-header {
    overflow: auto;
  }
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
