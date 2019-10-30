<template>
  <div class="xo-tree">
    <xo-tree-node
    v-for="(item, index) in data"
    :node-key="nodeKey"
    :key="index"
    :data="item"
    :default-expand="defaultExpand"
    :default-expand-all="defaultExpandAll"
    :children-key="childrenKey"
    ></xo-tree-node>
  </div>
</template>

<script>
import xoTreeNode from './node';
export default {
  name: 'xo-tree',
  components: { xoTreeNode },
  data() {
    return {
      flatTree: {}
    }
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    multiple: Boolean,
    defaultSelected: String,
    nodeKey: String,
    defaultExpand: {
      type: Array,
      default: () => {
        return []
      }
    },
    defaultExpandAll: Boolean
  },
  methods: {
    handleClick(nodeKey) {
      if(!this.multiple) {
        const arr = Object.keys(this.flatTree);
        const key = arr.find(child => {
          const selected = this.flatTree[child].node.selected;
          if(selected === undefined) return;
          return selected == true;
        })
        if(key != undefined) {
          this.flatTree[key].node.selected = false;
        }
      }
      const item = this.flatTree[nodeKey];
      this.$set(item.node, 'selected', !item.node.selected);
      this.$emit('node-click', item.node);
    },
    setSelected(val) {
      this.handleClick(val);
    },
    flattenTreeData() {
      let index = 0;
      const flatTree = [];
      const that = this;
      function getFlattenNode(node) {
        node.nodeKey = that.nodeKey === undefined ? index++ : node[that.nodeKey];
        flatTree[node.nodeKey] = {
          node: node,
          nodeKey: node.nodeKey,
        };
        if(node[that.childrenKey]) {
          node[that.childrenKey].forEach(e => getFlattenNode(e))
        }
      }
      this.data.forEach(node => {
        getFlattenNode(node);
      });
      return flatTree;
    }
  },
  provide: function() {
    return {
      setSelected: this.setSelected
    }
  },
  mounted() {
    this.flatTree = this.flattenTreeData();
    if(this.defaultSelected) {
      const item = this.flatTree[this.defaultSelected];
      this.$set(item.node, 'selected', !item.node.selected);
    }
  }
}
</script>
