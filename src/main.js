import Vue from 'vue'
import App from './App'
import store from './store'
import '../static/css/global.scss'
import '../static/css/weui.wxss'
import '../static/iconfont/iconfont.css'

Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
