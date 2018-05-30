# webpack
- 这是webpack 入门使用示例
- 官方示例挺好的,就是没有提供目录结构,根据代码引用文件路径,总算是成功了(作为一个java开发,弄前端共建发现还是挺陌生的)
- 后面看到入门指南,才发现是我没有找对文档入口

# 参考文档
https://webpack.docschina.org/guides/ 入门指南
https://webpack.docschina.org/  官网简单示例

# 个人使用总结
http://note.youdao.com/noteshare?id=44b0bf55c631af5828289d400b6cf8ff

- nodejs 安装教程: http://www.runoob.com/nodejs/nodejs-install-setup.html
- webpack 安装
1 npm install --global webpack
2 然后还要安装 webpack-cli npm install --save-dev webpack-cli

# 示例使用
1 git clone https://github.com/web-line-learn/webpack.git && cd webpack

2 运行命令 webpack 打开index.html即可查看结果(F12 控制台输出)

# 项目说明
- demo1-simpled 参考 https://webpack.docschina.org/ (建议从demo2开始看)
- demo2-started 参考 https://webpack.docschina.org/guides/getting-started/
- demo3-resources-manage 参考 https://webpack.docschina.org/guides/asset-management/

# webpack 开发流程
- 首次构建项目
1 npm init -y (生成package.json文件)
2 npm install webpack webpack-cli --save-dev  (安装webpack-cli, 生成目录添加到.gitignore中)

- 调整package.json 文件
去除"main" 属性
添加"private": true属性
script属性中添加属性 :
    "build": "webpack",
    "watch": "webpack --watch",

- 运行构建命令  
npm run build (不会实时显示改动)
npm run watch (随时监测源码改动)

- 添加gitignore 文件
*/node_modules
*/node_modules/**
git add .gitignore
git commite -m "忽略生成的node依赖"

# 常用插件
npm install --save-dev html-webpack-plugin (设定 [HtmlWebpackPlugin](https://webpack.docschina.org/guides/output-management/))
npm install clean-webpack-plugin --save-dev (每次构建前清理 /dist 文件夹)

# 安装本地库(每个项目,按需加载)
npm install --save lodash
npm install --save-dev style-loader css-loader (加载css)
npm install --save-dev file-loader (加载图片等)
npm install --save-dev csv-loader xml-loader (加载数据xml等文件,json是默认的)
