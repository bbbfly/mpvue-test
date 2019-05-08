import Vue from 'vue'
import App from './App'
import store from '@/store/store'

// 解决 vue 辅助涵数 mapState mapActions mapGettres 的使用
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
// new Vue({
//     store
// }).$mount()
