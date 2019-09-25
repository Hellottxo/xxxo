<template>
  <div class="xo-options">
    <ul>
      <template v-if="options.length > 0">
        <li
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        :label="item.label"
        @click="getli(item)"
        :class="{
          focus: select.indexOf(item) > -1,
          multiple: multiple && select.indexOf(item) > -1,
          disabled: item.disabled,
          custom: $scopedSlots.item && multiple
        }"
        >
        <template v-if="$scopedSlots.item">
          <slot name="item" :data="item"></slot>
        </template>
        <span v-else>{{item.label}}</span>
        </li>
      </template>
      <template v-else>
        <li>暂无数据</li>
      </template>
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
      type: [Array],
      default: () => {
        return [];
      }
    }
  },
  methods: {
    getli(val) {
      if(!val.disabled) {
        if(this.multiple) {
          const flag = this.select.indexOf(val);
          if(flag > -1) {
            this.select.splice(flag, 1);
          }else {
            this.select.push(val);
          }
        }else {
          this.select = [];
          this.select.push(val);
        }
        this.$emit('click', this.select);
        this.$emit('input', this.select);
      }
      
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
  min-width: 200px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  ul {
    list-style: none;
    margin: 0;
    padding: 10px 0;
    max-height: 250px;
    overflow: auto;
    li {
      padding: 0 15px;
      height: 30px;
      line-height: 30px;
      text-align: start;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      position: relative;
    }
    li:hover {
      background-color: #f5f7fa;
    }
    .disabled {
      cursor: not-allowed;
      span {
        color: #c3cbd6 !important;
      }
    }
    .custom {
      padding: 0 25px 0 15px;
    }
    .custom::after {
      position: absolute;
      right: 8px;
    }
    .custom span:nth-child(2) {
      color: #9ea7b4;
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
  ul::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  ul::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #e8eaec;
  }
  ul::-webkit-scrollbar-track {
    background: #fff;
  }
}
</style>

