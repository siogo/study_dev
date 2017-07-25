var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
    _DEV_:JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
console.log('webpack_config:'+process.env.DEBUG)
module.exports = {
    entry: './main.js',
    output: {
        path: __dirname, // 输出文件的保存路径
        filename: 'bundle.js' // 输出文件的名称
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader',
                exclude:/node_modules/
            }
        ]
    },
    plugins:[devFlagPlugin]
}