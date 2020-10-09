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
        <slot name="prefix"/>
      </span>

      <input
        v-if="type !== 'textarea'"
        v-model="input"
        :type="isPassword ? 'password' : 'text'"
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
        @blur="setFocus(false)"
      >

      <textarea
        v-else
        ref="textarea"
        v-model="input"
        :style="{
        height: autoSize ? textareaHeight : '',
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,}"
        :maxLength="wordLimit ? maxLength : ''"
        :class="{focus: isFocus}"
        @focus="setFocus(true)"
        @blur="setFocus(false)"
      />

      <span class="word-limit" v-if="wordLimit">{{`${input.length}/${maxLength}`}}</span>

      <span @click="clearSelect" v-if="clearable">
        <xo-icon v-show="input && isMouseenter" mode="reeor-fill"/>
      </span>

      <span @click="isPassword = !isPassword" v-if="type === 'password'">
        <xo-icon v-show="isMouseenter" mode="browse"/>
      </span>

      <span class="icon-suffix" v-if="$scopedSlots.suffix">
        <slot name="suffix"/>
      </span>
    </div>
  </div>
</template>

<script>
import calctetxtareaHeight from './calctextareaHeight';
import xoIcon from '../icon';

export default {
  name: 'xo-input',
  model: {
    prop: 'inputValue',
    event: 'change',
  },
  components: {
    xoIcon,
  },
  props: {
    inputValue: {
      type: [String, Number],
      default: '',
    },
    width: [String, Number],
    minWidth: [String, Number],
    maxWidth: [String, Number],
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
      type: Boolean,
      default: false,
    },
    wordLimit: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      input: this.inputValue,
      isFocus: false,
      isMouseenter: false,
      isPassword: false,
      inputWrapWidth: 0,
      textareaHeight: '',
      count: 0,
    };
  },
  watch: {
    input(val) {
      this.$emit('input', val);
      this.$emit('change', val);
      if (this.type === 'textarea') {
        this.resizeTextarea();
      }
    },
    inputValue(val) {
      this.input = val;
    },
  },
  methods: {
    setFocus(val) {
      if (val) {
        this.$emit('focus', this.input);
      } else {
        this.$emit('blur', this.input);
      }
      if (!this.disable) {
        this.isFocus = val;
      }
    },
    clearSelect() {
      this.input = '';
      this.$emit('input', '');
    },
    resizeTextarea() {
      this.textareaHeight = calctetxtareaHeight(
        this.$refs.textarea,
        this.input,
      );
    },
  },
  mounted() {
    if (this.type === 'password') {
      this.isPassword = true;
    }
  },
};
</script>
