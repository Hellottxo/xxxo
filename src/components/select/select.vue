<template>
  <div class="xo-select">
    <div
    :style="{width: `${width}px`}"
    v-clickoutside="clickOutside">
      <div
      :style="{width: `${width}px`}"
      class="xo-select_wrap"
      :class="{isFocus: isFocus}"
      @click.stop="inputWrapClick"
      @mouseenter="isMouseenter=true"
      @mouseleave="isMouseenter=false"
      > 
        <div class="select-item_wrap" v-if="multiple && !tagline && input.length > 0">
          <template v-if="!collapse">
            <div v-for="(item, index) in input" :key="index">
              <span>{{item.label}}</span>
              <span class="select-item_del" @click.stop="delSelect(item.value)">x</span>
            </div>
          </template>
          <template v-else>
              <div>
                <span>{{input[0].label}}</span>
                <span class="select-item_del" @click.stop="delSelect(input[0].value)">x</span>
              </div>
              <div v-show="input.length > 1">{{`+${input.length-1}`}}</div>
          </template>
        </div>
        <div class="select-item_wrap" v-else-if="!multiple && !tagline && input.length > 0">{{input[0].label}}</div>
        <div class="select-placeholder" v-else>
          {{`${placeholder ? placeholder : '请选择'}`}}
        </div>
        <i
        class="select-icon-clear select-icon"
        v-if="clearable && input.length > 0 && !multiple && isMouseenter"
        @click.stop="delSelect()"
        ></i>
        <i
        v-else
        class="select-icon-arrow select-icon"
        :class="{transform: visible}"
        ></i>
      </div>
      <template>
        <xo-options
        v-model="input"
        v-show="visible"
        :multiple="multiple"
        :options="options"
        @click="optionsClick"></xo-options>
      </template>
    </div>
    
    <div class="select-item_wrap" v-if="tagline && multiple && input.length > 0">
      <template v-if="!collapse">
        <div v-for="(item, index) in input" :key="index">
          <span>{{item.label}}</span>
          <span class="select-item_del" @click.stop="delSelect(item.value)">x</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import xoInput from '@/components/input/index.js';
import xoOptions from './options';
import { constAnalysis } from '@/mixins/const-analysis.js';

export default {
  name: 'xo-select',
  data() {
    return {
      visible: false,
      input: [],
      isFocus: false,
      isMouseenter: false,
    }
  },
  mixins: [constAnalysis],
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    clearable: Boolean,
    width: {
      type: String,
      default: '200'
    },
    multiple: Boolean,
    filter: Boolean,
    collapse: Boolean,
    tagline: Boolean
  },
  components: {
    xoInput,
    xoOptions
  },
  watch: {
    input(val) {
      const arr = val.map(e => {return e.value});
      this.$emit('change', arr);
    }
  },
  methods: {
    setFocus(val) {
      this.isFocus = val;
    },
    inputWrapClick() {
      this.isFocus = true;
      this.visible = !this.visible;
    },
    optionsClick(val) {
      this.input = val;
      this.visible = this.multiple;
      this.isFocus = true;
    },
    clickOutside() {
      this.isFocus = false;
      this.visible = false;
    },
    delSelect(val) {
      this.isFocus = true;
      if(this.multiple) {
        const index = this.input.findIndex(e => e.value === val);
        this.input.splice(index, 1);
      }else {
        this.input = [];
      }
    }
  }
}
</script>

<style lang="less" scoped>
.xo-select {
  .xo-select_wrap {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    position: relative;
    padding: 0 20px 0 8px;
    display: flex;
    flex-wrap: wrap;
    line-height: 30px;
    min-height: 30px;
    cursor: pointer;
    .select-placeholder {
      line-height: 30px;
      display: flex;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 10px;
      color: #c3cbd6;
    }
    
    .select-icon {
      font-size: 10px;
      color: #9ea7b4;
      transition: all 0.2s ease-in-out;
      position: absolute;
      line-height: 30px;
      right: 8px;
      top: 0;
    }
    .select-icon-arrow {
      font-size: 10px;
      color: #9ea7b4;
      transition: all 0.2s ease-in-out;
      position: absolute;
      line-height: 30px;
      right: 8px;
      top: 0;
      transform: scaleY(0.6);
    }
    .select-icon-arrow::before {
      content: "\25BC";
    }
    .select-icon-clear {
      font-size: 10px;
      color: #9ea7b4;
      transition: all 0.2s ease-in-out;
      position: absolute;
      line-height: 30px;
      right: 10px;
    }
    .select-icon-clear::before {
      content: "\2716";
    }
    .select-down {
      top: 4px !important;
    }
    .transform {
      transform: rotate(180deg) scaleY(0.6);
    }
  }
  .select-item_wrap {
    display: flex;
    font-size: 10px;
    flex-wrap: wrap;
    &>div {
      display: inline-block;
      height: 22px;
      line-height: 22px;
      margin: 3px 4px 3px 0;
      padding: 0 8px;
      border: 1px solid #e3e8ee;
      border-radius: 3px;
      background: #f7f7f7;
      font-size: 12px;
      vertical-align: middle;
      opacity: 1;
      overflow: hidden;
      cursor: pointer;
    }
    .select-item_del {
      padding-left: 10px;
    }
  }
}
</style>

<style lang="less">
.isFocus {
  border-color: #409EFF !important;
}
</style>
