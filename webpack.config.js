const path = require('path'),
	fs = require('fs');

const pr = path.resolve;

const ROOT_PATH = pr(__dirname),
	APP_PATH = pr(ROOT_PATH, 'app'),
	BUILD_PATH = pr(ROOT_PATH, 'dist');


var entry = {};
fs.readdirSync(pr(APP_PATH, 'js')).forEach((path) => {
	// 判断是否是js文件
	var isFile = fs.statSync(pr(APP_PATH, 'js/' + path)).isFile();
	if (isFile && path.indexOf('.js') != -1) {
		var name = path.replace('.js', '');
		entry[name] = pr(APP_PATH, 'js/' + path);
	}
});

module.exports = {
	entry,
	output: {
		path: path.resolve(BUILD_PATH, 'js'),
		filename: '[name].js'
	},
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
	},
	module: {
		rules: [{
			test: /\.js?$/,
			enforce: 'pre',
			loaders: ['eslint-loader'],
			include: APP_PATH
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader']
		}, {
			test: /\.js?$/,
			loader: ['babel-loader'],
			include: APP_PATH
		}],
	},
	resolve: {
		extensions: ['.js']
	}
};
