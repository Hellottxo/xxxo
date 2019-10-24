/**
 * @desc 卡片
 * @param {String} shadow 卡片阴影
 */

import xoCard from './card.vue';

xoCard.install = function (Vue) {
  Vue.component(xoCard.name, xoCard);
};

export default xoCard;
