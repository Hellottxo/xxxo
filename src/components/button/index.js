/**
 * @desc 按钮
 * @param {String} type 按钮类型
 */

import xoButton from './button.vue';

xoButton.install = function (Vue) {
  Vue.component(xoButton.name, xoButton);
};

export default xoButton;
