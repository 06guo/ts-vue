import Vue from 'vue'
import App from './App.vue'
import ItemData from './model/ItemData'
import ActionHelper from './store/ActionHelper'
import CateEnum from './model/CateEnum'
import store from './store/index'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

// let item = new ItemData()
// console.log(item, 'item');

// let item = new ActionHelper()
// console.log(item.memoList, 'memoList');
// let newItem = new ItemData(-1, CateEnum.Life, '2020-12-17天气晴', '适宜出游')
// item.addItem(newItem)
