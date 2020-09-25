<template>
  <div>
    <code-card title="不同类型按钮" :code="code1">
      <xo-button>default</xo-button>
      <xo-button type="primary">primary</xo-button>
      <xo-button type="warning">warning</xo-button>
      <xo-button type="success">success</xo-button>
      <xo-button type="text">text</xo-button>
      <xo-button type="info">info</xo-button>
      <xo-button type="danger">danger</xo-button>
    </code-card>
    <code-card title="不同形状按钮" :code="code2">
      <xo-button type="primary">danger</xo-button>
      <xo-button round type="primary">default</xo-button>
      <xo-button circle icon="VIP" type="primary"></xo-button>
    </code-card>
    <code-card title="禁用按钮" :code="code3">
      <xo-button disabled>default</xo-button>
      <xo-button disabled type="primary">primary</xo-button>
      <xo-button disabled type="warning">warning</xo-button>
      <xo-button disabled type="success">success</xo-button>
      <xo-button disabled type="info">info</xo-button>
      <xo-button disabled type="danger">danger</xo-button>
    </code-card>
    <code-card title="带icon的按钮" :code="code4">
      <xo-button icon="search">search</xo-button>
      <xo-button icon="clock" type="primary">clock</xo-button>
      <xo-button icon="cry" type="warning">cry</xo-button>
      <xo-button icon="collection" type="success">collection</xo-button>
      <xo-button icon="hot" type="info">hot</xo-button>
      <xo-button icon="VIP" type="danger">VIP</xo-button>
    </code-card>
  </div>
</template>

<script>
import Vue from "vue";
import codeCard from "./code-card";
import xoButton from "../../../src/components/button";
import "../../../src/styles/index.less";
export default {
  name: 'doc-button',
  data() {
    return {
      code1: `
      正常按钮
      <xo-button>default</xo-button>
      <xo-button type="primary">primary</xo-button>
      <xo-button type="warning">warning</xo-button>
      <xo-button type="success">success</xo-button>
      <xo-button type="text">text</xo-button>
      <xo-button type="info">info</xo-button>
      <xo-button type="danger">danger</xo-button>
      `,
      code2: `
      <xo-button type="primary">danger</xo-button>
      <xo-button round type="primary">default</xo-button>
      <xo-button circle icon="VIP" type="primary"></xo-button>
      `,
      code3: `
      <xo-button disabled>default</xo-button>
      <xo-button disabled type="primary">primary</xo-button>
      <xo-button disabled type="warning">warning</xo-button>
      <xo-button disabled type="success">success</xo-button>
      <xo-button disabled type="info">info</xo-button>
      <xo-button disabled type="danger">danger</xo-button>
      `,
      code4: `
      <xo-button icon="search">search</xo-button>
      <xo-button icon="clock" type="primary">clock</xo-button>
      <xo-button icon="cry" type="warning">cry</xo-button>
      <xo-button icon="collection" type="success">collection</xo-button>
      <xo-button icon="hot" type="info">hot</xo-button>
      <xo-button icon="VIP" type="danger">VIP</xo-button>
      `
    };
  },
  components: {
    xoButton,
    codeCard
  }
};
</script>

<style scoped>
.btnWrap {
  margin: 10px 0;
}
.text {
  font-size: 14px;
  margin: 25px 10px;
}
</style>
