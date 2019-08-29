/* eslint-disable */

export const debounceThrottle = {
  data() {
    return {
      timeout: null,
      time: null
    }
  },
  methods: {
    /**
     * @desc 函数防抖
     * @param func 函数
     * @param wait 延迟执行毫秒数
     * @param timeout 定时器
     */
    debounce(func, wait) {
      const that = this;
      const args = arguments;
      if (that.timeout) clearTimeout(that.timeout);

      const callNow = !that.timeout;
      that.timeout = setTimeout(() => {
        that.timeout = null;
        if (!that.timeout && !callNow) func.apply(that, args);
      }, wait);
      if (callNow) func.apply(that, args);
    },
    /**
     * @desc 函数节流
     * @param func 函数
     * @param wait 延迟执行毫秒数
     * @param time 记录时间戳
     */
    throttle(func, wait) {
      const now = Date.now();
      const that = this;
      const args = arguments;
      if (now - that.time > wait) {
        that.time = now;
        func.apply(that, args);
      }
    }
  }
}