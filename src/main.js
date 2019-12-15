import Vue from 'vue'
import App from './App.vue'
// import 'amfe-flexible' // 用于设置rem基准值
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
