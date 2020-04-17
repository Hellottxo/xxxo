<template>
  <div>
    <code-card title="基础用法" :code="code1">
      <xo-rate/>
      <br/>
      <div>可以通过 num 设置评分等级，如下设置为 6</div>
      <br/>
      <xo-rate :num="6"/>
    </code-card>
    <code-card title="支持多类icon" :code="code2">
      <xo-rate mode="good"/>
      <xo-rate mode="favorites"/>
      <xo-rate mode="smile"/>
      <xo-rate mode="Daytimemode"/>
      <xo-rate mode="hot"/>
    </code-card>
    <code-card title="设置初始值" :code="code3">
      <xo-rate :defaultStar="4"/>
    </code-card>
    <code-card title="只读" :code="code4">
      <xo-rate readonly :defaultStar="3"/>
    </code-card>
    <code-card title="展示结果" :code="code5">
      <xo-rate rate :defaultStar="4" :baseNumber="5" @click="this.click"/>
    </code-card>
    <code-card title="计算基础值" :code="code6">
      <div>默认初始值为5，可以通过baseNumber设置基础值</div>
      <br>
      <xo-rate rate :defaultStar="2"/>
      <xo-rate rate :defaultStar="2" :baseNumber="100"/>
      <xo-rate rate :defaultStar="2" :baseNumber="50"/>
    </code-card>
  </div>
</template>

<script>
import Vue from "vue";
import codeCard from "./code-card";
import xoRate from "../../../src/components/rate";
import "../../../src/styles/index.less";
export default {
  data() {
    return {
      code1: `
      <xo-rate/>
      <xo-rate :num="8"/>
      `,
      code2: `
      <xo-rate mode="good"/>
      <xo-rate mode="favorites"/>
      <xo-rate mode="smile"/>
      <xo-rate mode="Daytimemode"/>
      <xo-rate mode="hot"/>
      `,
      code3: `
      <xo-rate :defaultStar="4"/>
      `,
      code4: `
      <xo-rate readonly :defaultStar="3"/>
      `,
      code5: `
      添加click回调函数，可以获取当前结果值

      <template>
        <xo-rate rate :defaultStar="4" :baseNumber="5" @click="this.click"/>
      </template>
      <script>
      export default {
        methods: {
          click(rate) {
            console.log(rate);
          }
        }
      }
      <\/script>
      `,
      code6: `
      <xo-rate rate :defaultStar="2"/>
      <xo-rate rate :defaultStar="2" :baseNumber="100"/>
      <xo-rate rate :defaultStar="2" :baseNumber="50"/>
      `
    };
  },
  components: {
    codeCard,
    xoRate
  },
  methods: {
    click(rate) {
      console.log(`评分是${rate}`);
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
