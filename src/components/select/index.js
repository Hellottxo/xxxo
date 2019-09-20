/**
 * 输入框
 * disabled: 禁用
 * clearable: 开启清空按钮
 * placeholder
 * type: password/textarea/text, 默认为text
 * autoSize: type为textarea时有效
 * wordlimit: 动态展示输入长度，默认输入最长为10位
 * maxlength: 输入长度限制
 */

import xoSelect from './select.vue';

xoSelect.install = function (Vue) {
  Vue.component(xoSelect.name, xoSelect);
};

export default xoSelect;
