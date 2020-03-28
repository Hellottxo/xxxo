<template>
<div>
  <!-- <div>
    <xo-card :hiddenText="text" @visibleChange="showVisible">
      <template v-slot:header>基础卡片</template>
      <xo-card class="card" align="left" shadow="always">
        <template v-slot:header>Title</template>
        <ul v-for="item in 5">
          <li>今天是星期{{item}}</li>
        </ul>
      </xo-card>
      <template v-slot:footer>
        <div v-highlight>
          <pre>
          <code class="html">{{code1}}</code>
        </pre>
        </div>
      </template>
    </xo-card>
    <br/>
    <xo-card :hiddenText="text" @visibleChange="showVisible">
      <template v-slot:header>可展开/收起的卡片</template>
      <xo-card class="card" :max-height="30" align="left" shadow="hover">
        <div>
          <div>使用max-height属性固定卡片主体高度</div>
          <div>当卡片主体高度大于所设定max-height时，内容被收起，自动展示展开按钮</div>
          <div>本卡片所设置的max-height为30，超过30时，内容自动收起</div>
        </div>
      </xo-card>
      <template v-slot:footer>
        <div v-highlight>
          <pre>
          <code class="html">{{code2}}</code>
        </pre>
        </div>
      </template>
    </xo-card>
    <br/>
    <xo-card :hiddenText="text" @visibleChange="showVisible">
      <xo-card class="card" align="left">无任何阴影的简单卡片</xo-card>
      <xo-card class="card" align="left" shadow="hover">hover时显示阴影效果的卡片</xo-card>
      <xo-card class="card" align="left" shadow="always">有阴影效果的卡片</xo-card>
      <template v-slot:footer>
        <div v-highlight>
          <pre>
          <code class="html">{{code3}}</code>
        </pre>
        </div>
      </template>
    </xo-card>
  </div> -->
  <code-card title="基础卡片" :code="code1">
      <xo-card class="card" align="left" shadow="always">
        <template v-slot:header>Title</template>
        <ul v-for="item in 5">
          <li>今天是星期{{item}}</li>
        </ul>
      </xo-card>
  </code-card>
  <br/>
  <code-card title="可展开/收起的卡片" :code="code2">
      <xo-card class="card" :max-height="30" align="left" shadow="hover">
        <div>
          <div>使用max-height属性固定卡片主体高度</div>
          <div>当卡片主体高度大于所设定max-height时，内容被收起，自动展示展开按钮</div>
          <div>本卡片所设置的max-height为30，超过30时，内容自动收起</div>
        </div>
      </xo-card>
  </code-card>
  <br/>
  <code-card title="卡片阴影效果" :code="code3">
      <xo-card class="card" align="left">无任何阴影的简单卡片</xo-card>
      <xo-card class="card" align="left" shadow="hover">hover时显示阴影效果的卡片</xo-card>
      <xo-card class="card" align="left" shadow="always">有阴影效果的卡片</xo-card>
  </code-card>
</div>
</template>

<script>
import xoCard from "../../../src/components/card";
import "../../../src/styles/index.less";
import Vue from "vue";
import codeCard from './code-card'
export default {
  data() {
    return {
      text: "显示代码",
      code1: `
      <xo-card class="card" align="left" shadow="always">
        <template v-slot:header>Title</template>
        <ul v-for="item in 5">
          <li>今天是星期{{item}}</li>
        </ul>
      </xo-card>
       `,
      code2: `
      <xo-card class="card" :max-height="30" align="left" shadow="hover">
        <template v-slot:header>可展开/收起的卡片</template>
        <div>
          <div>使用max-height属性固定卡片主体高度</div>
          <div>当卡片主体高度大于所设定max-height时，内容被收起，自动展示展开按钮</div>
          <div>本卡片所设置的max-height为30，超过30时，内容自动收起</div>
        </div>
      </xo-card>
      `,
      code3: `
      <xo-card class="card" align="left">无任何阴影的简单卡片</xo-card>
      <xo-card class="card" align="left" shadow="hover">hover时显示阴影效果的卡片</xo-card>
      <xo-card class="card" align="left" shadow="always">有阴影效果的卡片</xo-card>
      `
    };
  },
  components: {
    codeCard,
    xoCard
  },
  methods: {
    showVisible(e) {
      this.text = e ? "隐藏代码" : "显示代码";
    }
  }
};
</script>

<style scoped>
.card {
  width: 500px;
  margin-bottom: 10px;
}
p,
pre {
  background: transparent;
  padding: 0;
  margin: 0;
}
pre code {
  color: #476582;
}
</style>
