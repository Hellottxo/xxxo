<template>
  <div class="home">
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>基础按钮</div>
      </template>
      <xo-button @click="collapse=!collapse">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="primary">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="warning">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="success">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="text">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="info">你好</xo-button>
      <xo-button @click="collapse=!collapse" type="danger">你好</xo-button>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>圆形按钮</div>
      </template>
      <xo-button @click="collapse=!collapse" circle icon="star"></xo-button>
      <xo-button @click="collapse=!collapse" circle icon="star" type="primary"></xo-button>
      <xo-button @click="collapse=!collapse" circle icon="star" type="warning"></xo-button>
      <xo-button @click="collapse=!collapse" circle icon="star" type="success"></xo-button>
      <xo-button @click="collapse=!collapse" circle icon="star" type="info"></xo-button>      
      <xo-button @click="collapse=!collapse" circle icon="star" type="danger"></xo-button>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>圆角按钮</div>
      </template>
      <xo-button @click="collapse=!collapse" round>你好</xo-button>
      <xo-button @click="collapse=!collapse" round type="primary">你好</xo-button>
      <xo-button @click="collapse=!collapse" round type="warning">你好</xo-button>
      <xo-button @click="collapse=!collapse" round type="success">你好</xo-button>
      <xo-button @click="collapse=!collapse" round type="info">你好</xo-button>
      <xo-button @click="collapse=!collapse" round type="danger">你好</xo-button>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>禁止按钮</div>
      </template>
      <xo-button @click="collapse=!collapse" disabled>你好</xo-button>
      <xo-button @click="collapse=!collapse" disabled type="primary">你好</xo-button>
      <xo-button @click="collapse=!collapse" disabled type="warning">你好</xo-button>
      <xo-button @click="collapse=!collapse" disabled type="success">你好</xo-button>
      <xo-button @click="collapse=!collapse" disabled type="info">你好</xo-button>
      <xo-button @click="collapse=!collapse" disabled type="danger">你好</xo-button>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>
          提示消息
        </div>
      </template>
      <xo-button @click="handleClick" >提示消息</xo-button>
      <xo-button @click="handleClick('primary')" type="primary">提示消息</xo-button>
      <xo-button @click="handleClick('warning')" type="warning">提示消息</xo-button>
      <xo-button @click="handleClick('success')" type="success">提示消息</xo-button>
      <xo-button @click="handleClick('info')" type="info">提示消息</xo-button>
      <xo-button @click="handleClick('danger')" type="danger">提示消息</xo-button>
    </xo-card>
    <xo-card shadow="hover">
      <template v-slot:header>
        <div>
          可以关闭的提示消息
        </div>
      </template>
      <xo-button @click="handleCloseClick" >可以关闭的消息</xo-button>
      <xo-button @click="handleCloseClick('primary')" type="primary">可以关闭的消息</xo-button>
      <xo-button @click="handleCloseClick('warning')" type="warning">可以关闭的消息</xo-button>
      <xo-button @click="handleCloseClick('success')" type="success">可以关闭的消息</xo-button>
      <xo-button @click="handleCloseClick('info')" type="info">可以关闭的消息</xo-button>
      <xo-button @click="handleCloseClick('danger')" type="danger">可以关闭的消息</xo-button>
    </xo-card>
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
import Vue from 'vue'
export default {
  name: 'home',
  data() {
    return {
      collapse: false,
      treeData: TREE_DATA
    };
  },
  methods: {
    handleClick(val) {
      if(val) {
        this.$message({
          type: val,
          message: '这是一个会停顿3s的消息'
        });
        return;
      }
      this.$message({message: '这是一个会停顿3s的消息'});
    },
    handleCloseClick(val) {
      if(val) {
        this.$message({
          type: val,
          showClose: true,
          message: '这是一个可以手动关闭的消息',
        });
        return;
      }
      this.$message({
        message: '这是一个可以手动关闭的消息',
        showClose: true
      })
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  padding: 10px 0;
  &>div {
    margin: 20px;
    .xo-button {
      margin: 0 5px;
    }
  }
}
</style>
