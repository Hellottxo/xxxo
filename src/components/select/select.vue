<template>
  <div class="xo-select">
    <div class="xo-select-input">
      <input type="text" v-model="select">
    </div>
    <div class="xo-select-option">

    </div>
  </div>
</template>

<script>
export default {
  name: "xoSelect",
  data() {
    return {
      select: ''
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
  }
  .xo-select-option {
    position: absolute;
    top: 45px;
    z-index: 222;
    height: 238px;
    width: 230px;
    border: 1px solid #e8eaec;
    border-radius: 7px;
    box-shadow: 0 0 10px #e8eaec;
    background-color: #FFF;
  }
}
</style>

