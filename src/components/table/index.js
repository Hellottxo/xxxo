/**
 * 表格
 * 默认外边框：border
 * 默认显示表格：showHeader
 * 表格内竖直线：verticalLine
 * 斑马纹：stripe，斑马纹颜色（需设置stripe有效）：stripeColor
 * 选中行高亮：highlightRow，选中事件：row-click(row, column)
 * 展开子行：data中对需展开的行增加children属性，在表头array中可指定展开箭头出现的列（默认第一列）：arrowPosition
 *         可自定义展开行的表头：childcolumns，默认为columns
 * 自定义展开内容：expand，同时对需展开的列，设置rowExpand
 * 固定列：在表头array中需固定的列指定fixed: end/start
 */

import xoTable from './table.vue';

xoTable.install = function (Vue) {
  Vue.component(xoTable.name, xoTable);
};

export default xoTable;
