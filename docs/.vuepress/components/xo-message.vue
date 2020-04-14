<template>
  <div>
    <code-card title="基础用法" :code="code1">
      <div class="text">不同类型的提示消息</div>
      <div class="btnWrap">
        <xo-button @click="handleClick('normal')">提示消息</xo-button>
        <xo-button @click="handleClick('primary', 'primary')" type="primary">提示消息</xo-button>
        <xo-button @click="handleClick('warning', 'warning')" type="warning">提示消息</xo-button>
        <xo-button @click="handleClick('success', 'success')" type="success">提示消息</xo-button>
        <xo-button @click="handleClick('info', 'info')" type="info">提示消息</xo-button>
        <xo-button @click="handleClick('danger', 'danger')" type="danger">提示消息</xo-button>
      </div>
      <div class="text">可操作的提示消息</div>
      <div class="btnWrap">
        <xo-button @click="handleClick('可关闭消息','primary', true)" type="primary">可关闭消息</xo-button>
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
      </div>
    </code-card>
  </div>
</template>

<script>
import Vue from "vue";
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

        <xo-button @click="handleCloseClick">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('primary')" type="primary">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('warning')" type="warning">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('success')" type="success">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('info')" type="info">可关闭消息</xo-button>
        <xo-button @click="handleCloseClick('danger')" type="danger">可关闭消息</xo-button>
      </template>

      <script>
        export default {
          methods: {
            handleClick(val) {
              this.$message({ type: val, message: "这是一个会停顿3s的消息" });
            },
            handleCloseClick(val) {
              this.$message({
                type: val,
                showClose: true,
                message: "这是一个可以手动关闭的消息"
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
