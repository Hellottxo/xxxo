<template>
  <div
  class="table-header">
    <table
      :style="{
        marginLeft:`${endFixed ? leftWidth-1 : 0}px`,
        width: `${width}px`
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
            >
            <span>{{ config.label }}</span>
            <span v-if="config.sort">
              <i class="icon-caret-top top"></i>
              <i class="icon-caret-bottom bottom"></i>
            </span>
            </div>
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
      endFixedWidth: 0,
      startFixedwidth: 0,
      timeout: null
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
    endFixed: {
      type: Boolean,
      default: false
    },
    startFixed: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState('tableModuel', ['tableColumns'])
  },
  watch: {
    width() {
      this.$nextTick(() => {
        this.setFixedWidth();
      })
    }
  },
  methods: {
    ...mapMutations('tableModuel', ['chgEndFixedWidth', 'chgStartFixedWidth', 'chgEndLeftWidth']),
    isHidden(val) {
      if(this.endFixed) {
        return val === 'end' ? false : true;
      }else if(this.startFixed){
        return val === 'start' ? false : true;
      }else {
        return false;
      }
    },
    getFixedCount(str) {
      let temp = this.tableColumns.filter(e => e.fixed === str);
      return temp.length;
    },
    getFixedWidth(str) {
      let count = this.getFixedCount(str);
      const th = this.$refs.table.getElementsByTagName('th');
      const len = th.length;
      if(this.showGutter && str === 'end') count +=1;
      let width = 0;
        while(count > 0) {
          if(str === 'end') {
            width += th[len - count].clientWidth;
          }else {
            width += th[count].clientWidth;
          }
          count--;
        }
      if(this.expand && str === 'start') width += th[0].clientWidth; 
      return width;
    },
    setFixedWidth() {
      const width = this.$refs.table.clientWidth;
      if(this.endFixed) {
        this.endFixedWidth = this.getFixedWidth('end');
        this.chgEndFixedWidth(this.endFixedWidth);
        this.leftWidth = this.endFixedWidth - width + 1;
        this.chgEndLeftWidth(this.leftWidth)
      }
      if(this.startFixed) {
        this.startFixedwidth = this.getFixedWidth('start');
        this.chgStartFixedWidth(this.startFixedwidth);
      }
    }
  },
  mounted() {
    this.setFixedWidth();
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
