import xoTable from './table/index';
import xoInput from './input/index';
import xoSelect from './select/index';
import xoTree from './tree/index';
import xoRate from './rate/index';
import xoTimePicker from './timepicker/index';
import xoDatePicker from './datepicker/index';
import xoMenu from './menu/index';
import xoMenuItem from './menu-item/index';
import xoSubMenu from './sub-menu/index';
import xoButton from './button/index';

const components = [
  xoTable,
  xoInput,
  xoSelect,
  xoTree,
  xoRate,
  xoTimePicker,
  xoDatePicker,
  xoMenu,
  xoMenuItem,
  xoSubMenu,
  xoButton,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default install;
