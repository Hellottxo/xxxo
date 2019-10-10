<template>
  <div class="xo-sub-menu">
    <div
    class="sub-menu-title"
    @click="isCollapse = !isCollapse">
      <span>{{title}}</span>
      <span>
        <i
        class="icon icon-next sub-icon"
        :class="{collapse: isCollapse}"
        ></i>
      </span>
    </div>
    <div
    v-if="isCollapse"
    class="sub-menu-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xo-sub-menu',
  data() {
    return {
      isCollapse: false
    }
  },
  props: {
    title: String
  }
}
</script>

<style lang="less" scoped>
.xo-sub-menu {
  position: relative;
  .sub-menu-title {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    .sub-icon {
      transform: scaleY(0.4) rotate(90deg);
      transition: all 0.3s;
    }
    .collapse {
      transform: scaleY(0.4) rotate(-90deg);
    }
  }
  .sub-menu-content {
    position: absolute;
    z-index: 222;
    margin-top: 3px;
    padding: 0 20px;
    background: #fff;
    border: 1px solid #e6e6e6;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
}
</style>
