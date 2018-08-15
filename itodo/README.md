# 说明
这是一个todo应用, webpack+vue 实现

- # 当前应用参考视频
[慕课网-Vue+Webpack打造todo应用 ](https://www.imooc.com/search/course?words=vue&type=mf)

#webpack 参考
- [其他webpack demo- 参考readme](https://github.com/web-line-learn/webpack)

# vue 参考文档
- [vue 文档](https://cn.vuejs.org/v2/guide/installation.html)
- [我的vue demo](https://github.com/web-line-learn/vue)

# 搭建webpack 环境(webpack 入门)
1 参考[webpack文档安装依赖](https://webpack.docschina.org/guides/getting-started/)
2 启动项目 npx webpack --config webpack.config.js

## webpack.config.js 示例
[webpack 设置环境](https://cn.vuejs.org/v2/guide/installation.html)
在 webpack 4+ 中，你可以使用 mode 选项,但是在 webpack 3 及其更低版本中，你需要使用 DefinePlugin
  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }
  };


## 优化启动命令
在 package.json 添加一个 npm 脚本(npm script)：

      "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "build": "webpack"
        },
现在，可以使用 npm run build 命令，来替代我们之前使用的 npx 命令


