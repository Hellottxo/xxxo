/* eslint-disable */

export const constAnalysis = {
  methods: {
    /* 根据value获取label */
    getLabel(arr, value) {
      let rtn = '';

      let obj = arr.find(e => {
        return e.value === value;
      })

      if (obj) {
        rtn = obj.label;
      }
      return rtn;
    }
  }
}