<template>
  <div
  class="xo-sub-menu"
  v-clickoutside="collapse"
  @mouseenter="mouseEnter(true)"
  @mouseleave="mouseEnter(false)"
  :class="{
    horizontalSelect: mode === 'horizontal' && focus,
    horizontal: mode === 'horizontal'
  }">
    <div
    class="sub-menu-title"
    @click="isCollapse = !isCollapse"
    :class="{hover: mode === 'horizontal' && isCollapse}"
    >
      <span class="title_wrap">{{title}}</span>
      <span class="icon_wrap">
        <i
        class="icon icon-next sub-icon"
        :class="{collapse: isCollapse}"
        ></i>
      </span>
    </div>
    <div
    v-show="isCollapse"
    :class="{subMenuContent: mode === 'horizontal'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { clearTimeout, setTimeout } from 'timers';
export default {
  name: 'xo-sub-menu',
  data() {
    return {
      isCollapse: false,
      focus: false
    }
  },
  props: {
    title: String,
    index: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapState('menuModuel', ['mode', 'selectIndex'])
  },
  watch: {
    selectIndex() {
      const CHILDREN = this.$children;
      this.focus = CHILDREN.findIndex(e => e.index === this.selectIndex) > -1;
    }
  },
  methods: {
    collapse() {
      if(this.mode === 'horizontal') {
        this.isCollapse = false;
      }
    },
    mouseEnter(flag) {
      if(this.mode === 'vertical') return;
      
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        this.isCollapse = flag;
      }, 200)
    }
  }
}
</script>

<style lang="less" scoped>
.xo-sub-menu {
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;
  text-align: start;
  .sub-menu-title {
    cursor: pointer;
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    .title_wrap {
      min-width: 50px; 
    }
    .icon_wrap {
      width: 30px;
      .sub-icon {
        transform: scaleY(0.4) rotate(-90deg);
        transition: all 0.3s;
      }
    }
    .collapse {
      transform: scaleY(0.4) rotate(90deg) !important;
    }
  }
  .hover {
    color: #409EFF;
  }
  .subMenuContent {
    position: absolute;
    z-index: 222;
    margin: 5px 0;
    padding: 5px 0;
    background: #fff;
    border: 1px solid #e6e6e6;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    & > .xo-menu-item {
      color: #2c3e50;
      height: 38px;
      line-height: 38px;
      cursor: pointer;
    }
    & > .xo-menu-item:hover {
      color: #409EFF;
    }
    & > .horizontalSelect {
      color: #409EFF;
      border-bottom: none;
    }
  }
}
.horizontal {
  height: 50px;
  line-height: 50px;
}
</style>
