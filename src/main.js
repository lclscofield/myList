import Vue from 'vue'
import App from './App'
import pageFactory from 'mpvue-page-factory'
import store from './store'
import '../static/iconfont/iconfont.css'
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

Page(pageFactory(App))
// const app = new Vue(App)
// app.$mount()
