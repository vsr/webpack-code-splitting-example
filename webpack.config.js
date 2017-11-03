const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
	    filename: '[name].[chunkhash].js',
	    path: path.resolve(__dirname, 'dist'),
			chunkFilename: '[name].[chunkhash].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ ['env' ] ],
							"plugins": ["syntax-dynamic-import"],
						}
					},
				],
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('./dist'),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin(),
	]
};

module.exports = config;
