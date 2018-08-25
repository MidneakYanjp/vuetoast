import ToastTemplate from '../../components/ToastTemplete'
/*  这里我是又创建了一个带有一些扩展功能的模板，
	项目需求少的时候可以直接跳过
	当项目需求多，分类广的时候，这里可以做一些基础方法和数据的抽象，最终的组件再实例
	并挂在到html的时候根据不同的需求再次进行扩展*/
const toastEx = {
	extends: ToastTemplate,
	created () {},
	methods: {
		insertData () {

		},
		// 完善点击消失的方法
		closeToast () {
			if (this.$el.parentNode) {this.$el.parentNode.removeChild(this.$el)}
		}
	}
}
export default toastEx