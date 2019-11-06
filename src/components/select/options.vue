<template>
  <li
  class="xo-options"
  @click="handleClick"
  :class="{selected: selected}"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'xo-options',
  data() {
    return {
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
    },
    filter() {
      return this.$parent.filter;
    },
    keyWords() {
      this.filterMethod(this.$parent.keyWords);
      return this.$parent.keyWords;
    }
  },
  methods: {
    handleClick() {
      this.handleSelectClick(this.options)
    },
    filterMethod(val) {
      console.log(this.$parent);
    }
  }
}
</script>
