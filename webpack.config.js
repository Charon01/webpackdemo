var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	//ҳ������ļ�����
	entry: {
		index: __dirname + '/src/main/entry.js'
	},
	//����ļ��������
	output: {
		path: __dirname + '/src/main/',
		filename:'bundle.js'
	},
	module: {
		//������
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader'}
		]
	},
	//���������������
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