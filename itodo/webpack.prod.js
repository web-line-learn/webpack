 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const webpack = require('webpack');


 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',//调试源码(debug)
   plugins: [
      new UglifyJSPlugin({ //代码压缩,具有删除未引用代码(dead code)的能力
           sourceMap: true 
      }),
      new webpack.DefinePlugin({//指定环境 
        'process.env.NODE_ENV': JSON.stringify('production')
      })
        
  ]


 });