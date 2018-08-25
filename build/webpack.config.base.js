const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
function resolve (dir) {
	return path.join(__dirname, '..', dir)
}
module.exports = {
	mode: process.env.NODE_ENV,
	context: resolve(__dirname, '../'),
	entry: {
		app: resolve('src/main.js')
	},
	output: {
		path: resolve('dist'),
		filename: 'js/[name].js',
		publicPath: './'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias:{
			'vue$':'vue/dist/vue.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('dist',{
			root: path.resolve(__dirname, '../')
		}),
		new HtmlWebpackPlugin({
			template: resolve('index.html'),
			inject: 'body',
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	]
}