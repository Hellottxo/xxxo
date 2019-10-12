<template>
  <div
  class="xo-sub-menu"
  v-clickoutside="clickoutside"
  @mouseenter="mouseEnter(true)"
  @mouseleave="mouseEnter(false)"
  :class="{
    horizontalSelect: mode === 'horizontal' && focus,
    subhorizontal: mode === 'horizontal',
    collapseVerticalSelect: this.$parent.collapse && focus
  }">
    <div
    class="sub-menu-title"
    @click="collapse"
    :class="{hover: mode === 'horizontal' && iscollapse}"
    >
      <template v-if="$scopedSlots.title">
        <slot name="title" ></slot>
      </template>
      <template v-else>
        <span class="title_wrap">{{title}}</span>
      </template>
      <span class="icon_wrap">
        <i
        class="icon icon-next sub-icon"
        :class="{subcollapse: iscollapse}"
        ></i>
      </span>
    </div>
    <transition name="fade-transition">
      <div
      v-show="iscollapse"
      :class="{
        horizontalContent: mode === 'horizontal',
        verticalContent: mode === 'vertical',
        collapseVerticalContent: mode === 'vertical' && this.$parent.collapse,
      }">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { clearTimeout, setTimeout } from 'timers';
export default {
  name: 'xo-sub-menu',
  data() {
    return {
      iscollapse: false,
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
    clickoutside() {
      if(this.mode === 'horizontal' || this.$parent.collapse) {
        this.iscollapse = false;
      }
    },
    collapse() {
      // if(this.$parent.collapse) return;
      this.iscollapse = !this.iscollapse;
    },
    mouseEnter(flag) {
      if(this.mode === 'vertical' && !this.$parent.collapse) return;
      
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        this.iscollapse = flag;
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
        transform: scaleY(0.4) rotate(90deg);
        transition: all 0.3s;
      }
    }
    .subcollapse {
      transform: scaleY(0.4) rotate(-90deg) !important;
    }
  }
  .hover {
    color: #409EFF;
  }
  .verticalContent {
    .xo-menu-item {
      padding: 0 45px;
    }
  }
  .horizontalContent {
    position: absolute;
    z-index: 222;
    margin: 5px 0;
    padding: 5px 0;
    background: #fff;
    border: 1px solid #e6e6e6;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    .xo-menu-item {
      color: #2c3e50;
      height: 38px;
      line-height: 38px;
      cursor: pointer;
    }
    .xo-menu-item:hover {
      color: #409EFF;
    }
    .horizontalSelect {
      color: #409EFF;
      border-bottom: none;
    }
  }
  .collapseVerticalContent {
    position: absolute;
    top: 0;
    left: 58px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
}
.subhorizontal {
  height: 50px;
  line-height: 50px;
}
.collapseVerticalSelect {
  background-color: #409eff17; 
  i {
    color: #409EFF;
  }
}
</style>
