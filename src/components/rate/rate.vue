<template>
  <div class="xo-rate">
    <div @mouseleave="move(false)">
      <div class="icon_wrap" v-for="(item, index) in list" :key="index">
        <template>
          <i
            :class="`icon-${mode}-fill`"
            class="iconfont icon-select"
            @click="setRate(index)"
            @mousemove="move(index)"
            v-if="star !== -1 && index <= star"
          ></i>
          <i
            :class="`icon-${mode}`"
            class="iconfont"
            @mousemove="move(index)"
            @click="setRate(index)"
            v-else
          ></i>
        </template>
      </div>
    </div>
    <div v-if="rate" class="text_wrap">{{`评分：${text}`}}</div>
  </div>
</template>

<script>
export default {
  name: "xo-rate",
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
      list: [],
      star: -1,
      selectStar: -1
    };
  },
  methods: {
    getList() {
      const n = this.num;
      this.list = new Array(n);
      const index = this.defaultStar ? this.defaultStar - 1 : -1;
      this.setRate(index, true);
    },
    setRate(index, val) {
      if(!this.readonly || val) {
        this.star = index;
        this.selectStar = index;
        const baseNumber = this.baseNumber > 0 ? this.baseNumber : 5;
        this.text =
          index === -1 ? "0.0" : Number(((index + 1) / this.num) * this.baseNumber).toFixed(1);
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

