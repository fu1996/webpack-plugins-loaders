## 🗝 关于该库的背景

> 随着需求的迭代，项目中的废弃代码和文件越来越多，但是耗费人力去区分哪些文件会被打包，哪些文件不会被打包，效率太低，且容易出现未知错误，所以有了此款工具。`此款工具只会帮你找到 webpack 打包过程中使用的文件，并默认生成index.txt 文件去记录。`（使用到的文件你都找到了，没用到的文件 等于 总文件 减去 使用到的文件）

## 🎉 项目名称，原理以及注意事项

`名称：` 查找项目中用到的文件（会被webpack打包所使用）的工具

`原理：` 借用 `enhanced-resolve`的 hook 拦截最后 webpack 解析出的文件路径，并添加到文件中

`注意事项：`

1. 目前发现 webpack5 存在缓存机制，导致 第二次生成的 index.txt 文件少入 本次打包使用的文件，建议在 使用本插件前清空 webpack 的缓存，删除 `node_modules/.cache/webpack`文件夹，再次尝试打包

```bash
rm -rf node_modules/.cache/webpack
```

2.如果使用了 `happyPack` 或 `thread-loader` 等 **多线程打包**工具，会导致 产生的目标文件 index.txt 中出现多个重复的路径。

## 📦 安装方式

```bash
# 为当前项目安装
npm i -D @fu1996/webpack-used-files-plugins
```

## 🏄 配置如下：

- rootDir ：生成的 文件的存储目录
- fileName ：生成的文件名 默认为 index.txt
- clean ：是否清除上次该插件生成的产物（如：index.txt）
- exclude ：【支持字符串和正则及其组成的数组】根据此规则哪些文件不会生成在 filename 里 默认node_modules
- excludeFunc ：【优先级大于exclude 规则】此方法接受 request 和 context 两个参数，如果此函数返回值为true, 则此路径不会生成在 文件中

## 📝 demo

首先修改 webpack的 配置如下：

```js
// 引入该插件
const UsedFilesPlugin = require('@fu1996/webpack-used-files-plugin');
```

```js
resolve: {
    plugins: [
      new UsedFilesPlugin({
        rootDir: __dirname,
      })
    ],
},
```

然后运行 你的 webpack 打包命令即可

即可在当前项目里看到 包含了webpack 本次打包所依赖文件 的 `index.txt` 文件

## 📣 后续开发计划

- 输出结果去重
- 移动使用到文件到指定目录
- 增加单元测试

## ⏰ 如果该库帮助了您，期待您的 star

Github 地址：[欢迎Star⭐️](https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages/webpack-used-files-plugin)
