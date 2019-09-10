<template>
  <div class="xo-select">
    <xo-input
    v-model="select"
    :placeholder="placeholder"
    @mouseenter="ismouseenter=true"
    @mouseleave="ismouseenter=false"
    @input-click="inputClick">
      <template v-slot:suffix :class="{transform: showOptions}">
          <i
          :class="{transform: showOptions}"
          class="icon-triangle-down select-down"></i>
      </template>
    </xo-input>
    <div>
      <xo-options :options="options" @click="optionsClick"></xo-options>
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
      select: '',
      ismouseenter: false
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
    },
    optionsClick(val) {
      this.select = val;
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
    top: 3px !important;
  }
  .transform {
    transform: rotate(180deg);
    top: -1px !important;
  }
}
</style>
