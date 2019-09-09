<template>
  <div class="xo-options">
    <ul>
      <li
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :label="item.label"
      >{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
}
</script>

<style lang="less" scoped>
.xo-options {
  color: #606266;
  position: absolute;
  z-index: 2222;
  background-color: #fff;
  min-width: 180px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  ul {
    list-style: none;
    margin: 0;
    padding: 10px 15px;
    li {
      padding: 5px 10px;
      text-align: start;
    }
  }
  ul::before {
    content: '';
    width: 0;
    height: 0;
    border: 6px solid #dcdfe6;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: #dcdfe6;
    position: absolute;
    left: 15px;
    top: -13px;
  }
  ul::after {
    content: '';
    width: 0;
    height: 0;
    border: 6px solid #fff;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: #fff;
    position: absolute;
    top: -12px;
    left: 15px;
  }
}
</style>

