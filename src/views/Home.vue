<template>
  <div class="home">
    <xo-input type="textarea" autoSize></xo-input>
    <xo-select :options="options"></xo-select>
    <xo-table height=300 :columns="columns" :data="data" :expand="true" :highlight-row="true">
      <!-- <template v-slot="scope">
        <button>{{scope.data.name}}</button>
      </template> -->
      <template v-slot:append="scope">
        <div>
          姓名：{{scope.data.name}}
        </div>
      </template>
    </xo-table>
  </div>
</template>

<script>
// @ is an alias to /src
import xoTable from '../components/table/table';
import xoInput from '../components/input/input';
import xoSelect from '../components/select/select';

const columns = [
  {
    label: '姓名', key: 'name', width: 200, fixed: 'end',
  },
  {
    label: '年龄', key: 'age', width: 200, fixed: 'start',
  },
  { label: '详细', key: 'detail', width: 200 },
  { label: 'a', key: 'a', width: 200 },
  { label: 'b', key: 'b', width: 200 },
  { label: 'c', key: 'c', width: 200 },
  {
    label: '地址', key: 'address', width: 200, fixed: 'end',
  },
];

const data = [
  {
    name: '王小明',
    a: 1,
    b: 2,
    c: 3,
    age: 18,
    address: '北京市朝阳区芍药居',
    rowExpand: true,
    detail: '北京市朝阳区芍药居',
    children: [
      {
        name: '张小刚', a: 1, b: 2, c: 3, age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居',
      },
      {
        name: '李小红', a: 1, b: 2, c: 3, age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居',
      },
      {
        name: '周小伟', a: 1, b: 2, c: 3, age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居',
      },
    ],
  },
  {
    name: '张小刚', a: 1, b: 2, c: 3, age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居',
  },
  {
    name: '李小红', a: 1, b: 2, c: 3, age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居',
  },
  {
    name: '周小伟', a: 1, b: 2, c: 3, age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居',
  },
  {
    name: '张小刚', a: 1, b: 2, c: 3, age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居',
  },
  {
    name: '李小红', a: 1, b: 2, c: 3, age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居',
  },
  {
    name: '周小伟', a: 1, b: 2, c: 3, age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居',
  },
  {
    name: '张小刚', a: 1, b: 2, c: 3, age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居',
  },
  {
    name: '李小红', a: 1, b: 2, c: 3, age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居',
  },
  {
    name: '周小伟', a: 1, b: 2, c: 3, age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居',
  },
];

const options = [
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' },
];

export default {
  name: 'home',
  components: {
    xoTable,
    xoInput,
    xoSelect,
  },
  data() {
    return {
      columns,
      data,
      options,
    };
  },
};
</script>
