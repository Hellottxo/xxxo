<template>
  <div class="xo-datepicker" v-clickoutside="clickoutside">
    <div class="input_wrap">
      <xo-input
      v-model="date"
      placeholder="选择日期"
      :clearable="clearable"
      @focus="inputFocus(true)"></xo-input>
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
          v-if="!showYearSelect && !showWeekSelect"
          @click="monthChg('prev')"
          ></i>
        </div>
        <div class="title">
          <span
          v-show="!showYearSelect"
          class="title-year"
          @click="yearSelect(year)">
            {{year}}年
          </span>
          <span
          v-show="!showYearSelect && !showWeekSelect"
          class="title-month"
          @click="monthSelect">
            {{month}}月
          </span>
          <span v-show="showYearSelect">{{title}}</span>
        </div>
        <div class="next">
          <i
          class="icon single-arrow icon-next"
          v-if="!showYearSelect && !showWeekSelect"
          @click="monthChg('next')"
          ></i>
          <i
          class="icon icon-double-next"
          @click="yearChg('next')"></i>
        </div>
      </div>
      <div class="year_wrap" v-show="showYearSelect">
        <div
        class="year-item item_wrap"
        v-for="(item, index) in yearList"
        :class="{focus: item == currentDay.slice(0,4)}"
        :key="index"
        @click="setYear(item)"
        >{{item}}</div>
      </div>
      <div class="month_wrap" v-show="showWeekSelect">
        <div
        class="month-item item_wrap"
        v-for="(item, index) in monthList"
        :class="{focus: year == currentDay.slice(0,4) && MONTH[item] == parseFloat(currentDay.slice(5,7))}"
        :key="index"
        @click="setMonth(item)">{{item}}</div>
      </div>
      <div class="week_wrap" v-show="!showYearSelect && !showWeekSelect">
        <div v-for="item in WEEK" :key="item">
          {{item}}
        </div>
      </div>
      <div class="date_wrap" v-show="!showYearSelect && !showWeekSelect">
        <div
        class="date-item item_wrap"
        v-for="(item, index) in dateList"
        :key="index"
        :class="{
          notCurrentMonth: isnotCurrentMonth(index),
          currentDay: markToday ? !isnotCurrentMonth(index) && dateValidator(item, currentDay) : false,
          select: !isnotCurrentMonth(index) && dateValidator(item, date)
        }"
        @click="setDay(item, index)"
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
};
const MONTH = {
  '一月': 1,
  '二月': 2,
  '三月': 3,
  '四月': 4,
  '五月': 5,
  '六月': 6,
  '七月': 7,
  '八月': 8,
  '九月': 9,
  '十月': 10,
  '十一月': 11,
  '十二月': 12,
}
export default {
  name: 'xo-date-picker',
  model: {
    prop: 'dateValue',
    event: 'change'
  },
  props: {
    dateValue: String,
    clearable: Boolean,
    markToday: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false,
      WEEK,
      LAST_DAY,
      year: 2019,
      month: 4,
      day: '',
      date: this.dateValue,
      dateList: [],
      yearList: [],
      monthList: [],
      startIndex: 0,
      currentDay: {},
      showYearSelect: false,
      showWeekSelect: false,
      title: '',
      MONTH
    }
  },
  watch: {
    date(val) {
      if(!val) {
        this.reset();
      }
    },
    dateValue(val) {
      this.date = val
    }
  },
  methods: {
    inputFocus(val) {
      this.visible = val;
    },
    clickoutside() {
      this.visible = false;
      this.showYearSelect = false;
      this.showWeekSelect = false;
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
      if(this.showYearSelect) {
        if(type === 'prev') this.yearSelect(parseFloat(this.yearList[0]) - 10);
        if(type === 'next') this.yearSelect(parseFloat(this.yearList[0]) + 10);
      }else {
        this.year = parseFloat(this.year);
        if(type === 'prev') this.year -= 1;
        if(type === 'next') this.year += 1;
      }
      this.getDateList();
    },
    setDay(item, index) {
      const lastday = this.isLeapMonth(this.month);
      if(index < this.startIndex ) {
        this.monthChg('prev');
      }
      if(index > this.startIndex + lastday - 1) {
        this.monthChg('next');
      }
      this.day = item;
      this.date = `${this.year}-${this.uniteDate(this.month)}-${this.uniteDate(this.day)}`;
      this.$emit('input', this.date);
    },
    setYear(val) {
      this.showYearSelect = false;
      this.year = val;
      this.monthSelect();
    },
    setMonth(val) {
      this.showWeekSelect = false;
      this.month = this.MONTH[val];
      this.getDateList();
    },
    yearSelect(val) {
      if(!this.showWeekSelect) {
        this.showYearSelect = true;
        const str = val.toString().slice(0, -1);
        this.yearList = [];
        for(let i = 0; i < 10; i++) {
          this.yearList.push(`${str}${i}`);
        }
        this.title = `${this.yearList[0]} - ${this.yearList[1]}`;
      }
    },
    monthSelect() {
      this.showWeekSelect = true;
      this.monthList = Object.keys(this.MONTH);
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
    }
  },
  mounted() {
    this.getCurrentDay();
    this.getDateList();
  }
}
</script>
