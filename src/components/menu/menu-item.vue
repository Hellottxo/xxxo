<template>
  <div
  class="xo-menu-item"
  @click="handleClick"
  :class="{
    horizontalSelect: mode === 'horizontal' && selectIndex === index,
    verticalSelect: mode === 'vertical' && selectIndex === index,
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
      this.chgSelectIndex(this.index);
      this.$emit('click', this);
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
  font-weight: bold;
  transition: all 0.2s;
  box-sizing: border-box;
  text-align: start;
}
.xo-menu-item:hover {
  color: #409EFF;
}
.horizontalSelect {
  color: #409EFF;
  border-bottom: 2px solid #409EFF;
}
.verticalSelect {
  background-color: #409eff17;
  color: #409EFF;
}
div {
  -moz-user-select:none;/*火狐*/
  -webkit-user-select:none;/*webkit浏览器*/
  -ms-user-select:none;/*IE10*/
  -khtml-user-select:none;/*早期浏览器*/
  user-select:none;
}
</style>
