<template>
  <div class="home">
    <div>
      <xo-button @click="collapse=!collapse">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="primary">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="warning">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="success">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="text">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="info">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="danger">你好</xo-button>
    </div>
    <div>
      <xo-button @click="collapse=!collapse" circle icon="star"></xo-button>
      <xo-button @click="collapse=!collapse" circle icon="star" type="primary"></xo-button>
      <xo-button @click="collapse=!collapse" circle icon="star" type="warning"></xo-button>
      <xo-button @click="collapse=!collapse" circle icon="star" type="success"></xo-button>
      <xo-button @click="collapse=!collapse" circle icon="star" type="info"></xo-button>      
      <xo-button @click="collapse=!collapse" circle icon="star" type="danger"></xo-button>
    </div>
    <div>
      <xo-button @click="collapse=!collapse" round>你好</xo-button>
      <xo-button @click="collapse=!collapse" round type="primary">你好</xo-button>
      <xo-button @click="collapse=!collapse" round type="warning">你好</xo-button>
      <xo-button @click="collapse=!collapse" round type="success">你好</xo-button>
      <xo-button @click="collapse=!collapse" round type="info">你好</xo-button>
      <xo-button @click="collapse=!collapse" round type="danger">你好</xo-button>
    </div>
    <div>
      <xo-button @click="collapse=!collapse" disabled>你好</xo-button>
      <xo-button @click="collapse=!collapse" disabled type="primary">你好</xo-button>
      <xo-button @click="collapse=!collapse" disabled type="warning">你好</xo-button>
      <xo-button @click="collapse=!collapse" disabled type="success">你好</xo-button>
      <xo-button @click="collapse=!collapse" disabled type="info">你好</xo-button>
      <xo-button @click="collapse=!collapse" disabled type="danger">你好</xo-button>
    </div>
    <xo-tree :data="treeData" :node-key="'id'"></xo-tree>
  </div>
</template>

<script>
const TREE_DATA = [{
  id: 0,
  label: '一级',
  children: [
    {id: 1, label: '二级'}
  ]
}]

export default {
  name: 'home',
  data() {
    return {
      collapse: false,
      treeData: TREE_DATA
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
.home {
  padding: 10px 0;
  div {
    margin: 5px;
  }
}
</style>
