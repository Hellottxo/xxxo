<template>
  <div class="xo-table-body" v-if="data.length > 0">
    <table :class="{
        'border-left': border,
        'border-right': border }">
      <colgroup>
        <col width="40" v-if="expand">
        <col v-for="config in columns" :key="config.key" :width="config.width ? config.width : ''">
      </colgroup>
      <tbody>
        <template v-for="(item, index) in data">
          <tr
            :key="index"
            :class="{
              'stripe': stripe && (index + 1)%2 === 0,
              'highlight': index === highlightIndex
            }"
            :style="{ 'background-color': stripeColor && (index + 1)%2 === 0 ? stripeColor : '' }"
          >
            <td :class="{ 'border-right': verticalLine }" @click="showExpand(index)" v-if="expand">
              <div class="cell">
                <i
                  class="icon-triangle"
                  style="top: 3px; right:10px"
                  :class="{'open': hasRowExpand.indexOf(index) > -1}"
                  v-if="item.rowExpand"
                ></i>
              </div>
            </td>
            <td
              v-for="(config, i) in columns"
              :key="config.key"
              :class="{ 'border-right': verticalLine }"
              @click="rowClick(index, config.$index)"
            >
              <div class="cell">
                <span :title="item[config.key]">{{ item[config.key] }}</span>
                <i
                  class="icon-triangle"
                  v-if="item.children && (item.arrowPosition ? item.arrowPosition === config.key : i === 0)"
                  :class="{'open': hasChildOpen.indexOf(index) > -1}"
                ></i>
              </div>
            </td>
          </tr>
          <template v-if="item.children && hasChildOpen.indexOf(index) > -1">
            <tr v-for="child in item.children" :key="child.$index" class="child-tr">
              <td v-if="expand" :class="{ 'border-right': verticalLine }"></td>
              <td
                v-for="config in (childcolumns ? childcolumns : columns)"
                :key="config.key"
                :class="{ 'border-right': verticalLine }"
              >
                <div class="cell">
                  <span :title="child[config.key]">{{ child[config.key] }}</span>
                </div>
              </td>
            </tr>
          </template>
          <tr
            class="slot"
            :key="item.$index"
            v-if="hasRowExpand.indexOf(index) > -1 && item.rowExpand"
          >
            <td :colspan="columns.length+1">
              <slot name="append" :data="item"></slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            highlightIndex: -1,
            hasChildOpen: [],
            hasRowExpand: [],
            hasSelect: [],
        }
    },
    props: {
        columns: Array,
        childcolumns: Array,
        data: Array,
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
        rowClick(row, column) {
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
    }
}
</script>
