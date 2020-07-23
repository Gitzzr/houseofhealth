import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
// Vue.prototype.serverUrl = 'http://192.168.0.3:54188/app';
// Vue.prototype.serverUrl = 'http://192.168.43.63:54188/app';
Vue.prototype.serverUrl = 'http://120.78.125.208/app';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
