// 在Vue的原型中掛載Event Bus
import Vue from 'vue'
Vue.prototype.$bus = new Vue()