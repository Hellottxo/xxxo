/**
 * @desc 导航
 * @param {String} defaultActive 默认展开
 * @param {String} mode 导航模式
 * @param {Boolean} collapse
 */

import xoMenu from './menu.vue';

xoMenu.install = (Vue) => {
  Vue.component(xoMenu.name, xoMenu);
};

export default xoMenu;
