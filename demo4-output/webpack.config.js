const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config={
    devtool: 'inline-source-map',
	entry: {
	    app: './src/index.js',
	    print: './src/print.js',
	},
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: '[name].bundle.js'
	},
	plugins: [
	  new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ]
};

module.exports=config
