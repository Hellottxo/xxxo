<template>
  <div class="xo-select">
    <xo-input
    :placeholder="placeholder"
    @input-click="inputClick">
      <template v-slot:suffix>
        <i v-if="showOptions" class="icon-triangle-down select-down"></i>
        <i v-else class="icon-triangle-up select-up"></i>
      </template>
    </xo-input>
    <div v-if="showOptions">
      <xo-options :options="options"></xo-options>
    </div>
  </div>
</template>

<script>
import xoInput from '@/components/input/index.js';
import xoOptions from './options';
export default {
  data() {
    return {
      showOptions: false,
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    xoInput,
    xoOptions
  },
  methods: {
    inputClick(val) {
      this.showOptions = val;
    }
  }
}
</script>

<style lang="less" scoped>
.xo-select {
  .xo-input {
    cursor: pointer;
  }
  .select-down {
    top: 10px !important;
  }
  .select-up {
    top: -10px !important;
  }
}
</style>
