<template>
  <div class="xo-message xo-shadow" :style="{'top':`${offsetTop}px`}">
    <div class="xo-message-container">
      <span class="xo-message_icon-wrap">
        <icon :mode="mode" :class="type"/>
      </span>
      <span>{{message}}</span>
    </div>
    <i class="xo-message-close iconfont icon-close" @click="close" v-if="showClose"></i>
  </div>
</template>


<script>
import icon from '../icon/index.js';

export default {
  name: 'xo-message',
  components: {
    icon,
  },
  data() {
    return {
      message: '',
      timeout: null,
      duration: 3000,
      showClose: false,
      top: -20,
      offsetTop: -20,
      type: '',
      ICON_MAP: {
        '': '',
        primary: 'prompt',
        warning: 'prompt',
        success: 'success',
        info: 'prompt',
        danger: 'reeor',
      },
    };
  },
  computed: {
    mode() {
      return `${this.ICON_MAP[this.type]}-fill`;
    },
  },
  methods: {
    close() {
      this.offsetTop = -this.$el.offsetHeight - this.$el.offsetTop;
      const that = this;
      setTimeout(() => {
        that.$el.parentNode.removeChild(that.$el);
        clearTimeout(that.timeout);
      }, 500);
    },
    setCloseTimeout() {
      this.timeout = setTimeout(() => {
        this.close();
      }, this.duration);
    },
  },
  mounted() {
    this.setCloseTimeout();
    setTimeout(() => {
      this.offsetTop = this.top;
    }, 0);
  },
};
</script>
