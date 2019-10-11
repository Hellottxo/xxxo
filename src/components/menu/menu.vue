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
  min-width: 240px;
  min-height: 300px;
  border-right: 1px solid #e6e6e6;
  font-size: 14px;
}
.horizontal {
  display: flex;
  width: 100%;
  padding: 0 0 0 55px;
  border-bottom: 1px solid #e6e6e6;
  border-right: 0;
  min-height: 40px;
}
div {
  -moz-user-select:none;/*火狐*/
  -webkit-user-select:none;/*webkit浏览器*/
  -ms-user-select:none;/*IE10*/
  -khtml-user-select:none;/*早期浏览器*/
  user-select:none;
}
</style>

<style lang="less">
.horizontalSelect {
  color: #409EFF;
  border-bottom: 2px solid #409EFF;
}
.verticalSelect {
  background-color: #409eff17;
  color: #409EFF;
}
</style>

