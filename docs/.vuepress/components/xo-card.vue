<template>
  <div>
    <code-card title="基础卡片" :code="code1">
      <xo-card class="card" align="left" shadow="always">
        <template v-slot:header>
          <div class="cardTitle">通过slot设置title</div>
        </template>
        <ul v-for="item in 5">
          <li>今天是星期{{item}}</li>
        </ul>
      </xo-card>
    </code-card>
    <br />
    <code-card title="可展开/收起的卡片" :code="code2">
      <xo-card class="card" :max-height="30" align="left" shadow="hover">
        <div>
          <div>使用max-height属性固定卡片主体高度</div>
          <div>当卡片主体高度大于所设定max-height时，内容被收起，自动展示展开按钮</div>
          <div>本卡片所设置的max-height为30，超过30时，内容自动收起</div>
        </div>
      </xo-card>
    </code-card>
    <br />
    <code-card title="自定义隐藏内容" :code="code3">
      <xo-card
        class="card"
        align="left"
        shadow="hover"
        :hiddenText="text"
        @visibleChange="visibleChange"
      >
        通过hiddenText属性设置隐藏栏提示文字，通过slot自定义隐藏内容，visibleChange是展开收起时的回调事件
        <template v-slot:footer>自定义隐藏内容</template>
      </xo-card>
    </code-card>
    <br />
    <code-card title="卡片阴影效果" :code="code4">
      <div class="cardWrap">
        <xo-card class="inline-card">无阴影</xo-card>
        <xo-card class="inline-card" shadow="hover">hover时显示阴影</xo-card>
        <xo-card class="inline-card" shadow="always">一直有阴影</xo-card>
      </div>
    </code-card>
  </div>
</template>

<script>
import xoCard from "../../../src/components/card";
import "../../../src/styles/index.less";
import Vue from "vue";
import codeCard from "./code-card";
export default {
  data() {
    return {
      text: "展开",
      code1: `
      <template>
        <xo-card class="card" align="left" shadow="always">
          <template v-slot:header>
            <div class="cardTitle">通过slot设置title</div>
          </template>
          <ul v-for="item in 5">
            <li>今天是星期{{item}}</li>
          </ul>
        </xo-card>
      </template>

      <style>
        .cardTitle {
          color: #3eaf7c;
          cursor: pointer;
        }
      </style>
       `,
      code2: `
      <xo-card :max-height="30" align="left" shadow="hover">
        <template v-slot:header>可展开/收起的卡片</template>
        <div>
          <div>使用max-height属性固定卡片主体高度</div>
          <div>卡片主体高度大于max-height时，内容被收起，自动展示展开按钮</div>
          <div>本卡片所设置的max-height为30，超过30时，内容自动收起</div>
        </div>
      </xo-card>
      `,
      code3:`
      <template>
        <xo-card
          align="left"
          shadow="hover"
          :hiddenText="text"
          @visibleChange="visibleChange"
        >
          通过hiddenText属性设置隐藏栏提示文字，通过slot自定义隐藏内容，visibleChange是展开收起时的回调事件
          <template v-slot:footer>自定义隐藏内容</template>
        </xo-card>
      </template>

      <script>
      export default {
        data() {
          return {
            text: '展开'
          }
        },
        methods: {
          visibleChange(e) {
            this.text = e ? '收起' : '展开'
          }
        }
      }
      </\script>
      `,
      code4: `
      <xo-card>无任何阴影的简单卡片</xo-card>
      <xo-card shadow="hover">hover时显示阴影效果的卡片</xo-card>
      <xo-card shadow="always">有阴影效果的卡片</xo-card>
      `
    };
  },
  components: {
    codeCard,
    xoCard
  },
  methods: {
    visibleChange(e) {
      this.text = e ? "收起" : "展开";
    }
  }
};
</script>

<style scoped>
.card {
  width: 500px;
  margin-bottom: 10px;
}
.cardWrap {
  display: flex;
  justify-content: space-around;
}
.inline-card {
  width: 100%;
  margin: 0 10px;
}
.cardTitle {
  color: #3eaf7c;
  cursor: pointer;
}
</style>
