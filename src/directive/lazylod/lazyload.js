/* eslint-disable */
export default {
    bind(el, binding) {
      const LAZYLOAD_DOM = el.querySelector(
        ".lazy-load"
      );
      LAZYLOAD_DOM.addEventListener("scroll", function() {
        const condition =
          this.scrollHeight - this.scrollTop <= this.clientHeight;
        if (condition) {
          binding.value();
        }
      });
    }
}