<template>
  <div class="xo-datepicker" v-clickoutside="clickoutside">
    <div class="input_wrap">
      <xo-input
      v-model="date"
      placeholder="选择日期"
      :clearable="clearable"
      @focus="inputFocus"></xo-input>
    </div>
    <div class="select_wrap" v-if="visible">
      <div class="header_wrap">
        <div class="prev">
          <i
          class="icon icon-double-prev"
          @click="yearChg('prev')"
          ></i>
          <i class="icon
          single-arrow icon-prev"
          @click="monthChg('prev')"
          ></i>
        </div>
        <div class="title">
          <span class="title-year">
            {{year}}年
          </span>
          <span class="title-month">
            {{month}}月
          </span>
        </div>
        <div class="next">
          <i
          class="icon single-arrow icon-next"
          @click="monthChg('next')"
          ></i>
          <i
          class="icon icon-double-next"
          @click="yearChg('next')"></i>
        </div>
      </div>
      <div class="year_wrap"></div>
      <div class="month_wrap"></div>
      <div class="week_wrap">
        <div v-for="item in WEEK" :key="item">
          {{item}}
        </div>
      </div>
      <div class="date_wrap">
        <div
        class="date-item"
        v-for="(item, index) in dateList"
        :key="index"
        :class="{
          notCurrentMonth: isnotCurrentMonth(index),
          currentDay: markToday ? dateValidator(item, currentDay) : false,
          focus: !isnotCurrentMonth(index) && dateValidator(item, date)
        }"
        @click="setDay(item)"
        >
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const WEEK = ['日', '一', '二', '三', '四', '五', '六'];
const LAST_DAY = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}
export default {
  name: 'xo-date-picker',
  data() {
    return {
      visible: false,
      WEEK,
      LAST_DAY,
      year: 2019,
      month: 9,
      day: '',
      date: '',
      dateList: [],
      YearList: [],
      monthList: [],
      startIndex: 0,
      currentDay: {},
    }
  },
  props: {
    clearable: Boolean,
    markToday: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    date(val) {
      if(!val) {
        this.reset();
      }
    }
  },
  methods: {
    inputFocus(val) {
      this.visible = val;
    },
    clickoutside() {
      this.visible = false;
    },
    getDateList() {
      const monthlastday = this.isLeapMonth(this.month);
      this.startIndex =new Date(`${this.year}/${this.month}/1`).getDay();
      const endIndex = new Date(`${this.year}/${this.month}/${monthlastday}`).getDay();
      let yesterday = this.isLeapMonth(this.month > 1 ? this.month - 1 : 12);
      const currentMonth = new Array(monthlastday).fill('').map((item, index) => index + 1);
      let lastMonth = [];
      for(let i = 0; i < this.startIndex; i++) {
        lastMonth.unshift(yesterday);
        yesterday--;
      }
      const len = (currentMonth.length + lastMonth.length) > 35 ? 6 - endIndex : 13 - endIndex;
      let nextMonth = [];
      for(let i = 1; i <= len; i++) {
        nextMonth.push(i);
      }
      this.dateList = lastMonth.concat(currentMonth).concat(nextMonth);
    }, 
    isLeapMonth(month) {
      if(this.year % 4 == 0 && this.year % 100 != 0 && month == 2) {
        return this.LAST_DAY[month] + 1;
      }
      return this.LAST_DAY[month];
    },
    monthChg(type) {
      if(type === 'prev') {
        if(this.month === 1) {
          this.month = 12;
          this.year -= 1;
        }else {
          this.month -= 1;
        }
      }
      if(type === 'next') {
        if(this.month === 12) {
          this.month = 1;
          this.year += 1;
        }else {
          this.month += 1;
        }
      }
      this.getDateList();
    },
    yearChg(type) {
      this.year = type === 'prev' ? this.year - 1 : this.year + 1;
      this.getDateList();
    },
    setDay(val) {
      this.day = val;
      this.date = `${this.year}-${this.uniteDate(this.month)}-${this.uniteDate(this.day)}`;
      this.$emit('input', this.date);
    },
    uniteDate(val) {
      return val > 9 ? val : `0${val}`;
    },
    isnotCurrentMonth(index) {
      const lastday = this.isLeapMonth(this.month);
      return index < this.startIndex || index > this.startIndex + lastday - 1;
    },
    dateValidator(item, day) {
      return `${this.year}-${this.uniteDate(this.month)}-${this.uniteDate(item)}` === day;
    },
    getCurrentDay() {
      const date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      const day = date.getDate();
      this.currentDay = `${this.year}-${this.uniteDate(this.month)}-${this.uniteDate(day)}`;
    },
    reset() {
      this.day = '';
      this.date = '';
    }
  },
  mounted() {
    this.getDateList();
    this.getCurrentDay();
  }
}
</script>

<style lang="less" scoped>
.xo-datepicker {
  position: relative;
  display: inline-block;
  .select_wrap {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    width: 280px;
    position: absolute;
    z-index: 222;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    padding: 10px;
    &>div {
      display: flex;
      font-size: 13px;
      .title {
        display: flex;
        flex: 1;
        justify-content: center;
        font-weight: bold;
      }
    }
    .header_wrap {
      padding-bottom: 10px;
      cursor: pointer;
      .single-arrow {
        transform: scaleX(0.5) scaleY(0.8);
      }
      i {
        font-weight: bold;
      }
      span:hover, i:hover{
        color: #409eff;
      }
    }
    .week_wrap {
      &>div {
        display: flex;
        flex: 1;
        justify-content: center;
        padding: 5px;
      }
    }
    .date_wrap {
      flex-wrap: wrap;
      .date-item {
        display: flex;
        flex-basis: 30px;
        flex-wrap: wrap;
        padding: 5px;
        flex-shrink: 0;
        justify-content: center;
        cursor: pointer;
        position: relative;
        border-radius: 10px;
        transition: all 0.3s;
      }
      .date-item:hover {
        background-color: #f5f7fa;
      }
      .notCurrentMonth {
        color: #ccc;
      }
      .currentDay::after {
        content: '';
        position: absolute;
        height: 5px;
        width: 5px;
        right: 6px;
        top: 6px;
        background: #F56C6C;
        border-radius: 50%;
      }
      .focus {
        color: #fff;
        background: #409eff !important;
        font-weight: bold;
      }
    }
  }
}
</style>
