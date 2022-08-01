// 引入组件
import zProgress from '../Button/index.vue'
// 注册组件
export default {
    install(Vue){
      Vue.component('zz-Progress',zProgress)
    }
  }