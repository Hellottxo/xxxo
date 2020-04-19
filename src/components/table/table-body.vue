<template>
  <div class="table-body">
    <table
      ref="table"
      :style="{
      marginLeft: `${leftWidth}px`,
      marginTop: scrollTopWidth !== 0 ? `${scrollTopWidth}px` : 0,
      width: `${width}px`
      }">
      <colgroup>
        <col width="40" v-if="expand">
        <col v-for="config in tableColumns" :key="config.key" :width="config.width ? config.width : ''">
      </colgroup>
      <tbody>
        <template v-for="(item, index) in data">
          <tr
            :key="index"
            :class="{
              'stripe': stripe && (index + 1) % 2 === 0,
              'highlight': index === highlightIndex,
              'hover': index === hoverIndex
            }"
            :style="{ 'background-color':
            stripeColor && (index + 1) % 2 === 0 ? stripeColor : '' }"
            @mouseenter="hoverRow(index)"
            @mouseleave="hoverRow(-1)"
          >
            <td
            :class="{
              'border-right': verticalLine
            }"
            :style="{
              borderBottom: index === data.length - 1 ? 'none' : ''
            }"
            @click="showExpand(index)"
            v-if="expand">
              <div class="cell">
                <i
                  class="icon-triangle-right"
                  :class="{'open': hasRowExpand.includes(index)}"
                  v-if="item.rowExpand"
                ></i>
              </div>
            </td>
            <td
              v-for="(config, i) in tableColumns"
              :key="config.key"
              :class="{
              'border-right': i === tableColumns.length - 1 ? '' : verticalLine,
              'hidden': isHidden(config.fixed) }"
              @click="rowClick(index, config.$index)"
              :style="{
                borderBottom: index === data.length - 1 ? 'none' : ''
              }"
            >
              <template v-if="$scopedSlots.default">
                <div class="cell">
                  <slot :data="item"></slot>
                </div>
              </template>
              <template v-else>
                <div class="cell">
                  <span :title="item[config.key]">{{ item[config.key] }}</span>
                  <i
                    class="icon-triangle-right"
                    v-if="item.children && (item.arrowPosition ? item.arrowPosition === config.key : (expand ? i === 1 : i === 0))"
                    :class="{'open': hasChildOpen.includes(index)}"
                  ></i>
                </div>
              </template>
            </td>
          </tr>
          <template v-if="item.children && hasChildOpen.includes(index)">
            <tr v-for="child in item.children" :key="child.$index" class="child-tr">
              <td v-if="expand" :class="{ 'border-right': verticalLine }"></td>
              <td
                v-for="config in (childcolumns ? childcolumns : tableColumns)"
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
            v-if="hasRowExpand.includes(index) && item.rowExpand"
          >
            <td :colspan="tableColumns.length+1">
              {{item.rowExpand}}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      highlightIndex: -1,
      hasSelect: [],
      leftWidth: 0,
    };
  },
  props: {
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
    height: {
      type: [String, Number],
      default: '',
    },
    scrollTopWidth: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState('tableModuel', ['clickRow', 'hasChildOpen', 'hasRowExpand', 'tableColumns', 'endFixedWidth', 'endLeftWidth', 'hoverIndex']),
  },
  watch: {
    clickRow() {
      if (this.highlightRow) {
        this.highlightIndex = this.clickRow;
      }
    },
    width() {
      this.$nextTick(() => {
        this.setLeftWidth();
      });
    },
  },
  methods: {
    ...mapMutations('tableModuel', ['chgClickRow', 'chgChildOpen', 'chgRowExpand', 'chgHoverIndex']),
    rowClick(row, column) {
      this.chgClickRow(row);
      this.$emit('row-click', row, column);
      if (this.data[this.clickRow].children) {
        const temp = this.hasChildOpen;
        const flag = temp.indexOf(this.clickRow);
        if (flag > -1) {
          temp.splice(flag, 1);
        } else {
          temp.push(this.clickRow);
        }
        this.chgChildOpen(temp);
      }
    },
    hoverRow(index) {
      this.chgHoverIndex(index);
    },
    showExpand(index) {
      const temp = this.hasRowExpand;
      const flag = temp.indexOf(index);
      if (flag > -1) {
        temp.splice(flag, 1);
      } else {
        temp.push(index);
      }
      this.chgRowExpand(temp);
    },
    isHidden(val) {
      if (this.endFixed) {
        return val !== 'end';
      }
      if (this.startFixed) {
        return val !== 'start';
      }
      return false;
    },
    setLeftWidth() {
      const tableWidth = this.$refs.table.clientWidth;
      if (this.endFixed && this.$parent.$refs.displayTableBody.clientWidth < tableWidth) {
        this.leftWidth = this.endLeftWidth;
      }
    },
  },
  mounted() {
    this.setLeftWidth();
  },
};
</script>
