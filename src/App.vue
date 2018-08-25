<template>
    <div id="app">
        <div class="test">
            <p class="part1">
                <span>{{formula}}</span>
                <input v-model="result" type="text" maxlength="3">
            </p>
            <p class="part2">
                <button @click="checkResult">确定</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    created () {
	    this.createFormula()
    },
    computed: {
	    formula () {
    		return `${this.num1} + ${this.num2} = ?`
        },
        check () {
    		return this.result == this.num1 + this.num2
        }
    },
    data () {
    	return {
		    result: '',
		    num1: '',
		    num2: '',
        }
    },
    methods: {
    	createFormula () {
    	    this.num1 = this.getNum()
            this.num2 = this.getNum()
        },
	    checkResult () {
	    	this.$clearToast()
	    	if (this.result === '') {
	    		this.showStyle('0', '请填写结果')
            } else if (this.check) {
			    this.showStyle('1', '恭喜您,回答正确😝')
                this.createFormula()
                this.result = ''
            } else {
			    this.showStyle('-1', '很遗憾,回答错误😭')
            }
        },
    	getNum () {
		    return parseInt(Math.random() * 100)
        },
        showStyle (status, word) {
            this.$createToast(
                {
                    status,
                    word
                }
            )
        }
    }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 160px;
    }
    .test {
        width: 800px;
        box-shadow: 8px 4px 12px #525252;
        margin: 0 auto;
        color: #111111;
        font-size: 20px;
        background-image: linear-gradient(to right, #fff 0%,#fff 85.9%, #e0e0e0 86%, #fff 86.5%, #fff 96%, #dcdcdc 100%);
        border-radius: 1px;
        height: 400px;
    }
    .part1 {
        padding: 40px;
    }
    .part1 input {
        vertical-align: middle;
        margin-left: 20px;
        width: 60px;
        padding: 0 10px;
        outline: none;
        font-size: 16px;
        color: #4a70e7;
        height: 25px;
    }
    .part1 span {
        vertical-align: middle;
    }
    .part2 {
        padding: 40px;
    }
    .part2 button {
        padding: 4px 24px;
        cursor: pointer;
        background: #4ec866;
        border: none;
        color: #fff;
        outline: none;
        font-size: 16px;
        border-radius: 4px;
    }
    .part2 button:hover {
        opacity: 0.7;
    }
</style>
