/**
 * @desc 树形控件
 * @param {Array} data
 * @param {Array} defaultExpandNode 展开node的index，如[0,0,0]
 * @param {Boolean} defaultHighlightNode: 默认高亮行，需指定nodeKey
 * @param {Boolean} defaultAllExpand Boolean，设置此值时，设置default-expand-node无效
 */

import xoTree from './tree.vue';

xoTree.install = function (Vue) {
  Vue.component(xoTree.name, xoTree);
};

export default xoTree;
