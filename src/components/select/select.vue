<template>
  <div class="xo-select"
  v-clickoutside="clickOutside">
    <div
    class="xo-select_wrap"
    :class="{
      isFocus: isFocus,
      isNotFilter: !filter
    }"
    :style="{width: `${width}px`}"
    @click="inputWrapClick"
    @mouseenter="isMouseenter=true"
    @mouseleave="isMouseenter=false"
    >
      <xo-input
      :clearable="!multiple && clearable"
      ref="input"
      v-model="select"
      :placeholder="placeholder"
      :width="width"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      >
        <template v-slot:suffix :class="{transform: visible}">
            <i :class="{transform: visible}"
            class="icon-triangle-down select-down" v-if="(clearable && (!isMouseenter || !select) || !clearable) || multiple"></i>
        </template>
      </xo-input>
    </div>
    <template>
      <xo-options
      v-model="input"
      v-show="visible"
      :multiple="multiple"
      :options="options"
      @click="optionsClick"></xo-options>
    </template>
    <div class="select-item_wrap" v-if="multiple">
      <div v-for="(item, index) in input" :key="index">
        <span>{{item.label}}</span>
        <span @click="delSelect(item.value)">x</span>
      </div>
    </div>
  </div>
</template>

<script>
import xoInput from '@/components/input/index.js';
import xoOptions from './options';
import { constAnalysis } from '@/mixins/const-analysis.js';

export default {
  name: 'xo-select',
  data() {
    return {
      visible: false,
      select: '',
      input: [],
      isFocus: false,
      isMouseenter: false,
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
    clearable: Boolean,
    width: {
      type: String,
      default: '200'
    },
    multiple: Boolean,
    filter: Boolean
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
      this.input = val;
      this.selectChg();
      this.visible = this.multiple;
      this.isFocus = true;
    },
    clickOutside() {
      this.isFocus = false;
      this.visible = false;
    },
    delSelect(val) {
      const index = this.input.findIndex(e => e.value === val);
      this.input.splice(index, 1);
      this.selectChg();
    },
    selectChg() {
      if(this.multiple) {
        const that = this;
        this.select = this.input.map(e => {
          return e.label;
        })
      }else {
        this.select = this.input.label;
      }
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
.isNotFilter {
  & > div {
    & > .xo-input_wrap {
      & > input {
        color: transparent !important;
        text-shadow: 0 0 0 #606266;
      }
    }
  }
}
.select-item_wrap {
  display: flex;
  font-size: 10px;
  &>div {
    display: inline-block;
    height: 22px;
    line-height: 22px;
    margin: 2px 4px 2px 0;
    padding: 0 8px;
    border: 1px solid #e3e8ee;
    border-radius: 3px;
    background: #f7f7f7;
    font-size: 12px;
    vertical-align: middle;
    opacity: 1;
    overflow: hidden;
    cursor: pointer;
  }
}
</style>
