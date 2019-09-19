<template>
  <div class="xo-select">
    <div
    class="xo-select_wrap"
    :class="{isFocus: isFocus}"
    @click="inputWrapClick"
    v-clickoutside="clickOutside"
    @mouseenter="isMouseenter=true"
    @mouseleave="isMouseenter=false"
    >
      <xo-input
      :clearable="clearable"
      ref="input"
      v-model="select"
      :placeholder="placeholder"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      >
        <template v-slot:suffix :class="{transform: visible}">
            <i :class="{transform: visible}"
            class="icon-triangle-down select-down" v-if="(clearable && (!isMouseenter || !select)) || !clearable"></i>
        </template>
      </xo-input>
    </div>
    <template>
      <xo-options
      v-if="visible"
      :options="options"
      @click="optionsClick"></xo-options>
    </template>
  </div>
</template>

<script>
import xoInput from '@/components/input/index.js';
import xoOptions from './options';
import { constAnalysis } from '@/mixins/const-analysis.js';

export default {
  data() {
    return {
      visible: false,
      select: '',
      isFocus: false,
      isMouseenter: false
    }
  },
  mixins: [constAnalysis],
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
    },
    clearable: Boolean
  },
  components: {
    xoInput,
    xoOptions
  },
  watch: {
    select() {
      this.$emit('change', this.select);
    }
  },
  methods: {
    setFocus(val) {
      this.isFocus = val;
    },
    inputWrapClick() {
      this.visible = !this.visible;
    },
    optionsClick(val) {
      this.select = this.getLabel(this.options, val);
      this.visible = false;
      this.isFocus = true;        
    },
    clickOutside() {
      this.visible = false;
    }
  }
}
</script>

<style lang="less" scoped>
.xo-select {
  .xo-select_wrap {
    outline: none;
    width: 200px;
    .xo-input {
      cursor: pointer;
    }
    .select-down {
      top: 4px !important;
    }
    .transform {
      transform: rotate(180deg);
      top: -1px !important;
    }
  }
}
</style>

<style lang="less">
.isFocus {
  & > div {
    & > .xo-input_wrap {
      & > input {
        border-color: #409EFF !important;
      }
    }
  }
}
</style>
