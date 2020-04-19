<template>
  <div
    class="xo-card"
    :class="{
      'xo-shadow': shadow === 'always',
      'xo-hover-shadow': shadow === 'hover'
    }"
  >
    <div class="xo-card_header" v-if="$scopedSlots.header" :style="{'text-align': align}">
      <slot name="header"/>
    </div>
    <div
      class="xo-card_content"
      :style="{
        'max-height':isShowHidden ? '' : `${maxHeight}px`,
        'text-align':align
      }"
    >
      <div ref="card">
        <slot></slot>
      </div>
    </div>
    <div v-if="isShowArrow">
      <div v-if="$scopedSlots.footer && isShowHidden" class="xo-card_footer-content">
        <slot name="footer"/>
      </div>
      <div class="xo-card_arrow" @click="showHidden">
        <span v-if="hiddenText" class="xo-card_footer-text">{{hiddenText}}</span>
        <i
          :class="{
          'xo-card_arrow-transform': isShowHidden,
          'iconfont': true,
          'icon-arrow-down': true
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xo-card',
  data() {
    return {
      isShowHidden: false,
      isShowArrow: false,
    };
  },
  props: {
    shadow: {
      type: String,
      default: '',
    },
    maxHeight: Number,
    align: {
      type: String,
      default: 'center',
    },
    hiddenText: {
      type: String,
      default: '',
    },
  },
  methods: {
    showHidden() {
      this.isShowHidden = !this.isShowHidden;
      this.$emit('visible-change', this.isShowHidden);
    },
    showArrow() {
      if (!this.maxHeight && !this.$scopedSlots.footer) return false;
      return this.maxHeight
        ? this.maxHeight < this.$refs.card.clientHeight
        : true;
    },
  },
  mounted() {
    this.isShowArrow = this.showArrow();
  },
};
</script>
