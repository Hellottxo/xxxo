<template>
  <code-card title="基础用法">
    <xo-table :columns="columns" :dataSource="dataSource" :maxHeight="200" bordered stripe/>
  </code-card>
</template>

<script>
import xoTable from "../../../src/components/table";
import "../../../src/styles/index.less";
export default {
  data() {
    return {
      columns: [
        { key: "name", label: "姓名", width: 100 },
        { key: "age", label: "年龄", width: 100 },
        { key: "habbit", label: "爱好" }
      ],
      dataSource: [
        { name: "困", age: 10, habbit: "唱跳" },
        { name: "困", age: 11, habbit: "rap" },
        { name: "困", age: 12, habbit: "打篮球" },
        { name: "困", age: 12, habbit: "打篮球" },
        { name: "困", age: 12, habbit: "打篮球" },
        ]
    };
  },
  components: {
    xoTable
  }
};
</script>