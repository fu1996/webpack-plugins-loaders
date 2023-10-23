## 🗝 关于该库的背景

- 为了实现产出的sourceMap等映射文件使用jfrog托管和映射，特增加此插件

## 🎉 项目名称，原理以及注意事项

`名称：` webpack jfrog 文件上传插件

`原理：` 借用 curl 和 webpack 的 hook 命令实现文件上传

`注意事项：`

暂无

## 📦 安装方式

```bash
# 为当前项目安装
npm i -D @fu1996/webpack-upload-jfrog-plugin
```

## 🏄 配置如下：

TODO：以下内容待增加

## 📝 demo

首先修改 webpack的 配置如下：

```js
// 引入该插件
const WebpackResolverModePlugin = require('@fu1996/webpack-resolver-mode-plugin');
```

```js
resolve: {
    plugins: [
      new WebpackResolverModePlugin({
        excludes: /node_modules/, // 排除的目录
        includeFileSuffix: [".js", ".jsx"], // 参与条件渲染的文件后缀
        mode: "h5", // 目标 模式：根据此模式 自动打包
      })
    ],
},
```

假设 index.js 文件如下：

```js
import a from './a';

console.log('2222', a);
```

假设同时 存在 `a.h5.js`和`a.js`，则 `a.h5.js`会选择作为 index.js 文件的依赖被打包进产物

## 📣 后续开发计划

1. 改为 ts
2. 完善readme.md 的API文档

## ⏰ 如果该库帮助了您，期待您的 star

Github 地址：[欢迎Star⭐️](https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages/webpack-upload-jfrog-plugin)
