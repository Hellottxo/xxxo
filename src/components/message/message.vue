<template>
  <div
  class="xo-message xo-shadow"
  :style="{'top':`${offsetTop}px`}"
  >
    <div>
      <span class="xo-message_icon-wrap">
        <i
        :class="[
          type,
          `icon-${ICON_MAP[type]}-fill`
        ]"
        class="xo-message-icon iconfont icon-prompt-fill"></i>
      </span>
      <span>{{message}}</span>
    </div>
    <i
    class="xo-message-close iconfont icon-close"
    @click="close"
    v-if="showClose"></i>
  </div>
</template>


<script>
export default {
  name: 'xo-message',
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
        '': 'prompt',
        'primary': 'prompt',
        'wraining': 'prompt',
        'success': 'success',
        'info': 'prompt',
        'danger': 'reeor'
      }
    }
  },
  methods: {
    close() {
      const height = this.$el.offsetHeight;
      this.offsetTop = - height - this.offsetTop;
      setTimeout(() => {
        this.$el.parentNode.removeChild(this.$el);
      },500)
    },
    setCloseTimeout() {
      this.timeout = setTimeout(() => {
        this.close();
      },this.duration)
    }
  },
  mounted() {
    this.setCloseTimeout();
    setTimeout(() => {
      this.offsetTop = this.top;
    }, 0)
  }
}
</script>
