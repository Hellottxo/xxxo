<template>
  <div class="xo-select">
    <div
    class="xo-select_wrap"
    :class="{isFocus: isFocus}"
    
    @click="inputWrapClick">
      <xo-input
      ref="input"
      v-model="select"
      :placeholder="placeholder"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      >
        <template v-slot:suffix :class="{transform: visible}">
            <i
            :class="{transform: visible}"
            class="icon-triangle-down select-down"></i>
        </template>
      </xo-input>
    </div>
    <div>
      <xo-options
      v-if="visible"
      :options="options"
      @click="optionsClick"></xo-options>
    </div>
  </div>
</template>

<script>
import xoInput from '@/components/input/index.js';
import xoOptions from './options';
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      visible: false,
      select: '',
      isFocus: false,
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
      this.select = val;
      this.visible = false;
      this.isFocus = true;        
    }
  }
}
</script>

<style lang="less" scoped>
.xo-select {
  .xo-select_wrap {
    outline: none;
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
