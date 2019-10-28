<template>
  <div
  class="xo-message xo-shadow"
  :style="{'top':`${offsetTop}px`}"
  >
    <div>
      <span class="xo-message_icon-wrap">
        <i
        :class="type"
        class="xo-message-icon icon icon-notice"></i>
      </span>
      <span>{{message}}</span>
    </div>
    <i
    class="xo-message-close icon icon-close"
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
      type: ''
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
