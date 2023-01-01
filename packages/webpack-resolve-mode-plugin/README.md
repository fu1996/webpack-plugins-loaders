## 🗝 关于该库的背景

- 公有云/私有云几乎相同的逻辑要使用于 其他端，仅仅是UI上不一致，`总结`：一个仓库，根据不同的配置去适配多端
- 客户的数量增加，导致某些标准化的请求难以满足客户，出现了定制化需求的同时，还要保证标准化的功能，`总结`：既要日常迭代的标准化，又要专属于某客户的定制化


## 🎉 项目名称，原理以及注意事项

`名称：` webpack条件编译插件（根据文件后缀进行条件编译，参考自滴滴开源的MDX跨端小程序）

`原理：` 借用 `enhanced-resolve`的 hook 拦截其解析文件之前的api，进行不同的场景后缀判断

`注意事项：`

暂未发现


## 📦 安装方式

```bash
# 为当前项目安装
npm i -D @fu1996/webapck-resolver-mode-plugin
```

## 🏄 配置如下：

- mode ：【可为空，只支持字符串，默认为: ''】指定哪些后缀在优先被打包
- excludes ：【支持字符串和正则及其组成的数组,默认为/node_modules/】根据此规则哪些文件或者文件夹参与此次条件打包
- includeFileSuffix ：【支持字符串组成的数组，默认为['.js']】指定哪些文件后缀参与条件打包
- debug ：【仅支持布尔值】是否开启debug 模式

## 📝 demo

首先修改 webpack的 配置如下：

```js
// 引入该插件
const WebpackResolverModePlugin = require('@fu1996/webapck-resolver-mode-plugin');
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
import a from './a'

console.log('2222',a)
```

假设同时 存在 `a.h5.js`和`a.js`，则 `a.h5.js`会选择作为 index.js 文件的依赖被打包进产物

## 📣 后续开发计划
1. 改为 ts
2. 完善readme.md 的API文档

## ⏰ 如果该库帮助了您，期待您的 star

Github 地址：[欢迎Star⭐️](https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages/webpack-resolve-mode-plugin)


