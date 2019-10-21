<template>
  <div class="xo-select">
    <div
    :style="{width: `${width}px`}"
    v-clickoutside="clickOutside">
      <div
      :style="{width: `${width}px`}"
      class="xo-select_wrap"
      :class="{
        isFocus: isFocus,
        'xo-disabled': disabled
      }"
      @click.stop="inputWrapClick"
      @mouseenter="isMouseenter=true"
      @mouseleave="isMouseenter=false"
      > 
        <template v-if="multiple && !tagline && input.length > 0">
          <template v-if="!collapse">
            <div
            class="select-item_tag"
            v-for="(item, index) in input"
            :key="index">
              <span>{{item.label}}</span>
              <span
              class="select-item_del"
              @click.stop="delSelect(item.value)">
                x
              </span>
            </div>
          </template>
          <template v-else>
              <div>
                <span>{{input[0].label}}</span>
                <span
                class="select-item_del"
                @click.stop="delSelect(input[0].value)">
                  x
                </span>
              </div>
              <div v-show="input.length > 1">{{`+${input.length-1}`}}</div>
          </template>
        </template>
        <div
        class="select-item_wrap"
        v-else-if="!multiple && !tagline && input.length > 0"
        >
          {{input[0].label}}
        </div>
        <div
        class="select-placeholder" v-if="input.length === 0 && !filter">
          {{`${placeholder ? placeholder : '请选择'}`}}
        </div>
        <template v-if="filter">
          <xo-input
          :width="'100%'"
          :min-width="'60px'"
          v-model="keyWords"
          :placeholder="input.length > 0 ? '' : (placeholder ? placeholder : '请选择')">
          </xo-input>
        </template>
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
        :options="selectOptions"
        @click="optionsClick">
          <template v-slot:item="scope" v-if="$scopedSlots.item">
            <slot name="item" :data="scope.data"></slot>
          </template>
        </xo-options>
      </template>
    </div>
    
    <div  v-if="tagline && multiple && input.length > 0">
      <template v-if="!collapse">
        <div
        class="select-item_tag"
        v-for="(item, index) in input"
        :key="index">
          <span>{{item.label}}</span>
          <span
          class="select-item_del"
          @click.stop="delSelect(item.value)">
            x
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import xoInput from '@/components/input/index.js';
import xoOptions from './options';
import { constAnalysis } from '@/mixins/const-analysis.js';
import { debounceThrottle } from '@/mixins/debounce-throttle.js';

export default {
  name: 'xo-select',
  data() {
    return {
      visible: false,
      input: [],
      isFocus: false,
      isMouseenter: false,
      keyWords: '',
      selectOptions: []
    }
  },
  mixins: [constAnalysis, debounceThrottle],
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
    collapse: Boolean,
    tagline: Boolean,
    disabled: Boolean,
    filter: Boolean
  },
  components: {
    xoInput,
    xoOptions
  },
  watch: {
    input(val) {
      const arr = val.map(e => {return e.value});
      this.$emit('change', arr);
    },
    keyWords(val) {
      this.debounce(this.filterMtheod,500);
    }
  },
  methods: {
    setFocus(val) {
      if(this.disabled) return;
      this.isFocus = val;
    },
    inputWrapClick() {
      if(this.disabled) return;
      this.isFocus = true;
      this.visible = !this.visible;
    },
    optionsClick(val) {
      if(this.disabled) return;
      this.input = val;
      this.visible = this.multiple;
      this.isFocus = true;
    },
    clickOutside() {
      if(this.disabled) return;
      this.isFocus = false;
      this.visible = false;
    },
    filterMtheod() {
      if(this.keyWords) {
        this.selectOptions = this.options.filter(e => e.label.search(this.keyWords) > -1);
      }else {
        this.selectOptions = this.options;
      }
    },
    delSelect(val) {
      if(this.disabled) return;
      this.isFocus = true;
      if(this.multiple) {
        const index = this.input.findIndex(e => e.value === val);
        this.input.splice(index, 1);
      }else {
        this.input = [];
      }
    }
  },
  created() {
    this.selectOptions = this.options;
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
    transition: all 0.3s;
    .select-placeholder {
      line-height: 30px;
      display: flex;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 10px;
      color: #c3cbd6;
    }
    .xo-input {
      display: flex;
      flex: 1;
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
  .select-item_tag {
    font-size: 10px;
    display: flex;
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
    .select-item_del {
      padding-left: 10px;
    }
  }
}
.isFocus {
  border-color: #409EFF !important;
}
</style>

<style lang="less">
.xo-select {
  .xo-input .xo-input_wrap input {
    border: none !important;
    padding: 0 !important;
  }
}
</style>
