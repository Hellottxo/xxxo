<template>
  <div
  class="xo-menu"
  :class="{
    horizontal: mode === 'horizontal',
    vertical: mode === 'vertical',
    collapse: collapse
  }"
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
    },
    collapse: Boolean
  },
  computed: {
    ...mapState('menuModuel', ['selectIndex'])
  },
  watch: {
    collapse(val) {

    }
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
  min-height: 300px;
  border-right: 1px solid #e6e6e6;
  font-size: 14px;
  transition: all 0.5s;
}
.vertical:not(.collapse) {
  min-width: 240px;
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
  color: #409EFF !important;
  span, i {
    color: #409EFF;
  }
  .xo-menu-item {
    color: #2c3e50;
    border: none;
  }
  border-bottom: 2px solid #409EFF;
}
.verticalSelect {
  color: #409EFF;
  background-color: #409eff17;
  span, i {
    color: #409EFF;
  }
}
.collapse {
  width: 56px;
  .sub-menu-title span:nth-child(2), span:nth-child(3) {
    display: none;
  }
  .xo-menu-item span:nth-child(2) {
    display: none;
  }
}
.xo-menu {
  .sub-menu-title span, .xo-menu-item span {
    margin: 0 5px 0 0;
  }
}
</style>

