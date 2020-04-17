<template>
  <xo-card :hiddenText="text" @visible-change="showVisible" align="left">
    <template v-slot:header>
      <div class="title">{{title}}</div>
      <span>{{describle}}</span>
    </template>
    <slot></slot>
    <template v-slot:footer>
      <div v-highlight>
        <pre>
          <code class="html">{{code}}</code>
        </pre>
      </div>
    </template>
  </xo-card>
</template>

<script>
import xoCard from "../../../src/components/card";
import "../../../src/styles/index.less";
import Vue from "vue";
import highlight from "../../../src/directive/highlight/index.js";
Vue.use(highlight);
export default {
  name: "code-card",
  props: {
    code: String,
    title: String,
    describle: String
  },
  data() {
    return {
      text: "显示代码"
    };
  },
  components: {
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
.xo-card {
  margin: 20px;
}
.title {
  font-weight: bold;
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