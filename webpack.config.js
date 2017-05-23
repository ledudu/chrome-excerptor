var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
	entry: {
		content: path.resolve(APP_PATH, 'js/content.js'),
		background: path.resolve(APP_PATH, 'js/background.js'),
		manifest:path.resolve(APP_PATH,'manifest.json')
	},
	output: {
		path: BUILD_PATH,
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
