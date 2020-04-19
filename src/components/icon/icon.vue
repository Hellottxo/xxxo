<template>
  <span>
    <i :class="iconMode" class="icon iconfont" />
  </span>
</template>

<script>
export default {
  name: 'xo-icon',
  props: {
    mode: String,
  },
  computed: {
    iconMode() {
      return `icon-${this.mode}`;
    },
  },
};
</script>
