<template>
  <div class="xo-input">
    <div
    class="xo-input_wrap"
    :class="{'xo-disable': disable}"
    :style="{
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth
    }"
    @mouseenter="isMouseenter=true"
    @mouseleave="isMouseenter=false"
    > 
      <span class="icon-prefix" v-if="$scopedSlots.prefix">
        <slot name="prefix"></slot>
      </span>

      <input
      v-if="type !== 'textarea'"
      v-model="input"
      :type="isPassword ? 'text' : 'password'"
      :class="{
        'xo-disable': disable,
        focus: isFocus
      }"
      :style="{
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
        paddingLeft: $scopedSlots.prefix ? `30px` : `15px`,
        paddingRight: $scopedSlots.suffix ? `30px` : `15px`,
      }"
      :readonly="disable"
      :placeholder="placeholder"
      @focus="setFocus(true)"
      @blur="setFocus(false)">

      <textarea
      ref="textarea"
      v-model="input"
      :style="{
        height: autoSize ? textareaHeight : '',
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,}"
      v-else
      :maxLength="wordLimit ? maxLength : ''"
      :class="{focus: isFocus}"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      ></textarea>

      <span v-if="wordLimit">{{`${input.length}/${maxLength}`}}</span>

      <i
      v-show="input && clearable && isMouseenter"
      class="iconfont icon-reeor-fill"
      @click="clearSelect"></i>

      <i
      v-if="type === 'password' && isMouseenter"
      class="iconfont icon-browse"
      @click="isPassword = !isPassword"
      ></i>
      
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
    width: String,
    minWidth: String,
    maxWidth: String,
    disable: {
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
    maxLength: {
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
      inputWrapWidth: 0,
      textareaHeight: '',
      count: 0,
    };
  },
  watch: {
    input() {
      this.$emit('input', this.input);
      this.$emit('change', this.input);
      if(this.type === 'textarea') {
        this.resizeTextarea();
      }
    }
  },
  methods: {
    setFocus(val) {
      if(val) {
        this.$emit('focus', this.input);
      }else {
        this.$emit('blur', this.input);
      }
      if(!this.disable) {
        this.isFocus = val;
      }
    },
    clearSelect() {
      this.input = '';
      this.$emit('input', this.input);
    },
    resizeTextarea() {
      this.textareaHeight = calctetxtareaHeight(this.$refs.textarea, this.input);
    }
  },
  mounted() {
    if(this.type === 'password') {
      this.isPassword = true;
    }
  }
}
</script>
