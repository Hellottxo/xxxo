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
    <slot v-if="isCollapse"></slot>
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
}
</style>
