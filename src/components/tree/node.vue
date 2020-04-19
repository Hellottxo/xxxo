<template>
  <div class="xo-tree-node">
    <ul>
      <li>
        <div class="xo-node">
          <span
          :class="{'xo-transform': collapse}"
          v-if="data[childrenKey]"
          @click="collapse=!collapse">
            <i class="iconfont icon-arrow-right"></i>
          </span>
          <span
          class="xo-node-title"
          :class="{selected: data.nodeKey === selected}"
          @click="handleClick">{{data.label}}</span>
        </div>
        <div v-if="data[childrenKey]">
          <xo-tree-node
          :default-expand="defaultExpand"
          :node-key="nodeKey"
          v-show="collapse"
          v-for="(item, index) in data[childrenKey]"
          :key="index"
          :data="item"
          :children-key="childrenKey"
          :default-expand-all="defaultExpandAll"
          :selected="selected"
          ></xo-tree-node>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'xo-tree-node',
  props: {
    data: Object,
    defaultExpand: {
      type: Array,
      default: () => [],
    },
    nodeKey: String,
    defaultExpandAll: Boolean,
    childrenKey: {
      type: String,
      default: 'children',
    },
    selected: [String, Number],
  },
  inject: ['setSelected'],
  data() {
    return {
      collapse: false,
    };
  },
  methods: {
    handleClick() {
      this.setSelected(this.data.nodeKey);
    },
  },
  mounted() {
    if (this.defaultExpandAll) {
      this.collapse = true;
    } else {
      this.collapse = this.defaultExpand.includes(this.data[this.nodeKey]);
    }
  },
};
</script>
