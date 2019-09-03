<template>
  <div class="tree">
    <div
    v-for="(item, index) in data"
    :key="index">
      <div
      class="tree-content"
      @mouseenter="hover=index"
      @mouseleave="hover=-1"
      @click="collapse(index)"
      :style="{paddingLeft: getPaddingLeft}"
      :class="{
        hover: hover === index,
        highlight: setHighlightRow(index)
      }">
        <div
        class="icon-collapse"
        v-if="item.children && collapseArr.indexOf(index)===-1"
        >+</div>
        <div
        class="icon-collapse icon-nocollapse"
        v-if="item.children && collapseArr.indexOf(index)>-1"
        >-</div>
        <div class="content-label">{{item.label}}</div>
      </div>
      <div class="child-node" v-show="item.children && collapseArr.indexOf(index)>-1">
        <xo-tree :data="item.children" :parentNode="getNode(index)"></xo-tree>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'xo-tree',
  data() {
    return {
      collapseArr: [],
      hover: -1,
    }
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    parentNode: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState('treeModuel', ['highlightRow']),
    getPaddingLeft() {
      const temp = this.parentNode.split('-');
      const len = this.parentNode ? temp.length : 0;
      return `${(len + 1)*16}px`;
    }
  },
  methods: {
    ...mapMutations('treeModuel', ['chgHighlightRow']),
    getNode(index) {
      return this.parentNode ? `${this.parentNode}-${index}` : `${index}`;
    },
    collapse(index) {
      const flag = this.collapseArr.indexOf(index);
      if(flag > -1) {
        this.collapseArr.splice(index, 1);
      }else {
        this.collapseArr.push(index);
      }
      const temp = this.getNode(index);
      this.chgHighlightRow(temp);
      this.$emit('click', temp);
    },
    setHighlightRow(index) {
      const temp = this.getNode(index);
      return this.highlightRow === temp;
    },
    
  }
}
</script>

<style lang="less" scoped>
.tree {
  .tree-content {
    display: flex;
    position: relative;
    margin-bottom: 5px;
    cursor: pointer;
    .icon-collapse {
      font-size: 14px;
      border: 1px solid #409eff;
      padding: 0 1px;
      height: 10px;
      line-height: 10px;
      color: #409eff;
      position: relative;
      top: 6px;
    }
    .icon-nocollapse {
      padding: 0 3px;
    }
    .content-label {
      padding-left: 10px;
    }
    
  }
  .hover {
    background-color: #fafbfc;
  }
  .highlight {
    background-color:#f5f7fa;
  }
}
</style>

