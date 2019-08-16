<template>
  <div class="home">
    <xo-table :columns="columns" :data="data"></xo-table>
  </div>
</template>

<script>
// @ is an alias to /src
import xoTable from "../components/xo-table/xo-table";

const columns = [
  { label: "姓名", key: "name", width: 300 },
  { label: "年龄", key: "age" },
  { label: "详细", key: "detail"},
  { label: "地址", key: "address", width: 300}
];

const data = [
  { name: '王小明', age: 18, address: '北京市朝阳区芍药居', detail: '北京市朝阳区芍药居' },
  { name: '张小刚', age: 25, address: '北京市海淀区西二旗', detail: '北京市朝阳区芍药居'}, 
  { name: '李小红', age: 30, address: '上海市浦东新区世纪大道', detail: '北京市朝阳区芍药居' }, 
  { name: '周小伟', age: 26, address: '深圳市南山区深南大道', detail: '北京市朝阳区芍药居' }
]

export default {
  name: "home",
  components: {
    xoTable
  },
  data() {
    return {
      columns,
      data
    };
  }
};
</script>
