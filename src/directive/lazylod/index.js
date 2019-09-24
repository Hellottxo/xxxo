/* eslint-disable */
import lazyload from './lazyload';

const install = function(Vue) {
  Vue.directive('lazyload', lazyload);
}

if (window.Vue) {
  window.lazyload = lazyload;
  Vue.use(install);
}

lazyload.install = install;
export default lazyload;
