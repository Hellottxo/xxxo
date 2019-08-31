<template>
  <div class="xo-select">
    <div class="xo-select-input">
      <xoInput
      select
      @click="inputClick"
      placeholder="请选择"
      :selectInput="multiple ? '' : select">
        <template v-slot:suffix>
          <i class="icon-triangle-down select-triangle" :class="{triangleDown: showOption}"></i>
        </template>
      </xoInput>
    </div>
    <div class="xo-select-option" v-show="showOption">
      <i class="icon-option"></i>
      <div class="xo-select-option_content">
        <ul>
          <li
          v-for="(item, index) in options"
          :key="index"
          @mouseenter="hoverRow(index)"
          @mouseleave="hoverRow(index)"
          @click="optionClick(index)"
          :class="{
          hover: multiple ? 
          hover.indexOf(index) > -1 : hover == index
          }"
          >
            <span>{{item.label}}</span>
            <!-- <span v-else>
              <slot></slot>
            </span> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import xoInput from '../input/input';
import '@/common/icon.less';

export default {
  name: 'xoSelect',
  components: {
    xoInput,
  },
  data() {
    return {
      select: '',
      showOption: false,
      hover: -1,
    };
  },
  props: {
    options: Array,
    multiple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    inputClick(val) {
      if(this.hover != -1) {
        this.showOption = true;
      }else {
        this.showOption = val ? !this.showOption : val;
      }
    },
    optionClick(index) {
      if(this.multiple) {
        this.select = this.select == '' ? [] : this.select;
        const flag = this.select.indexOf(index);
        if(flag > -1) {
          this.select.splice(flag,1);
        }else {
          this.select.push(index);
        }
      }else {
        this.select = this.select == index ? -1 : index;
      }
    },
    hoverRow(index) {
      this.hover = this.hover == index ? -1 : index;
    }
  },
};
</script>

<style lang="less" scoped>
@fontColor: #515a6e;
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
      top: 13px;
    }
    .triangleDown {
      transform: rotate(180deg);
      top: 8px;
    }
  }
  .xo-select-option {
    position: absolute;
    top: 58px;
    z-index: 222;
    &>i {
      top: -11px;
      left: 25px;
      color: #e8eaec;
    }
    .xo-select-option_content {
      min-width: 180px;
      border: 1px solid #e8eaec;
      border-radius: 7px;
      box-shadow: 0 0 10px #e8eaec;
      background-color: #FFF;
      &>ul {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        margin: 0;
        &>li {
          color: @fontColor;
          text-align: left;
          padding: 0 18px;
          font-size: 14px;
          height: 30px;
          line-height: 30px;
        }
        .hover {
          background: #f5f7fa;
        }
      }
    }
  }
}
</style>
