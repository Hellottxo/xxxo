<template>
  <div class="xo-timepicker" v-clickoutside="clickoutside">
    <div class="input_wrap">
      <xo-input v-model="time" placeholder="选择时间" :clearable="clearable" @focus="inputFocus(true)"></xo-input>
    </div>
    <div class="select_wrap" v-show="visible">
      <div class="time_wrap">
        <template>
          <ul
            ref="hour"
            @mouseenter="hourscroll=true"
            @mouseleave="mouseLeave('hour')"
            :class="{scroll: hourscroll}"
            @scroll="mouseScroll('hour')"
          >
            <li
              v-for="item in hourList"
              :key="item"
              :class="{
              select: hour==item,
              disabled: (parseInt(item) > maxArr[0]) || (parseInt(item) < minArr[0]) 
            }"
              @click="setTimeStamp(item, 'hour')"
            >{{item}}</li>
          </ul>
        </template>
        <template>
          <ul
            ref="min"
            @mouseenter="minscroll=true"
            @mouseleave="mouseLeave('min')"
            :class="{scroll: minscroll}"
            @scroll="mouseScroll('min')"
          >
            <li
              v-for="item in minList"
              :key="item"
              :class="{
              select: min==item,
              disabled: isMinDisabled(item)
            }"
              @click="setTimeStamp(item, 'min')"
            >{{item}}</li>
          </ul>
        </template>
        <template>
          <ul
            ref="second"
            @mouseenter="secondscroll=true"
            @mouseleave="mouseLeave('second')"
            :class="{scroll: secondscroll}"
            @scroll="mouseScroll('second')"
          >
            <li
              v-for="item in minList"
              :key="item"
              :class="{
              select: second==item,
              disabled: isSecondDisabled(item)
            }"
              @click="setTimeStamp(item, 'second')"
            >{{item}}</li>
          </ul>
        </template>
      </div>
      <div class="button_wrap" v-if="confirm">
        <span @click="cancel">取消</span>
        <span @click="clickoutside">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
const TIME_TYPE = ["hour", "min", "second"];

export default {
  name: "xo-time-picker",
  model: {
    prop: 'timeValue',
    event: 'change'
  },
  props: {
    timeValue: String,
    defaultTime: String,
    clearable: Boolean,
    confirm: Boolean,
    maxTime: String,
    minTime: String
  },
  data() {
    return {
      TIME_TYPE,
      visible: false,
      hourList: [],
      minList: [],
      hour: "",
      min: "",
      second: "",
      time: this.timeValue,
      oldtime: [],
      hourscroll: false,
      minscroll: false,
      secondscroll: false,
      isFirst: true,
      maxArr: [],
      minArr: []
    };
  },
  watch: {
    time(val) {
      if (!val) {
        this.reset();
      }
      this.$emit('input', val);
      this.$emit('change', val);
    },
    visible(val) {
      if (val) {
        this.oldtime = [this.hour, this.min, this.second];
      }
    },
    timeValue(val) {
      this.time = val
    }
  },
  methods: {
    inputFocus(val) {
      this.visible = val;
      this.$nextTick(() => {
        if ((this.isFirst || !this.time) && this.defaultTime) {
          const arr = this.defaultTime.split(":");
          this.hour = arr[0];
          this.min = arr[1];
          this.second = arr[2];
          this.isFirst = false;
        }
        this.setTime(this.hour, this.min, this.second);
      });
    },
    clickoutside() {
      if (this.hour && this.min && this.second) {
        this.time = this.timeValidate();
      }
      this.visible = false;
    },
    setTimeStamp(val, type) {
      this[type] = val;
      const ref = this.$refs[type];
      const height = ref.getElementsByTagName("li")[0].scrollHeight;
      ref.scrollTop = Number(val) * height;
    },
    mouseScroll(type) {
      const ref = this.$refs[type];
      const height = ref.getElementsByTagName("li")[0].scrollHeight;
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
      this.setTimeStamp(hour, "hour");
      this.setTimeStamp(min, "min");
      this.setTimeStamp(second, "second");
    },
    getDisabledTime() {
      const max = this.maxTime ? this.maxTime : "24:00:00";
      const min = this.minTime ? this.minTime : "00:00:00";
      this.maxArr = max.split(":").map(e => parseInt(e));
      this.minArr = min.split(":").map(e => parseInt(e));
    },
    timeValidate() {
      const date = "2009-10-1";
      const val = `${this.hour}:${this.min}:${this.second}`;
      const time = Date.parse(`${date} ${val}`);
      const max = Date.parse(`${date} ${this.maxTime}`);
      const min = Date.parse(`${date} ${this.minTime}`);
      if (time > max) {
        this.hour = this.maxTime.slice(0, 2);
        this.min = this.maxTime.slice(3, 5);
        this.second = this.maxTime.slice(6, 8);
        return this.maxTime;
      }
      if (time < min) {
        this.hour = this.minTime.slice(0, 2);
        this.min = this.minTime.slice(3, 5);
        this.second = this.minTime.slice(6, 8);
        return this.minTime;
      }
      return val;
    },
    isMinDisabled(val) {
      if (this.hour == this.maxArr[0]) {
        return parseInt(val) > this.maxArr[1];
      }
      if (this.hour == this.minArr[0]) {
        return parseInt(val) < this.minArr[1];
      }
    },
    isSecondDisabled(val) {
      if (this.hour == this.maxArr[0] && this.min == this.maxArr[1]) {
        return parseInt(val) > this.maxArr[2];
      }
      if (this.hour == this.minArr[0] && this.min == this.minArr[1]) {
        return parseInt(val) < this.minArr[2];
      }
    },
    cancel() {
      this.visible = false;
      this.$nextTick(() => {
        this.hour = this.oldtime[0];
        this.min = this.oldtime[1];
        this.second = this.oldtime[2];
      });
      this.setTime(this.hour, this.min, this.second);
    },
    reset() {
      this.hour = "";
      this.min = "";
      this.second = "";
      this.time = "";
    },
    getList(num) {
      let arr = [];
      for (let i = 0; i <= num; i++) {
        const time = i < 10 ? `0${i}` : i;
        arr.push(time);
      }
      return arr;
    }
  },
  mounted() {
    this.hourList = this.getList(24);
    this.minList = this.getList(59);
    this.getDisabledTime();
  }
};
</script>
