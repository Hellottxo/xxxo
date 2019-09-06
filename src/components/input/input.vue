<template>
  <div class="xo-input">
    <div
    class="xo-input_wrap"
    :class="{readonly: disabled}"
    :style="{width: `${width}px`}"
    @mouseenter="isMouseenter=true"
    @mouseleave="isMouseenter=false"
    >
      <input
      v-if="type !== 'textarea'"
      :type="inputType"
      v-model="input"
      :class="{
        readonly: disabled,
        focus: isFocus
      }"
      :style="{width: `${width}px`}"
      :readonly="disabled"
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
      <i v-if="clearable && input && isMouseenter" class="clear" @click="clearSelect">x</i>
      <i
      v-if="type === 'password'
      && isMouseenter" class="icon-eye"
      @click="isPassword = !isPassword"
      ></i>
    </div>
  </div>
</template>

<script>
import '@/common/icon.less';
import calctetxtareaHeight from './calctextareaHeight';

export default {
  name: 'xoInput',
  props: {
    width: {
      type: String,
      default: '200',
    },
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
      input: '',
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
      if (this.type === 'textarea') {
        this.$nextTick(this.resizeTextarea);
      }
    },
    selectInput() {
      this.$nextTick(() => {
        if(this.select) {
          this.input = this.selectInput;
        }
      })
    }
  },
  methods: {
    setFocus(val) {
      if(!this.disabled) {
        this.isFocus = val;
      }
      this.$emit('inputClick', this.isFocus);
    },
    clearSelect() {
      this.input = '';
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
    this.resizeTextarea();
  }
}
</script>

<style lang="less" scoped>
.xo-input {
  padding: 10px 0;
  .xo-input_wrap {
    border-radius: 4px;
    position: relative;
    input {
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
      top: 8px;
      background-color: #c0c4cc;
      display: inline-block;
      font-size: 10px;
      color: #909399;
      border-color: #909399;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      line-height: 14px;
      font-style: inherit;
    }
    span {
      font-size: 12px;
      position: absolute;
      bottom: 6px;
      right: 9px;
    }
  }
  .focus {
    border-color: #409EFF !important;
  }
  .readonly {
    background-color: #f5f7fa;
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>
