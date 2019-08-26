/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param timeout 定时器
 */
function debounce(func, wait) {
  const that = this;
  /* eslint-disable */
  const args = arguments;
  /* eslint-disable */
  if (that.timeout) clearTimeout(that.timeout);

  const callNow = !that.timeout;
  that.timeout = setTimeout(() => {
    that.timeout = null;
    if (!that.timeout && !callNow) func.apply(that, args);
  }, wait);
  if (callNow) func.apply(that, args);
}


/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param time 记录时间戳
 */
function throttle(func, wait) {
  const now = Date.now();
  const that = this;
  if (now - that.time > wait) {
    /* eslint-disable */
    that.time = now;
    /* eslint-disable */
    func.apply(that, args);
  }
}

export {
  debounce,
  throttle,
}