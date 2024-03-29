var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel'
			},
			{
				test: /\.scss$/,
					loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.scss$/,
					loader: ExtractTextPlugin.extract("style",'css!sass!sass-resources')
			}
		]
	},
	sassResources: './src/client/app/global_vars.scss',
	plugins: [
		new ExtractTextPlugin('style.css', {
			allChunks: true
		})
	]
};

module.exports = config;
