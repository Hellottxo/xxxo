/**
 * @desc 树形控件
 * @param {Array} data
 * @param {String} childrenKey
 * @param {String} nodeKey
 * @param {String} defaultSelected 默认选中，必须设置nodeKey
 * @param {Array} defaultExpand 默认展开，必须设置nodeKey
 */

import xoTree from './tree.vue';

xoTree.install = function (Vue) {
  Vue.component(xoTree.name, xoTree);
};

export default xoTree;
