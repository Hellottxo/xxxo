/* eslint-disable */
export default {
  bind(el, binding) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    el._clickoutside = documentHandler;
    document.addEventListener('click', documentHandler)
  },
  unbind (el) {
    document.removeEventListener('click', el._clickoutside);
    delete el._clickoutside;
  }
}
