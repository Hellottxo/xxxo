<template>
  <div
  class="xo-menu"
  :class="{horizontal: mode === 'horizontal'}"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'xo-menu',
  data() {
    return {
    }
  },
  props: {
    defaultActive: {
      type: String,
      default: null
    },
    mode: {
      type: String,
      default: 'vertical'
    }
  },
  computed: {
    ...mapState('menuModuel', ['selectIndex'])
  },
  methods: {
    ...mapMutations('menuModuel', ['chgSelectIndex', 'chgMode']),
  },
  mounted() {
    if(this.defaultActive) {
      this.chgSelectIndex(this.defaultActive);
    }
    this.chgMode(this.mode);
  }
}
</script>

<style lang="less" scoped>
.xo-menu {
  width: 240px;
  min-height: 300px;
  border-right: 1px solid #e6e6e6;
}
.horizontal {
  display: flex;
  width: 100%;
  padding: 0 0 0 55px;
  border-bottom: 1px solid #e6e6e6;
  border-right: 0;
  min-height: 50px;
}
</style>
