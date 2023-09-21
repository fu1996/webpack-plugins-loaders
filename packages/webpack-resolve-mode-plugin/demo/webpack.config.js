const ResolverModePlugin = require('../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    plugins: [
      // other option https://github.com/shaketbaby/directory-named-webpack-plugin
      new ResolverModePlugin({
        excludes: [/node_modules/, 'exclude-dir'], // 排除的目录
        includeFileSuffix: ['.js', '.json.js'], // 参与条件渲染的文件后缀
        mode: '', // 目标 模式：根据此模式 自动打包
        debug: true, // 开启debug 模式
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mode test',
      templateContent: ({ htmlWebpackPlugin }) =>
        '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
        htmlWebpackPlugin.options.title +
        '</title></head><body><div id="app"></div></body></html>',
      filename: 'index.html',
    }),
  ],
};
