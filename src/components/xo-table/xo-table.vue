<template>
  <div class="xo-table">
    <div class="xo-table-header" v-if="showHeader">
      <table :class="{ 'border-top': border, 'border-left': border, 'border-right': border }">
        <colgroup>
          <col v-for="config in columns"
          :key="config.key"
          :width="config.width ? config.width : ''">
        </colgroup>
        <thead>
          <tr>
            <th v-for="config in columns" :key="config.key" :class="{'border-right': verticalLine}">
              <div class="cell" 
              :style="{'justify-content': config.align, 'color': config.color}">
              {{ config.label }}
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="xo-table-body" v-if="data.length > 0">
      <table :class="{ 'border-left': border, 'border-right': border }">
        <colgroup>
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
            :style="{ 'background-color': stripeColor && (index + 1)%2 === 0 ? stripeColor : '' }"
            @click="clickRow(index)">
              <td v-for="config in columns" :key="config.key" :class="{'border-right': verticalLine}">
                <div class="cell">
                  <span class="text-hidden" :title="item[config.key]">
                    {{ item[config.key] }}
                  </span>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="xo-table-tip" v-if="data.length === 0">
      <table>
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
  data() {
    return {
      highlightIndex: -1
    }
  },
  props: {
    columns: Array,
    data: Array,
    showHeader: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    verticalLine: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: true
    },
    stripeColor: {
      type: String,
      default: ''
    },
    highlightRow: {
      type: Boolean,
      default: true
    },
    selection: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickRow(index) {
      if(this.highlightRow) {
        this.highlightIndex = index
      }
    }
  }
}
</script>

<style lang="less" scoped>
.xo-table {
  display: flex;
  flex: 1;
  flex-direction: column;
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
  }
  .highlight {
    background-color: #5283f157 !important
  }
}
</style>
