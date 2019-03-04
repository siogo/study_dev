const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	// entry: './src/index.js',
	entry:{
		// app:'./src/index.js'
		index: './src/index.js',
		// another: './src/another-module.js'
		vendor:[
			'lodash'
		]
	},
	output: {
		// filename: 'bundle.js',
		// filename:'[name].bundle.js',
		// chunkFilename: '[name].bundle.js',
		filename:'[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
		// publicPath: '/'
	},
	plugins:[
		new HtmlWebpackPlugin({
			title: 'Output Management'
		}),
		new CleanWebpackPlugin(['dist']),
		new webpack.NamedModulesPlugin(),
		// 热更新与hash冲突
		// new webpack.HotModuleReplacementPlugin(),
		// 去除多余未被使用的代码
		new UglifyJSPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		// 提取公共模块代码
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest'
		}),
		
	],	
	devtool:'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
};