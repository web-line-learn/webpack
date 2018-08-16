 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');
 const VueLoaderPlugin = require('vue-loader/lib/plugin')

 module.exports = {
   entry: {
     app: './src/index.js'
   },
   plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'test',
       filename: 'index.html',
       template: './index.html'  // 会与根目录下的index.html相关联，把根目录下index的东西都放到生成的HTML中
     
     }),
     new webpack.HotModuleReplacementPlugin(),
     new VueLoaderPlugin()
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
   optimization: {//防止重复依赖模块
      splitChunks: {
        chunks: 'all'
      }
    },
    
   module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
 };