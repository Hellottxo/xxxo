<template>
  <div>
    <code-card title="不同类型的提示消息" :code="code1">
      <div class="btnWrap">
        <xo-button @click="handleClick('normal')">提示消息</xo-button>
        <xo-button @click="handleClick('primary', 'primary')" type="primary">提示消息</xo-button>
        <xo-button @click="handleClick('warning', 'warning')" type="warning">提示消息</xo-button>
        <xo-button @click="handleClick('success', 'success')" type="success">提示消息</xo-button>
        <xo-button @click="handleClick('info', 'info')" type="info">提示消息</xo-button>
        <xo-button @click="handleClick('danger', 'danger')" type="danger">提示消息</xo-button>
      </div>
    </code-card>
    <code-card title="可操作的提示消息" :code="code2">
      <div class="btnWrap">
        <xo-button @click="handleClick('可关闭消息','primary', true)" type="primary">可关闭消息</xo-button>
        <xo-button
          @click="handleClick('延迟5s关闭的消息', 'primary', false, 5000 )"
          type="primary"
        >
          延迟5s关闭的消息
        </xo-button>
      </div>
    </code-card>
  </div>
</template>

<script>
import Vue from 'vue';
import codeCard from "./code-card";
import xoButton from "../../../src/components/button";
import Message from "../../../src/components/message";
import "../../../src/styles/index.less";
Vue.prototype.$message = Message;
export default {
  data() {
    return {
      code1: `
      <template>
        <xo-button @click="handleClick">提示消息</xo-button>
        <xo-button @click="handleClick('primary')" type="primary">提示消息</xo-button>
        <xo-button @click="handleClick('warning')" type="warning">提示消息</xo-button>
        <xo-button @click="handleClick('success')" type="success">提示消息</xo-button>
        <xo-button @click="handleClick('info')" type="info">提示消息</xo-button>
        <xo-button @click="handleClick('danger')" type="danger">提示消息</xo-button>
      </template>

      <script>
      export default {
        methods: {
          handleClick(val) {
            this.$message({ type: val, message: val || 'normal' });
          }
        }
      }
      <\/script>
      `,
      code2: `
      <xo-button
        @click="handleClick('可关闭消息','primary', true)"
        type="primary"
      >
        可关闭消息
      </xo-button>
      <xo-button
        @click="handleClick('延迟5s关闭的消息', 'primary', false, 5000 )"
        type="primary"
      >
        延迟5s关闭的消息
      </xo-button>
      <xo-button
        @click="handleClick('距离顶部300px的消息', 'primary', false, 3000, 300)"
        type="primary"
      >
        距离顶部300px的消息
      </xo-button>

      <script>
      export default {
        methods: {
          handleClick(message, type, showClose, duration) {
            this.$message({
              message,
              type,
              showClose,
              duration,
            });
          }
        }
      }
      <\/script>
      `
    };
  },
  components: {
    codeCard,
    xoButton
  },
  methods: {
    handleClick(message, type, showClose, duration, top) {
      this.$message({
        message,
        type,
        showClose,
        duration,
        top
      });
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
