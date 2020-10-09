<template>
  <div>
    <code-card title="基础用法" :code="code1">
      <xo-input/>
    </code-card>
    <code-card title="密码输入框" :code="code2">
      <xo-input type="password" placeholder="请输入密码"/>
    </code-card>
    <code-card title="禁止输入的输入框" :code="code3">
      <xo-input disable placeholder="禁止输入"/>
    </code-card>
    <code-card title="可清空的输入框" :code="code4">
      <xo-input v-model="input" clearable placeholder="可清空"/>
    </code-card>
    <code-card title="带前缀和后缀的输入框" :code="code5">
      <xo-input>
        <template v-slot:suffix>
          <icon mode="search"/>
        </template>
      </xo-input>
      <xo-input>
        <template v-slot:prefix>
          <icon mode="calendar"/>
        </template>
      </xo-input>
    </code-card>
    <code-card title="文本框" :code="code6">
      <xo-input type="textarea" width="300" wordLimit :maxLength="30"/>
    </code-card>
    <code-card title="自动计算大小文本框" :code="code7">
      <xo-input type="textarea" width="300" autoSize/>
    </code-card>
  </div>
</template>

<script>
import codeCard from "./code-card";
import xoInput from "../../../src/components/input";
import Icon from "../../../src/components/icon";
import "../../../src/styles/index.less";
export default {
  data() {
    return {
      input: 123,
      code1: `
      <xo-input/>
      `,
      code2: `
      <xo-input type="password" placeholder="请输入密码"/>
      `,
      code3: `
      <xo-input disable placeholder="禁止输入"/>
      `,
      code4: `
      <xo-input v-model="input" clearable placeholder="可清空"/>
      `,
      code5: `
      <xo-input>
        <template v-slot:suffix>
          <icon mode="search" />
        </template>
      </xo-input>
      <xo-input>
        <template v-slot:prefix>
          <icon mode="calendar" />
        </template>
      </xo-input>
      `,
      code6: `
      <xo-input type="textarea" width="300" wordLimit :maxLength="30"/>
      `,
      code7: `
      <xo-input type="textarea" width="300" autoSize/>
      `
    };
  },
  components: {
    xoInput,
    codeCard,
    Icon
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
