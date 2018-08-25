import Vue from 'vue/dist/vue.common.js'
import fixToast from '../toastapi/toastapi'
const fixToastConstructor = Vue.extend(fixToast)
// 这里根据需求完善出一个最终的弹窗组件，增添到body中
const createFixToast = (data) => {
	const fixToastInstance = new fixToastConstructor({
		data () {
			return {
				settingStyles: {
					background: '#5bcb61',
				}
			}
		},
		created () {
			this.insertData (data)
		},
		methods: {
			insertData (data) {
				// 逻辑处理结果, '0' 警告 '1' 成功 '-1' 失败, 不给默认是成功
				switch (data.status) {
					case '-1':
						this.settingStyles.background = '#cb5f4a'
						break
					case '0':
						this.settingStyles.background = '#cba033'
						break
					case '1':
						this.settingStyles.background = '#5bcb61'
				}
				// 弹层过一段时间消失
				if (!data.show_still) {
					this.timer = setTimeout( () => {
						this.closeToast()
					}, data.showTime || 2000)
				}
				// 弹层位置,默认顶端
				this.settingStyles[data.position || 'top'] = data.long || 0
				// 输出文字
				this.toastWord = data.word || (data.status === '0' ? 'warning' : (data.status === '-1' ? 'error' : 'success'))
			}
		}
	})
	// 这行代码最好拆开,我只是写一个例子，就不那么麻烦了,用$mount手动挂载,但是没有插入,只是为了得到dom，插入body
	document.body.appendChild(fixToastInstance.$mount().$el)
}

// 既然我们定义了一个展示弹层的方法 那么我们也应该有一个不依靠组件本身，全局可调用的方法来清除弹层
const clearAllToast = () => {
	let tos = document.querySelector('.toast-panel-1')
	tos && tos.remove()
}

export default {
	install (Vue) {
		Vue.prototype.$createToast = createFixToast
		Vue.prototype.$clearToast = clearAllToast
	}
}
