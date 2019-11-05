<template>
  <div
  class="xo-card"
  :class="{
    'xo-shadow': shadow === 'always',
    'xo-hover-shadow': shadow === 'hover'
  }">
    <div
    class="xo-card_header"
    v-if="$scopedSlots.header"
    :style="{'text-align': align}">
      <slot name="header"></slot>
    </div>
    <div
    class="xo-card_content"
    :style="{
      'max-height':isShowHidden ? '' : `${maxHeight}px`,
      'text-align':align
    }">
      <div ref="card">
        <slot></slot>
      </div>
    </div>
    <div
    class="xo-card_arrow"
    :class="{'xo-card_arrow-transform': isShowHidden}"
    @click="showHidden"
    v-if="isShowArrow">
      <i class="iconfont icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xo-card',
  data() {
    return {
      isShowHidden: false,
      isShowArrow: false
    }
  },
  props: {
    shadow: {
      type: String,
      default: ''
    },
    maxHeight: Number,
    align: {
      type: String,
      default: 'center'
    }
  },
  methods: {
    showHidden() {
      this.isShowHidden = !this.isShowHidden;
      this.$emit('show-visible')
    },
    showArrow() {
      if(!this.maxHeight) return false;
      return this.maxHeight < this.$refs.card.clientHeight;
    }
  },
  mounted() {
    this.isShowArrow = this.showArrow();
  }
}
</script>
