<template>
  <div
  class="xo-menu-item"
  @click="handleClick"
  :class="{
    horizontalSelect: mode === 'horizontal' && selectIndex === index,
    verticalSelect: mode === 'vertical' && selectIndex === index,
    menuDisabled: disabled
  }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'xo-menu-item',
  data() {
    return {}
  },
  props: {
    index: {
      type: String,
      default: null
    },
    disabled: Boolean
  },
  computed: {
    ...mapState('menuModuel', ['selectIndex', 'mode'])
  },
  methods: {
    ...mapMutations('menuModuel', ['chgSelectIndex']),
    handleClick() {
      if(!this.disabled) {
        this.chgSelectIndex(this.index);
        this.$emit('click', this);
      }
    }
  },
}
</script>

<style lang="less" scoped>
.xo-menu-item {
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;
  text-align: start;
  word-break: keep-all;
  display: flex;
}
.xo-menu-item:hover {
  color: #409EFF;
  i {
    color: #409EFF;
  }
}

.menuDisabled {
  cursor: not-allowed;
  opacity: 0.25; 
}
.menuDisabled:hover {
  color: inherit;
}
</style>
