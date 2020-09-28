<template>
  <div>
    <code-card title="基础用法" :code="code1">
      <xo-tree :data="treeData" node-key="id"/>
    </code-card>
    <code-card title="默认展开" :code="code2">
      <xo-tree :data="treeData" node-key="id" :default-expand="['1', '2']"/>
    </code-card>
    <code-card title="默认选中" :code="code3">
      <xo-tree 
        :data="treeData"
        node-key="id" 
        :default-expand="['1', '1-2']" 
        default-selected="1-1" 
        @node-click="handleNodeClick"
      />
    </code-card>
  </div>
</template>

<script>
import codeCard from "./code-card";
import xoTree from "../../../src/components/tree";
import "../../../src/styles/index.less";
export default {
  data() {
    return {
      treeData: [
        {
          id: '1',
          label: "一级",
          children: [
            { id: '1-1', label: "二级" },
            {
              id: '1-2',
              label: "二级",
              children: [{ id: '1-2-1', label: "三级" }, { id: '1-2-2', label: "三级" }]
            }
          ]
        },
        {
          id: '2',
          label: "一级2",
          children: [
            { id: '2-1', label: "二级2" },
          ]
        }
      ],
      code1: `
      <template>
        <xo-tree :data="treeData" node-key="id"/>
      </template>

      <script>
      export default {
        data() {
          return {
            treeData: [
              {
                id: '1',
                label: "一级",
                children: [
                  { id: '1-1', label: "二级" },
                  {
                    id: '1-2',
                    label: "二级",
                    children: [{ id: '1-2-1', label: "三级" }, { id: '1-2-2', label: "三级" }]
                  }
                ]
              },
              {
                id: '2',
                label: "一级2",
                children: [
                  { id: '2-1', label: "二级2" },
                ]
              }
            ]
          }
        }
      }
      <\/script>
      `,
      code2: `
      <template>
        <xo-tree :data="treeData" node-key="id" :default-expand="['1', '2']"/>
      </template>

      <script>
      export default {
        data() {
          return {
            treeData: [
              {
                id: '1',
                label: "一级",
                children: [
                  { id: '1-1', label: "二级" },
                  {
                    id: '1-2',
                    label: "二级",
                    children: [{ id: '1-2-1', label: "三级" }, { id: '1-2-2', label: "三级" }]
                  }
                ]
              },
              {
                id: '2',
                label: "一级2",
                children: [
                  { id: '2-1', label: "二级2" },
                ]
              }
            ]
          }
        }
      }
      <\/script>
      `,
      code3: `
      <template>
        <xo-tree 
          :data="treeData"
          node-key="id" 
          :default-expand="['1', '1-2']" 
          default-selected="1-1" 
          @node-click="handleNodeClick"
        />
      </template>

      <script>
      export default {
        data() {
          return {
            treeData: [
              {
                id: '1',
                label: "一级",
                children: [
                  { id: '1-1', label: "二级" },
                  {
                    id: '1-2',
                    label: "二级",
                    children: [{ id: '1-2-1', label: "三级" }, { id: '1-2-2', label: "三级" }]
                  }
                ]
              },
              {
                id: '2',
                label: "一级2",
                children: [
                  { id: '2-1', label: "二级2" },
                ]
              }
            ]
          }
        },
        methods: {
          handleClick(node) {
            console.log(node);
          }
        }
      }
      <\/script>
      `
    };
  },
  components: {
    codeCard,
    xoTree
  },
  methods: {
    handleNodeClick(node) {
      console.log(`选择了节点: ${node.nodeKey} ${node.label}`);
    }
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
