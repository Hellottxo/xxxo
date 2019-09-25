/**
 * @desc 评分
 * @param {Number} num 评分等级
 * @param {Boolean} notice 是否展示评分
 * @param {String} mode 可选:smile/crown/piece,default: star
 */

import xoRate from './rate.vue';

xoRate.install = function (Vue) {
  Vue.component(xoRate.name, xoRate);
};

export default xoRate;
