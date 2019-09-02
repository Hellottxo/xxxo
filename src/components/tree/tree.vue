<template>
  <div class="tree-node">
    <div
    class="tree-node-content"
    v-for="(item, index) in data"
    :key="index">
      <div
      class="icon-collapse"
      v-if="item.children && !isCollapse"
      @click="isCollapse=true"
      >+</div>
      <div
      class="icon-collapse icon-nocollapse"
      v-if="item.children && isCollapse"
      @click="isCollapse=false">-</div>
      <div class="content-label">{{item.label}}</div>
      <template v-if="item.children">
        <tree-node :data="item.children"></tree-node>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tree-node',
  data() {
    return {
      isCollapse: false,
    }
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tree-node {
  .tree-node-content {
    display: flex;
    position: relative;
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
      padding: 0 3px
    }
    .content-label {
      margin-left: 10px;
    }
  }
}
</style>

