<template>
  <div class="home">
    <xo-table :columns="columns" :data="data" :expand="true" :highlight-row="true">
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
import xoTable from "../components/table/table";

const columns = [
  { label: "姓名", key: "name"},
  { label: "年龄", key: "age" },
  { label: "详细", key: "detail"},
  { label: "地址", key: "address", fixed: "right"}
];

const data = [
  { name: '王小明', age: 18, address: '北京市朝阳区芍药居', rowExpand:true,detail: '北京市朝阳区芍药居', children: [
    { name: '张小刚', age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居'},
  { name: '李小红', age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居' }, 
  { name: '周小伟', age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居'}
  ]},
  { name: '张小刚', age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居'},
  { name: '李小红', age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居' }, 
  { name: '周小伟', age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居'}
]

export default {
  name: 'home',
  components: {
    xoTable,
  },
  data() {
    return {
      columns,
      data,
    };
  },
};
</script>
