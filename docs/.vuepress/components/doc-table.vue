<template>
  <div>
    <code-card title="基础用法" :code="code1">
      <xo-table :columns="columns" :dataSource="dataSource"/>
      <br>
      <xo-table :columns="columns" :dataSource="dataSource" bordered/>
      <br>
      <xo-table :columns="columns" :dataSource="dataSource" bordered stripe/>
    </code-card>
    <code-card title="设置最大高度" :code="code2">
      <xo-table :columns="columns" :dataSource="dataSource" :maxHeight="150" bordered stripe/>
    </code-card>
  </div>
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
        { name: "困", age: 11, habbit: "跳" },
        { name: "困", age: 13, habbit: "rap" },
        { name: "困", age: 14, habbit: "打篮球" }
      ],
      code1: `
      <xo-table :columns="columns" :dataSource="dataSource"/>
      <br/>
      <xo-table :columns="columns" :dataSource="dataSource" bordered/>
      <br/>
      <xo-table :columns="columns" :dataSource="dataSource" bordered stripe/>
      
      <script>
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
              { name: "困", age: 11, habbit: "跳" },
              { name: "困", age: 13, habbit: "rap" },
              { name: "困", age: 14, habbit: "打篮球" }
            ],
          }
        }
      }
      <\/script>`,
      code2: `
      <xo-table
        :columns="columns"
        :dataSource="dataSource"
        :maxHeight="150"
        bordered
        stripe
      />

      <script>
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
              { name: "困", age: 11, habbit: "跳" },
              { name: "困", age: 13, habbit: "rap" },
              { name: "困", age: 14, habbit: "打篮球" }
            ],
          }
        }
      }
      <\/script>
      `
    };
  },
  components: {
    xoTable
  }
};
</script>