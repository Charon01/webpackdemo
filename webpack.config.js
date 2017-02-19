var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	//页面入口文件配置
	entry: {
		index: __dirname + '/src/main/entry.js'
	},
	//入口文件输出配置
	output: {
		path: __dirname + '/src/main/',
		filename:'bundle.js'
	},
	module: {
		//加载器
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader'}
		]
	},
	//其它解决方案配置
	resolve: {
	},
	plugins:[
	new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
	],
	//--open --content-base src/main --progress --colors
	devServer:{
		contentBase:"src/main",
		open:true,
	}
	
}