<template>
  <div class="xo-options">
    <ul>
      <li
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :label="item.label"
      @click="getli(item)"
      :class="{
        focus: multiple ? select.indexOf(item) > -1 : select.value === item.value,
        multiple: multiple && select.indexOf(item) > -1
      }"
      >
      <span>{{item.label}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: this.input
    }
  },
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    multiple: Boolean,
    input: {
      type: [Object, Array],
      default: () => {
        return [];
      }
    }
  },
  methods: {
    getli(val) {
      if(this.multiple) {
        const flag = this.select.indexOf(val);
        if(flag > -1) {
          this.select.splice(flag, 1);
        }else {
          this.select.push(val);
        }
      }else {
        this.select = val;
      }
      this.$emit('click', this.select);
      this.$emit('input', this.select);
    }
  }
}
</script>

<style lang="less" scoped>
.xo-options {
  color: #606266;
  font-size: 13px;
  margin-top: 10px;
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
    padding: 10px 0;
    li {
      padding: 0 15px;
      height: 30px;
      line-height: 30px;
      text-align: start;
      cursor: pointer;
    }
    li:hover {
      background-color: #f5f7fa;
    }
    .focus {
      background-color: #f5f7fa;
      color: #409eff;
    }
    .multiple::after {
      display: inline-block;
      font-family: Ionicons;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      float: right;
      font-size: 12px;
      content: '\2714';
      color: rgba(51,153,255,.9);
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
    top: -11px;
    left: 15px;
  }
}
</style>

