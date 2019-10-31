/**
 * @desc 输入框
 * @param {Boolean} disable 禁用
 * @param {Boolean} clearable 开启清空按钮
 * @param {String} placeholder
 * @param {String} type password/textarea
 * @param {Boolean, Object} autoSize type为textarea时有效
 * @param {Boolean} wordLimit 动态展示输入长度，默认输入最长为10位
 * @param {String} maxLength 输入长度限制
 * @param {Function} focus
 * @param {Function} blur
 * @param {Function} change
 */

import xoInput from './input.vue';

xoInput.install = function (Vue) {
  Vue.component(xoInput.name, xoInput);
};

export default xoInput;
