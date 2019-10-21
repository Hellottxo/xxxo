<template>
  <div class="xo-button"
  @click="handleClick"
  >
    <div
    class="xo-button_wrap common-hover common-click"
    :class="{
      primary: type === 'primary',
      round: type === 'round',
      circle: type === 'circle',
      text: type === 'text',
      'common-disabled': disabled
    }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xo-button',
  props: {
    type: String,
    disabled: Boolean
  },
  data() {
    return {
      isClick: false,
    }
  },
  methods: {
    handleClick() {
      if(this.disabled) return;
      this.$emit('click');
    }
  }
}
</script>

<style lang="less" scoped>
.xo-button {
  display: inline-block;
  .xo-button_wrap {
    height: 33px;
    line-height: 33px;
    font-size: 14px;
    padding: 0 8px;
    border-radius: 4px;
    // display: inline-block;
    border: 1px solid @border-color;
    cursor: pointer;
  }
  .primary {
    background: @blue;
    border: 1px solid @blue;
    color: @white;
  }
  .round {
    border-radius: 14px;
  }
  .circle {
    border-radius: 50%;
  }
  .text {
    border: none;
  }
}
</style>
