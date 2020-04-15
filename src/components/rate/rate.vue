<template>
  <div class="xo-rate">
    <div @mouseleave="move(false)">
      <div class="icon_wrap" v-for="item in num" :key="item">
        <template>
          <icon
            :mode="star !== -1 && item <= star ? `${mode}-fill` : mode"
            :class="star !== -1 && item <= star ? 'icon-select' : ''"
            class="rate-icon"
            :style="{cursor: readonly ? 'not-allowed' : 'pointer'}"
            @click.native="setRate(item)"
            @mousemove.native="move(item)"
          />
        </template>
      </div>
    </div>
    <div v-if="rate" class="text_wrap">{{`评分：${text}`}}</div>
  </div>
</template>

<script>
import icon from "../icon/index.js";

export default {
  name: "xo-rate",
  components: {
    icon
  },
  props: {
    num: {
      type: Number,
      default: 5
    },
    rate: Boolean,
    mode: {
      type: String,
      default: "collection"
    }, 
    defaultStar: Number,
    readonly: Boolean,
    baseNumber: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      text: 0,
      star: -1,
      selectStar: -1
    };
  },
  methods: {
    getList() {
      const index = this.defaultStar ? this.defaultStar - 1 : -1;
      this.setRate(index, true);
    },
    setRate(index, val) {
      if(!this.readonly || val) {
        this.star = index;
        this.selectStar = index;
        const baseNumber = this.baseNumber > 0 ? this.baseNumber : 5;
        this.text =
          index === -1 ? "0.0" : Number((index / this.num) * this.baseNumber).toFixed(1);
        this.$emit('input', this.text);
      }
    },
    move(index) {
      if(!this.readonly) {
        this.star = index ? index : this.selectStar;
      }
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
