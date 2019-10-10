/**
 * @desc 导航菜单组合项
 * @param {String} index 唯一标志
 */

import xoSubMenu from '../menu/sub-menu.vue';

xoSubMenu.install = function (Vue) {
  Vue.component(xoSubMenu.name, xoSubMenu);
};

export default xoSubMenu;
