import hljs from 'highlight.js';
import 'highlight.js/styles/atelier-heath-light.css';

const highlight = (el) => {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
};

const install = (Vue) => {
  Vue.directive('highlight', highlight);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install });
}

export default { install };
