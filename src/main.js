// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import toastApi from './function/toastextend/toastextend'
Vue.config.productionTip = false
Vue.use(toastApi)
/* eslint-disable no-new */
new Vue({
	el: '#root',
	components: { App },
	template: '<App/>'
})
