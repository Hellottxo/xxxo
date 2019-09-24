/* eslint-disable */
import clickOutside from './clickoutside';

const install = function(Vue) {
  Vue.directive('clickoutside', clickOutside);
}

if (window.Vue) {
  window.clickOutside = clickOutside;
  Vue.use(install);
}

clickOutside.install = install;
export default clickOutside;
