<template>
  <div class="xo-input">
    <div
    class="xo-input_wrap"
    :class="{readonly: disabled}"
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
      :readonly="disabled"
      :placeholder="placeholder"
      @focus="setFocus(true)"
      @blur="setFocus(false)">
      <textarea
      ref="textarea"
      v-model="input"
      :style="textareaStyle"
      v-else
      :class="{focus: isFocus}"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      ></textarea>
      <i v-if="clearable && input && isMouseenter" class="clear" @click="clearSelect">x</i>
      <i v-if="type === 'password' && isMouseenter" class="eye" @click="isPassword = !isPassword"></i>
    </div>
  </div>
</template>

<script>
import '../../common/icon.css'

export default {
  name: "xoInput",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    type: {
      type: String,
      default: 'text'
    },
    autoSize: {
      type: [Boolean, Object],
      default: false
    }
  },
  data() {
    return {
      input: 123,
      isFocus: false,
      isMouseenter: false,
      isPassword: false,
      inputType: 'text',
      inputWrapWidth: 0,
      textareaStyle: {}
    }
  },
  watch: {
    isPassword() {
      this.inputType = this.isPassword ? 'password' : 'text';
    },
    input() {
      if(this.type === 'textarea') {
        this.$nextTick(this.resizeTextarea)
      }
    }
  },
  methods: {
    setFocus(val) {
      if(!this.disabled) {
        this.isFocus = val;
      }
    },
    clearSelect() {
      this.input = "";
    },
    setInputType() {
      this.inputType = this.type;
      if(this.inputType === 'password') this.isPassword = true;
    },
    resizeTextarea() {
      const textarea = document.getElementsByTagName('textarea');
      let style = {};
      style.height = `${textarea[0].scrollHeight}px`;
      // this.textareaStyle = style;
      console.log(style.height)
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
  // width: 180px;
  .xo-input_wrap {
    width: 220px;
    border-radius: 4px;
    position: relative;
    input {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 148px;
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
      padding: 10px 15px;
      min-height: 32px;
      min-width: 150px;
      border-color: #dcdfe6;
      border-radius: 4px;
      transition: border-color 0.5s;
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
    .count {
      position: absolute;
      bottom: 5px;
      right: 0;
      font-size: 12px;
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
