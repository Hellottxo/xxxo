/**
 * @desc 输入框
 * @param {Array} options 下拉列表
 * @param {Boolean} clearable 开启清空按钮
 * @param {String} placeholder
 * @param {String} width
 * @param {Boolean} multiple
 * @param {Boolean} collapse 多选tag合并展示
 * @param {Boolean} tagline 另起一行展示tag
 * @param {Boolean} disabled 禁用
 * @param {Boolean} filter 搜索
 * 自定义展示下拉内容：v-slot="scope"
 */

import xoSelect from './select.vue';

xoSelect.install = function (Vue) {
  Vue.component(xoSelect.name, xoSelect);
};

export default xoSelect;
