<template>
  <li
  class="xo-options"
  @click="handleClick"
  :class="{selected: selected}"
  v-show="visible"
  >
    <slot></slot>
    <i v-if="$parent.multiple && selected" class="iconfont icon-seleted"></i>
  </li>
</template>

<script>
export default {
  name: 'xo-options',
  data() {
    return {
      visible: true
    }
  },
  inject: ['handleSelectClick'],
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    selected() {
      const arr = this.$parent.input;
      const index = arr.indexOf(this.options);
      return index > -1;
    }
  },
  methods: {
    handleClick() {
      this.handleSelectClick(this.options)
    }
  }
}
</script>
