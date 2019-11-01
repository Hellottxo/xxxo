/**
 * @desc 评分
 * @param {Number} num 评分等级
 * @param {Boolean} rate 是否展示评分
 * @param {String} mode 可选:good
 * @param {Boolean} readonly 只读
 * @param {Boolean} defaultStar 默认等级
 * @param {Boolean} baseNumber 评分底分
 * @param {Boolean} defaultStar 默认等级
 */

import xoRate from './rate.vue';

xoRate.install = function (Vue) {
  Vue.component(xoRate.name, xoRate);
};

export default xoRate;
