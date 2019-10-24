<template>
  <div
  class="xo-card"
  :class="{
    'xo-shadow': shadow === 'always',
    'xo-hover-shadow': shadow === 'hover'
  }">
    <div class="xo-card_header">
      <slot name="header"></slot>
    </div>
    <div class="xo-card_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xo-card',
  props: {
    shadow: {
      type: String,
      default: ''
    }
  }
}
</script>
