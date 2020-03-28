import clickOutside from './clickoutside';

const install = (Vue) => {
  Vue.directive('clickoutside', clickOutside);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install });
}

export default { install };
