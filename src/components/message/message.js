import Vue from 'vue';
import main from './message.vue';

const MessageConstructor = Vue.extend(main);
let instance;

const Message = (options) => {
  instance = new MessageConstructor();
  instance.type = options.type || '';
  instance.message = options.message || '';
  instance.duration = options.duration || 3000;
  instance.showClose = options.showClose || false;
  instance.top = options.top || 20;
  instance.$mount();
  const content = document.createElement('DIV');
  content.className = 'xo-message-wrap';
  const item = document.getElementsByClassName('xo-message-wrap');
  if (item.length === 0) {
    document.body.appendChild(content);
  }
  item[0].appendChild(instance.$el);
  return instance;
};

export default Message;
