<template>
  <code-card title="基础用法" :code="code">
    <xo-button @click="visibleChg" class="btn" type="primary">{{text}}</xo-button>
    <xo-collapse-transition>
      <div class="block" v-show="visible"/>
    </xo-collapse-transition>
  </code-card>
</template>

<script>
import xoButton from "../../../src/components/button";
import xoCollapseTransition from "../../../src/components/transition";
import "../../../src/styles/index.less";

export default {
  data() {
    return {
      visible: false,
      text: '展开',
      code: `<template>
  <code-card title="基础用法">
    <xo-button @click="visibleChg" class="btn" type="primary">{{text}}</xo-button>
    <xo-collapse-transition>
      <div class="block" v-show="visible"/>
    </xo-collapse-transition>
  </code-card>
</template>

<script>
    export default {
    data: () => ({
      visible: false,
      text: '展开',
    }),
    methods: {
      visibleChg() {
        this.visible = !this.visible;
        this.text = this.visible ? '收缩' : '展开';
      }
    }
  }
<\/script>

<style scoped>
.btn {
  margin: 10px 0;
}
.block {
  background: pink;
  height: 200px;
  width: 200px;
  border-radius: 4px;
}
</style>`
    };
  },
  components: {
    xoCollapseTransition,
    xoButton
  },
  methods: {
    visibleChg() {
      this.visible = !this.visible;
      this.text = this.visible ? '收缩' : '展开';
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 10px 0;
}
.block {
  background: pink;
  height: 200px;
  width: 200px;
  border-radius: 4px;
}
</style>

