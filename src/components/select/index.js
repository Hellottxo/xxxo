/**
 * @desc 输入框
 * @param {Array} options 下拉列表
 * @param {Boolean} clearable 开启清空按钮
 * @param {String} placeholder
 * @param {String} width
 */

import xoSelect from './select.vue';

xoSelect.install = function (Vue) {
  Vue.component(xoSelect.name, xoSelect);
};

export default xoSelect;
