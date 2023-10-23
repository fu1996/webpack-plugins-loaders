const UploadJfrogPlugin = require('../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    plugins: [],
  },
  plugins: [
    new UploadJfrogPlugin({
      jfrogUserName: 'admin',
      jfrogUserPassword: 'password',
      jfrogPath: 'http://172.20.0.21:31090/artifactory/file-new-pipe/gid',
      debug: true, // 开启debug 模式
    }),
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
