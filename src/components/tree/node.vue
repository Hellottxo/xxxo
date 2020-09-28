<template>
  <li class="xo-tree-node">
    <div class="xo-node">
      <span
        :class="{'xo-transform': collapse}"
        v-if="data[childrenKey]"
        @click="collapse=!collapse"
      >
        <xo-icon mode="arrow-right" />
      </span>
      <span
        class="xo-node-title"
        :class="{selected: data.nodeKey === selected}"
        @click="handleClick"
      >{{data.label}}</span>
    </div>
    <xo-collapse-transition>
      <div v-if="data[childrenKey]" v-show="collapse">
        <xo-tree-node
          :default-expand="defaultExpand"
          :key="item[nodeKey]"
          :node-key="nodeKey"
          v-for="item in data[childrenKey]"
          :data="item"
          :children-key="childrenKey"
          :default-expand-all="defaultExpandAll"
          :selected="selected"
        />
      </div>
    </xo-collapse-transition>
  </li>
</template>

<script>
import xoCollapseTransition from "../transition";
import xoIcon from "../icon"
export default {
  name: "xo-tree-node",
  props: {
    data: Object,
    defaultExpand: {
      type: Array,
      default: () => []
    },
    nodeKey: String,
    defaultExpandAll: Boolean,
    childrenKey: {
      type: String,
      default: "children"
    },
    selected: [String, Number]
  },
  inject: ["setSelected"],
  data() {
    return {
      collapse: false
    };
  },
  components: {
    xoCollapseTransition,
    xoIcon
  },
  methods: {
    handleClick() {
      this.setSelected(this.data.nodeKey);
    }
  },
  mounted() {
    if (this.defaultExpandAll) {
      this.collapse = true;
    } else {
      this.collapse = this.defaultExpand.includes(this.data[this.nodeKey]);
    }
  }
};
</script>
