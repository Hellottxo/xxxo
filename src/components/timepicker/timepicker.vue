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
            :class="{select: hour==item}"
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
            :class="{select: min==item}"
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
            :class="{select: second==item}"
            @click="setTimeStamp(item, 'second')"
            >{{item}}</li>
          </ul>
        </template>
      </div>
      <div class="button_wrap" v-if="confrim">
        <span @click="cancel">取消</span>
        <span @click="clickoutside">确定</span>
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
      hourList: [],
      minList: [],
      hour: '',
      min: '',
      second: '',
      time: '',
      oldtime: [],
      hourscroll: false,
      minscroll: false,
      secondscroll: false,
      isFirst: true
    }
  },
  props: {
    defaultTime: String,
    clearable: Boolean,
    confrim: Boolean,
  },
  watch: {
    time(val) {
      if(!val) {
        this.reset();
      }
    },
    visible(val) {
      if(val) {
        this.oldtime = [this.hour, this.min, this.second]
      }
    }
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
    cancel() {
      this.visible = false;
      this.$nextTick(() => {
        this.hour = this.oldtime[0];
        this.min = this.oldtime[1];
        this.second = this.oldtime[2];
      })
      this.setTime(this.hour, this.min, this.second);
    },
    reset() {
      this.hour = '';
      this.min = '';
      this.second = '';
      this.time = '';
    },
    getList(num) {
      let arr = [];
      for(let i = 0; i <= num; i++) {
        const time = i < 10 ? `0${i}` : i;
        arr.push(time);
      }
      return arr;
    }
  },
  mounted() {
    this.hourList = this.getList(24);
    this.minList = this.getList(59);
  }
}
</script>

<style lang="less" scoped>
.time-picker {
  position: relative;
  display: inline-block;
  .select_wrap {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    margin-top: 8px;
    width: 150px;
    position: absolute;
    z-index: 222;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    .time_wrap {
      display: flex;
      flex: 1;
      height: 200px;
      margin-top: 10px;
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
        .disabled {
          cursor: not-allowed;
          color: #c0c4cc;
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
    .button_wrap {
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: flex-end;
      span {
        margin-left: 15px;
        cursor: pointer;
      }
      span:nth-child(2) {
        color: #409eff;
      }
    }
  }
  .select_wrap::before {
    content: '';
    height: 27px;
    width: 120px;
    left: 24px;
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
