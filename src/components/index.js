import xoTable from './table/index';
import xoInput from './input/index';
import xoSelect from './select/index';
import xoTree from './tree/index';
import xoRate from './rate/index';
import xoTimePicker from './timepicker/index';

const components = [
  xoTable,
  xoInput,
  xoSelect,
  xoTree,
  xoRate,
  xoTimePicker,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default install;
