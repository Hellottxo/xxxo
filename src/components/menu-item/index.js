/**
 * @desc 导航菜单子项
 * @param {String} index 唯一标志
 * @param {Boolean} disabled 禁用
 */

import xoMenuItem from '../menu/menu-item.vue';

xoMenuItem.install = (Vue) => {
  Vue.component(xoMenuItem.name, xoMenuItem);
};

export default xoMenuItem;
