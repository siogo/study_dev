const merge = require("webpack-merge");
const webpack = require("webpack")
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common,{
	devtool: 'source-map',
	plugins:[
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':'"production"'
		})
	]
})