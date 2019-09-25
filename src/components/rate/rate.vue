<template>
  <div class="xo-rate">
    <div @mouseleave="move(false)">
      <div class="icon_wrap" v-for="(item, index) in list" :key="index">
        <template>
          <i
            :class="`icon-select-${mode}`"
            class="icon icon-select"
            @click="setRate(index)"
            @mousemove="move(index)"
            v-if="star !== -1 && index <= star"
          ></i>
          <i
            :class="`icon-${mode}`"
            class="icon"
            @mousemove="move(index)"
            @click="setRate(index)"
            v-else
          ></i>
        </template>
      </div>
    </div>
    <div v-if="notice" class="text_wrap">{{`评分：${text}`}}</div>
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
    notice: Boolean,
    mode: {
      type: String,
      default: "star"
    }, 
    defaultStar: Number,
    rate: String,
    readonly: Boolean
  },
  data() {
    return {
      text: this.rate,
      list: [],
      star: -1,
      selectStar: -1
    };
  },
  methods: {
    getList() {
      const n = this.num;
      this.list = new Array(n);
      if(this.defaultStar) {
        const index = this.defaultStar - 1;
        this.setRate(index, true);
      }
    },
    setRate(index, val) {
      if(!this.readonly || val) {
        this.star = index;
        this.selectStar = index;
        this.text =
          index === -1 ? "0.0" : Number(((index + 1) / this.num) * 5).toFixed(1);
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

<style lang="less" scoped>
.xo-rate {
  display: flex;
  line-height: 26px;
  & > div {
    display: flex;
    font-size: 14px;
    i {
      margin: 0 2px;
      font-size: 24px;
      cursor: pointer;
      transition: all 0.3s;
      height: 26px;
      width: 26px;
    }
    i:hover {
      font-size: 25px;
    }
    .icon-select {
      color: rgb(247, 186, 42);
    }
  }
  .text_wrap {
    margin-left: 10px;
  }
}
</style>
