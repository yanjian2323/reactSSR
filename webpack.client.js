let path = require('path');

module.exports = {
	entry: {
		index: './src/client/index.js'
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [{
			test: /src\//,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	}
};