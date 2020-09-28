export default {
  functional: true,
  name: 'collapse-transition',
  render: (createElement, { children }) => {
    const data = {
      on: {
        beforeEnter: (el) => {
          el.dataset.overflow = el.style.overflow;
          el.dataset.className = el.className;

          el.className = `${el.className} collapse-transition`;
          el.style.height = 0;
        },
        enter: (el) => {
          if (el.scrollHeight !== 0) {
            el.style.height = `${el.scrollHeight}px`;
          } else {
            el.style.height = '';
          }
          el.style.overflow = 'hidden';
        },
        afterEnter: (el) => {
          el.className = el.dataset.className;
          el.style.height = '';
          el.style.overflow = el.dataset.overflow;
        },
        beforeLeave: (el) => {
          el.dataset.overflow = el.style.overflow;
          el.dataset.className = el.className;
          el.className = `${el.className} collapse-transition`;
          el.style.height = `${el.scrollHeight}px`;
          el.style.overflow = 'hidden';
        },
        leave: (el) => {
          if (el.scrollHeight !== 0) {
            el.style.height = 0;
          }
        },
        afterLeave(el) {
          el.className = el.dataset.className;
          el.style.height = '';
          el.style.overflow = el.dataset.overflow;
        }
      },
    };
    return createElement('transition', data, children);
  },
};
