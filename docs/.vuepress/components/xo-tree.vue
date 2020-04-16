<template>
  <div>
    <code-card title="基础用法" :code="code1">
      <xo-tree
        :data="treeData"
        node-key="id"
        default-selected="6"
        :default-expand="[0, 3]"
      />
    </code-card>
  </div>
</template>

<script>
import Vue from "vue";
import codeCard from "./code-card";
import xoTree from "../../../src/components/tree";
import "../../../src/styles/index.less";
export default {
  data() {
    return {
      treeData: [
        {
          id: 0,
          label: "一级1",
          children: [
            { id: 1, label: "二级" },
            { id: 2, label: "二级" },
            {
              id: 3,
              label: "二级",
              children: [{ id: 4, label: "三级" }, { id: 6, label: "三级" }]
            }
          ]
        },
        {
          id: 5,
          label: "一级2",
          children: [
            { id: 7, label: "二级" },
            { id: 8, label: "二级" },
            {
              id: 9,
              label: "二级",
              children: [{ id: 10, label: "三级" }, { id: 11, label: "三级" }]
            }
          ]
        }
      ],
      code1: `
      `
    };
  },
  components: {
    codeCard,
    xoTree
  },
  methods: {

  }
};
</script>

<style scoped>
.btnWrap > div {
  margin: 10px 0;
}
.text {
  font-size: 14px;
  margin: 25px 10px;
}
</style>
