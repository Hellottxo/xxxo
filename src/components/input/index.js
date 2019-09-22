/**
 * @desc 输入框
 * @param {Boolean} disabled 禁用
 * @param {Boolean} clearable 开启清空按钮
 * @param {String} placeholder
 * @param {String} type password/textarea/text, 默认为text
 * @param {Boolean, Object} autoSize type为textarea时有效
 * @param {Boolean} wordlimit 动态展示输入长度，默认输入最长为10位
 * @param {String} maxlength 输入长度限制
 */

import xoInput from './input.vue';

xoInput.install = function (Vue) {
  Vue.component(xoInput.name, xoInput);
};

export default xoInput;
