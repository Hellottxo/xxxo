<template>
  <div class="xo-input">
    <div
    class="xo-input_wrap"
    :class="{disabled: disabled}"
    :style="{
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth
    }"
    @mouseenter="isMouseenter=true"
    @mouseleave="isMouseenter=false"
    >
      <input
      v-if="type !== 'textarea'"
      :type="inputType"
      v-model="input"
      :class="{
        disabled: disabled,
        focus: isFocus
      }"
      :style="{
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
        paddingLeft: $scopedSlots.prefix ? `30px` : `15px`,
        paddingRight: $scopedSlots.suffix ? `30px` : `15px`,
      }"
      :disabled="disabled"
      :placeholder="placeholder"
      @focus="setFocus(true)"
      @blur="setFocus(false)">
      <textarea
      ref="textarea"
      v-model="input"
      :style="{
        height: textareaHeight,
        width: `${width}px`}"
      v-else
      :maxlength="wordLimit ? maxlength : ''"
      :class="{focus: isFocus}"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      ></textarea>
      <span v-if="wordLimit">{{`${input.length}/${maxlength}`}}</span>
      <span class="icon-suffix">
        <i v-if="clearable && input && isMouseenter" class="clear" @click="clearSelect">x</i>
      </span>
      <i
      v-if="type === 'password'
      && isMouseenter" class="icon-eye"
      @click="isPassword = !isPassword"
      ></i>
      <span class="icon-prefix" v-if="$scopedSlots.prefix">
        <slot name="prefix"></slot>
      </span>
      <span class="icon-suffix" v-if="$scopedSlots.suffix">
        <slot name="suffix"></slot>
      </span>
    </div>
  </div>
</template>

<script>
import calctetxtareaHeight from './calctextareaHeight';

export default {
  name: 'xo-input',
  props: {
    value: [Number, String, Array],
    width: String,
    minWidth: String,
    maxWidth: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '请输入内容',
    },
    type: {
      type: String,
      default: 'text',
    },
    autoSize: {
      type: [Boolean, Object],
      default: false,
    },
    wordLimit: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      input: this.value,
      isFocus: false,
      isMouseenter: false,
      isPassword: false,
      inputType: 'text',
      inputWrapWidth: 0,
      textareaHeight: '',
      count: 0,
    };
  },
  watch: {
    isPassword() {
      this.inputType = this.isPassword ? 'password' : 'text';
    },
    input() {
      this.$emit('input', this.input);
      if(this.type === 'textarea') {
        this.resizeTextarea();
      }
    },
    value() {
      this.input = this.value;
    }
  },
  methods: {
    setFocus(val) {
      if(val) {
        this.$emit('focus', val);
      }else {
        this.$emit('blur', val);
      }
      if(!this.disabled) {
        this.isFocus = val;
      }
    },
    clearSelect() {
      this.input = '';
      this.$emit('input', this.input);
    },
    setInputType() {
      this.inputType = this.type;
      if (this.inputType === 'password') this.isPassword = true;
    },
    resizeTextarea() {
      this.textareaHeight = calctetxtareaHeight(this.$refs.textarea, this.input);
    }
  },
  mounted() {
    this.setInputType();
  }
}
</script>

<style lang="less" scoped>
.xo-input {
  cursor: pointer;
  .xo-input_wrap {
    border-radius: 4px;
    position: relative;
    display: flex;
    input {
      cursor: pointer;
      color: #606266;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 30px;
      line-height: 30px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      padding: 0 15px;
      transition: all 0.5s;
    }
    input:focus {
      outline: none;
    }
    textarea {
      box-sizing: border-box;
      padding: 10px 15px;
      min-height: 50px;
      border-color: #dcdfe6;
      border-radius: 4px;
      transition: border-color 0.5s;
      resize: vertical;
    }
    textarea:focus {
      outline: none;
    }
    i {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    i.clear {
      color: #909399;
      font-weight: 1800;
      display: inline-block;
      font-size: 10px;
      background-color: #fff;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid #909399;
      line-height: 13px;
      font-style: inherit;
      -webkit-transform:scale(0.7);
      z-index: 222;
    }
    span {
      font-size: 12px;
      position: absolute;
      bottom: 6px;
      right: 9px;
    }
    .icon-suffix {
      position: absolute;
      font-size: 10px;
      line-height: 30px;
      top: 0;
      &>i {
        position: relative;
        top: 0;
        right: 0;
      }
    }
    .icon-preffix {
      position: absolute;
      font-size: 10px;
      line-height: 30px;
      left: 10px;
      top: 0;
      width: 30px;
      &>i {
        position: relative;
        top: 0;
        right: 0;
      }
    }
  }
  .focus {
    border-color: #409EFF !important;
  }
}
</style>
