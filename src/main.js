import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'

createApp(App).use(router).mount('#app')


// https://blog.csdn.net/qq_45112637/article/details/131740110 解决resizeObserver Error
const debounce = (fn, delay) => {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
    constructor(callback) {
        callback = debounce(callback, 16);
        super(callback);
    }
}