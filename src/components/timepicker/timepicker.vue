<template>
  <div class="time-picker" v-clickoutside="clickoutside">
    <div class="input_wrap">
      <xo-input
      v-model="time"
      placeholder="选择时间"
      :clearable="clearable"
      @focus="inputFocus"></xo-input>
    </div>
    <div class="select_wrap" v-if="visible">
      <div class="time_wrap">
        <ul
        ref="hour"
        @mouseenter="hourscroll=true"
        @mouseleave="mouseLeave('hour')"
        :class="{scroll: hourscroll}"
        @scroll="mouseScroll('hour')"
        >
          <li
          v-for="item in list"
          :key="item"
          :class="{select: hour==item}"
          @click="setTimeStamp(item, 'hour')"
          >{{item}}</li>
        </ul>
      </div>
      <div class="time_wrap">
        <ul
        ref="min"
        @mouseenter="minscroll=true"
        @mouseleave="mouseLeave('min')"
        :class="{scroll: minscroll}"
        @scroll="mouseScroll('min')"
        >
          <li
          v-for="item in list"
          :key="item"
          :class="{select: min==item}"
          @click="setTimeStamp(item, 'min')"
          >{{item}}</li>
        </ul>
      </div>
      <div class="time_wrap">
        <ul
        ref="second"
        @mouseenter="secondscroll=true"
        @mouseleave="mouseLeave('second')"
        :class="{scroll: secondscroll}"
        @scroll="mouseScroll('second')"
        >
          <li
          v-for="item in list"
          :key="item"
          :class="{select: second==item}"
          @click="setTimeStamp(item, 'second')"
          >{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

const TIME_TYPE= ['hour', 'min', 'second'];

export default {
  name: 'xo-time-picker',
  data() {
    return {
      TIME_TYPE,
      visible: false,
      list: [],
      hour: '00',
      min: '00',
      second: '00',
      time: '',
      hourscroll: false,
      minscroll: false,
      secondscroll: false,
      isFirst: true
    }
  },
  props: {
    defaultTime: String,
    clearable: Boolean
  },
  watch: {
    time(val) {
      if(!val) {
        this.reset();
      }
    },
  },
  methods: {
    inputFocus(val) {
      this.visible = val;
      this.$nextTick(() => {
        if((this.isFirst || !this.time) && this.defaultTime) {
          const arr = this.defaultTime.split(':');
          this.hour = arr[0];
          this.min = arr[1];
          this.second = arr[2];
          this.isFirst = false;
        }
        this.setTime(this.hour, this.min, this.second);
      })
    },
    clickoutside() {
      if(this.hour && this.min && this.second) {
        this.time = `${this.hour}:${this.min}:${this.second}`;
      }
      this.visible = false;
    },
    setTimeStamp(val, type) {
      this[type] = val;
      const ref = this.$refs[type];
      const height = ref.getElementsByTagName('li')[0].scrollHeight;
      ref.scrollTop = Number(val) * height;
    },
    mouseScroll(type) {
      const ref = this.$refs[type];
      const height = ref.getElementsByTagName('li')[0].scrollHeight;
      const index = Math.round(ref.scrollTop / height);
      const time = index < 10 ? `0${index}` : index;
      this[type] = time;
    },
    mouseLeave(type) {
      this[`${type}scroll`] = false;
      this.setTimeStamp(this[type], type);
    },
    mouseEnter(type) {
      this[`${type}scroll`] = true;
    },
    isScroll(type) {
      return this[`${type}scroll`];
    },
    setTime(hour, min, second) {
      this.setTimeStamp(hour, 'hour');
      this.setTimeStamp(min, 'min');
      this.setTimeStamp(second, 'second');
    },
    reset() {
      this.hour = '';
      this.min = '';
      this.second = '';
      this.time = '';
    },
    getList() {
      let arr = [];
      for(let i = 0; i <= 59; i++) {
        const time = i < 10 ? `0${i}` : i;
        arr.push(time);
      }
      this.list = arr;
    }
  },
  mounted() {
    this.getList();  
  }
}
</script>

<style lang="less" scoped>
.time-picker {
  position: relative;
  display: inline-block;
  .select_wrap {
    display: flex;
    padding: 10px 5px;
    margin-top: 8px;
    height: 190px;
    width: 180px;
    position: absolute;
    z-index: 222;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    .time_wrap {
      height: 100%;
      display: flex;
      flex: 1;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        color: #c0c4cc;
        font-size: 12px;
        width: 100%;
        height: 100%;
        overflow: auto;
        transition: all 0.3s;
        li {
          padding: 6px 0;
          cursor: pointer;
        }
        li:hover {
          background-color: #f5f7fa;
        }
        .select {
          color: #000;
          font-weight: bold;
        }
      }
      ul::-webkit-scrollbar {
        height: 5px;
        width: 5px;
      }
      ul::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: transparent;
      }
      ul::-webkit-scrollbar-track {
        background: #fff;
      }
      ul::before {
        height: 84px;
        content: '';
        display: block;
      }
      ul::after {
        height: 84px;
        content: '';
        display: block;
      }
      .scroll {
        color: #606266;
      }
      .scroll::-webkit-scrollbar-thumb {
        background: #e8eaec;
      }
    }
  }
  .select_wrap::before {
    content: '';
    height: 27px;
    width: 140px;
    margin: 0 10px 0 18px;
    position: absolute;
    border-bottom: 1px solid #c0c4cc;
    border-top: 1px solid #c0c4cc;
    top: 93px;
  }
}
</style>

<style lang="less">
.time-picker {

}
</style>
