/**
 * @desc 按钮
 * @param {String} type 按钮类型
 * @param {Boolean} disable 禁用按钮
 * @param {String} icon 图标
 * @param {Boolean} round 圆角按钮
 * @param {Boolean} circle 圆形按钮
 */

import xoButton from './button.vue';

xoButton.install = (Vue) => {
  Vue.component(xoButton.name, xoButton);
};

export default xoButton;
