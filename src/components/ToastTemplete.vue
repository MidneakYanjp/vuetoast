<template>
    <div :style="settingStyles" class="toast-panel-1">
        <p @click="closeToast" class="toast-box">
            <span>{{toastWord}}</span>
        </p>
    </div>
</template>
<!-- 模板中最好不要有什么具体的方法或数据, 把它只是当做一个静态样式的展示,后期根据
 不同的需求来进行扩展,一些重要的数据和方法可以声明，用时抽象-->
<script>
	export default {
		name: "ToastTemplate",
        // 模板中添加一些数据，后期可以扩展
        data () {
			return {
				toastWord : '',
				settingStyles: null
            }
        },
		methods: {
			// 数据解析
			insertData () {
			},
			// 增加一个点击消失的方法
			closeToast () {}
		}
	}
</script>

<style scoped>
    .toast-panel-1 {
        width: 100%;
        min-width: 600px;
        position: fixed;
        line-height: 60px;
        left: 0;
    }
    .toast-panel-1 .toast-box {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 40px;
        font-size: 18px;
        color: #ffffff;
        text-align: center;
    }
</style>