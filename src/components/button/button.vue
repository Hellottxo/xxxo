<template>
  <div class="xo-button"
  @click="handleClick"
  >
    <button
    class="xo-button_wrap xo-hover xo-click"
    :class="{
      primary: type === 'primary',
      round: round,
      circle: circle,
      text: type === 'text',
      success: type === 'success',
      info: type === 'info',
      warning: type === 'warning',
      danger: type === 'danger',
      disabled: disabled,
      plain: plain
    }">
      <span>
        <slot></slot>
        <i v-if="icon != ''" class="icon" :class="`icon-${icon}`"></i>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'xo-button',
  props: {
    type: String,
    disabled: Boolean,
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    round: Boolean,
    circle: Boolean,
    plain: Boolean
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
