<template>
  <div>
    <code-card title="基础用法" :code="code1">
      <xo-button>default</xo-button>
      <xo-button type="primary">primary</xo-button>
      <xo-button type="warning">warning</xo-button>
      <xo-button type="success">success</xo-button>
      <xo-button type="text">text</xo-button>
      <xo-button type="info">info</xo-button>
      <xo-button type="danger">danger</xo-button>
    </code-card>
  </div>
</template>

<script>
import Vue from "vue";
import codeCard from "./code-card";
import xoButton from "../../../src/components/button";
import "../../../src/styles/index.less";
export default {
  data() {
    return {
      code1: `
      <xo-button>default</xo-button>
      <xo-button type="primary">primary</xo-button>
      <xo-button type="warning">warning</xo-button>
      <xo-button type="success">success</xo-button>
      <xo-button type="text">text</xo-button>
      <xo-button type="info">info</xo-button>
      <xo-button type="danger">danger</xo-button>
      `
    };
  },
  components: {
    xoButton,
    codeCard
  }
};
</script>
