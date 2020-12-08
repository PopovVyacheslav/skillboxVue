import Vue from 'vue';
import App from './App.vue';
import {MessageOne, MessageTwo} from './components/words.js';
import MyAlert from './components/MyAlert';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

MyAlert(MessageOne);
MyAlert(MessageTwo);