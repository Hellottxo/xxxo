/**
 * @desc 图标
 * @param {Boolean} mode
 */

import xoIcon from './icon.vue';

xoIcon.install = (Vue) => {
  Vue.component(xoIcon.name, xoIcon);
};

export default xoIcon;
