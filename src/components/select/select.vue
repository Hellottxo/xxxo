<template>
  <div class="xo-select" ref="select">
    <div
    :style="{width: `${width}px`}"
    v-clickoutside="clickOutside">
      <div
      :style="{width: `${width}px`}"
      class="xo-select_wrap"
      :class="{
        isFocus: isFocus,
        'xo-disable': disabled
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
                <i class="iconfont icon-reeor-fill"></i>
              </span>
            </div>
          </template>
          <template v-else>
              <div class="select-item_tag">
                <span>{{input[0].label}}</span>
                <span
                class="select-item_del"
                @click.stop="delSelect(input[0].value)">
                  <i class="iconfont icon-reeor-fill"></i>
                </span>
              </div>
              <div class="select-item_tag" v-show="input.length > 1">{{`+${input.length-1}`}}</div>
          </template>
        </template>
        <div
        class="select-item_wrap"
        v-else-if="!multiple && !tagline && input.length > 0"
        >
          {{input[0].label}}
        </div>
        <div
        class="select-placeholder"
        v-if="input.length === 0 && !filter">
          {{`${placeholder ? placeholder : '请选择'}`}}
        </div>
        <template v-if="filter">
          <xo-input
          :width="'100%'"
          :min-width="'40px'"
          v-model="keyWords"
          @change="change"
          :placeholder="input.length > 0 ? '' : (placeholder ? placeholder : '请选择')">
          </xo-input>
        </template>
        <i
        class="iconfont icon-reeor-fill"
        v-if="clearable && input.length > 0 && !multiple && isMouseenter"
        @click.stop="delSelect()"
        ></i>
        <i
        v-else
        class="iconfont icon-arrow-down"
        :class="{transform: visible}"
        ></i>
      </div>
    </div>
    
    <div
    class="xo-options_wrap"
    ref="options"
    v-show="visible">
      <ul class="options-arrow" v-if="optionsVisible">
        <slot :filter="filter"></slot>
      </ul>
      <div class="options-arrow options-nodata" v-else>暂无数据</div>
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
            <i class="iconfont icon-reeor-fill"></i>
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import xoInput from '@/components/input/index.js';
import { constAnalysis } from '@/mixins/const-analysis.js';
import { debounce } from '@/utils/debounce-throttle.js';

export default {
  name: 'xo-select',
  data() {
    return {
      visible: false,
      input: [],
      isFocus: false,
      isMouseenter: false,
      keyWords: '',
      selectOptions: [],
      optionsVisible: true
    }
  },
  mixins: [constAnalysis],
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    clearable: Boolean,
    width: {
      type: Number,
      default: 160
    },
    multiple: Boolean,
    collapse: Boolean,
    tagline: Boolean,
    disabled: Boolean,
    filter: Boolean
  },
  components: {
    xoInput
  },
  provide: function() {
    return {
      handleSelectClick: this.optionsClick
    }
  },
  watch: {
    input(val) {
      this.$emit('change', this.input);
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
      if(!this.multiple) {
        this.input = [];
        this.input[0] = val;
      }else {
        const index = this.input.indexOf(val);
        if(index > -1) {
          this.input.splice(index, 1);
        }else {
          this.input.push(val);
        }
      }
      this.visible = this.multiple;
      this.isFocus = true;
    },
    clickOutside() {
      if(this.disabled) return;
      this.isFocus = false;
      this.visible = false;
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
    },
    change(val) {
      this.$children.forEach(e => {
        if(e.options) {
          e.visible = e.options.label.includes(val)
        }
      })
      this.optionsVisible = this.$scopedSlots.default && this.$children.some(e => {
        if(e.options) {
          e.options.visible = true
        }
      })
    },
  }
}
</script>
