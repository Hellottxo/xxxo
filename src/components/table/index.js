/**
 * 表格
 * 外边框：border
 * 表格内竖直线：verticalLine
 * 斑马纹：stripe，斑马纹颜色（需设置stripe有效）：stripeColor
 * 选中行高亮：highlightRow，选中事件：row-click(row, column)
 * 展开子行：data中对需展开的行增加children属性，可指定展开箭头出现的列（默认第一列）：arrowPosition
 *         可自定义展开行的表头：childcolumns，默认为columns
 * 自定义展开内容：expand，同时对需展开的列，设置rowExpand
 */

import xoTable from './table.vue';

export default xoTable;
