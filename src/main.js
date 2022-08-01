import Vue from 'vue'
import App from './App.vue'
import  zzUI  from './components/Button/'
// 将下述两行代码进行抽离到index.js
// import zbtn from '../Button/index.vue'
// Vue.use({
//   install(Vue){
//     Vue.component('zz-btn',zbtn)
//   }
// })
Vue.use(zzUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
