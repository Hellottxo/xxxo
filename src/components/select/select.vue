<template>
  <div class="xo-select">
    <div class="xo-select-input">
      <xoInput select @click="inputClick">
        <template v-slot:suffix>
          <i class="icon-triangle-up select-triangle" :class="{triangleDown: showOption}"></i>
        </template>
      </xoInput>
    </div>
    <div class="xo-select-option" v-show="showOption">
      <i class="icon-option"></i>
      <div class="xo-select-option_content"></div>
    </div>
  </div>
</template>

<script>
import xoInput from '../input/input';

export default {
  name: "xoSelect",
  components: {
    xoInput
  },
  data() {
    return {
      select: '',
      showOption: true
    }
  },
  methods: {
    inputClick() {
      this.showOption = !this.showOption;
    }
  }
}
</script>

<style lang="less" scoped>
.xo-select {
  width: 230px;
  position: relative;
  .xo-select-input {
    padding: 10px 0;
    input {
      -webkit-appearance:none;
      -moz-appearance: none;
      border: 1px solid #e8eaec;
      width: 230px;
      height: 22px;
      border-radius: 7px;
    }
    input:focus {
      outline: none;
      border-color: #409EFF;
    }
    .select-triangle {
      top: 8px;
    }
    .triangleDown {
      transform: rotate(180deg);
      top: 13px;
    }
  }
  .xo-select-option {
    position: absolute;
    top: 58px;
    z-index: 222;
    height: 238px;
    width: 230px;
    &>i {
      top: -11px;
      left: 25px;
      color: #e8eaec;
    }
    .xo-select-option_content {
      height: 238px;
      width: 230px;
      border: 1px solid #e8eaec;
      border-radius: 7px;
      box-shadow: 0 0 10px #e8eaec;
      background-color: #FFF;
    }
  }
}
</style>

