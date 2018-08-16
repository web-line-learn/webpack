# 说明
这是一个todo应用, webpack+vue 实现

# 项目启动说明
- 安装依赖 npm install lodash webpack vue vue-loader vue-template-compiler babel-core babel-loader style-loader css-loader 
- 运行命令 npm start 即可看到效果
- 下面部分是参考webpack 官网的学习笔记,仅供备忘参考(初次整合webpack+vue,还是踩了很多坑)


# 当前应用参考视频
- [慕课网-Vue+Webpack打造todo应用 ](https://www.imooc.com/search/course?words=vue&type=mf)

#webpack 参考
- [其他webpack demo- 参考readme](https://github.com/web-line-learn/webpack)

# vue 参考文档
- [vue 文档](https://cn.vuejs.org/v2/guide/installation.html)
- [我的vue demo](https://github.com/web-line-learn/vue)

# 搭建webpack 环境(webpack 入门)
1 参考[webpack文档安装依赖](https://webpack.docschina.org/guides/getting-started/)
2 启动项目 npx webpack --config webpack.config.js


## webpack.config.js 示例

    const path = require('path');
    
    module.exports = {
      mode: 'development',
      entry: './src/index.js',
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
      }
    };
- [webpack 设置环境](https://cn.vuejs.org/v2/guide/installation.html)
- 在 webpack 4+ 中，你可以使用 mode 选项,但是在 webpack 3 及其更低版本中，你需要使用 DefinePlugin


## 优化启动命令
在 package.json 添加一个 npm 脚本(npm script)：

      "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "watch": "webpack --watch",
          "start": "webpack-dev-server --open",
          "build": "webpack"
        },
现在，可以使用 npm run watch 命令，来替代我们之前使用的 npx 命令

## 使用webwebpack-dev-server
npm install --save-dev webpack-dev-server
[使用 webpack-dev-server ](https://webpack.docschina.org/guides/development/#使用-webpack-dev-server)
以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
现在，我们可以在命令行中运行 npm start，就会看到浏览器自动加载页面。如果现在修改和保存任意源文件，web 服务器就会自动重新加载编译后的代码。试一下！

## 使用 webpack-dev-middleware
[使用 webpack-dev-middleware](https://webpack.docschina.org/guides/development/#使用-webpack-dev-middleware)
npm install --save-dev express webpack-dev-middleware

# webpack 热模块替换
[热模块替换](https://webpack.docschina.org/guides/hot-module-replacement/)

# 添加一个通用模块
[通用模块](https://webpack.docschina.org/guides/tree-shaking/)

# 使用vue-loader
- [vue-loader](https://vue-loader.vuejs.org/guide/)  网站很难打开,多刷新几次
- 安装依赖 npm install lodash webpack vue vue-loader vue-template-compiler babel-core babel-loader style-loader css-loader 
- webpack.config.js 配置打包vue资源  
 ```
  // webpack.config.js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

  module.exports = {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      // make sure to include the plugin for the magic
      new VueLoaderPlugin()
    ]
  }


# 生产环境构建
[生产环境构建](https://webpack.docschina.org/guides/production/)
- npm install --save-dev webpack-merge
- 将webpack.config.js 拆分成以下3个文件:
``` 
  webpack.common.js
  webpack.dev.js
  webpack.prod.js

- 同时在package.json中配置
```
  npm start 定义为开发环境脚本: 
  "start": "webpack-dev-server --open --config webpack.dev.js",

  将 npm run build 定义为生产环境脚本：
  "build": "webpack --config webpack.prod.js"




