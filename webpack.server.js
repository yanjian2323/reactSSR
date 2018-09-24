let path = require('path');
let webpackNodeExternals = require('webpack-node-externals');

exports.default = {
	target: 'node',
	externals: [webpackNodeExternals()],
	entry: {
		index: './src/server/index.js'
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	}
};