const path = require("path");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack")

module.exports = {
	entry:{
		index:'./src/index',
		math:'./src/math',
	},
	plugins:[
		new cleanWebpackPlugin(['dist']),
	],
	output:{
		// filename:'[name].bundle.js',
		filename:[name].[chunkhash].js,
		path: path.resolve(__dirname,'dist')
	},
	optimization:{
        splitChunks: {
          chunks: "all", 
          minSize: 0,   
          name: 'common',      
          minChunks: 1,             
        }
    }
}