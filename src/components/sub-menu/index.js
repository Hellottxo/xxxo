/**
 * @desc 导航菜单组合项
 * @param {String} index 唯一标志
 * @param {Boolean} disabled 是否禁用
 */

import xoSubMenu from '../menu/sub-menu.vue';

xoSubMenu.install = (Vue) => {
  Vue.component(xoSubMenu.name, xoSubMenu);
};

export default xoSubMenu;
