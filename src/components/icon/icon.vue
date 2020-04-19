<template>
  <span :class="iconMode" class="icon iconfont"/>
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
