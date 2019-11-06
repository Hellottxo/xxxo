import xoTable from './components/table/index';
import xoInput from './components/input/index';
import xoSelect from './components/select/index';
import xoOptions from './components/options/index';
import xoTree from './components/tree/index';
import xoRate from './components/rate/index';
import xoTimePicker from './components/timepicker/index';
import xoDatePicker from './components/datepicker/index';
import xoMenu from './components/menu/index';
import xoMenuItem from './components/menu-item/index';
import xoSubMenu from './components/sub-menu/index';
import xoButton from './components/button/index';
import xoCard from './components/card/index';
import Message from './components/message/index';
import clickOutside from './directive/clickoutside/index';

const components = [
  xoTable,
  xoInput,
  xoSelect,
  xoOptions,
  xoTree,
  xoRate,
  xoTimePicker,
  xoDatePicker,
  xoMenu,
  xoMenuItem,
  xoSubMenu,
  xoButton,
  xoCard,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = Message;

  Vue.use(clickOutside);
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  xoTable,
  xoInput,
  xoSelect,
  xoOptions,
  xoTree,
  xoRate,
  xoTimePicker,
  xoDatePicker,
  xoMenu,
  xoMenuItem,
  xoSubMenu,
  xoButton,
  xoCard,
  Message,
  clickOutside,
};
