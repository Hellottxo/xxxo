/**
 * @desc 日期选择器
 * @param {Boolean} clearable 清空按钮
 * @param {Boolean} markToday 默认标记今天
 */

import xoDatePicker from './datepicker.vue';

xoDatePicker.install = (Vue) => {
  Vue.component(xoDatePicker.name, xoDatePicker);
};

export default xoDatePicker;
