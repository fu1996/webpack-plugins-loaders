## 🗝 关于该库的背景

> 因为每次提取出的带有中文的原js 文件，都要手动去复制出中文，然后粘贴进谷歌浏览器，获取到复制结果以后，再把结果粘贴到 js 文件中，流程太长，且人工容易出错，所以有了此款工具。

## 🎉 项目名称和原理

`名称：` 国际化翻译脚手架工具

`原理：` 借用谷歌翻译的api 读取 esm 的待翻译js 文件，进行翻译并修改源文件或者产生新文件


## ✨ 特性
- 解决枯燥的CV工作
- 兼顾 各个项目中 以中文为key，(如： `"苹果": "apple"`，)或者英文为key，(如：`"key1":"apple"`)的情况


## 📦 安装方式

```bash
# 全局安装（推荐）
npm i -g i18n-translate-tool
# or 为当前项目安装
npm i -D i18n-translate-tool
```

## 🔔 测试安装是否成功

```bash
# 全局安装的全局测试
itt -h
# 当前项目安装的
npx itt -h
```

输出内容如下：
```bash
Options:
  -V, --version                output the version number
  -f, --file [file]            导入待翻译的文件以及目标语言
  -d, --dist [file]            输出翻译后的结果，默认会覆盖源文件
  -p, --param [translate key]  取被翻译文件对象的 keys 或者 values (default: "keys")
  -h, --help                   display help for command
```

## 🏄 配置如下：

- -f, --file 被翻译的文件

- -d, --dist 国际化之后要生成的文件名（生成在当前目录）

- -p, --param 取被翻译文件对象的 keys 或者 values (default: "keys")

-- -h, --help 帮助文档

## 💿 快捷使用
默认 取 对象的 keys 做为翻译源 
```bash
itt ./test/1.js
```

## 📝 demo

要翻译文件名为 2.js 的文件
`itt -f 2.js -p keys` 
(-f 指定读取的文件，-p 指定取 该文件对象里的keys 做为翻译源)

2.js 文件内容如下

```js
export default {
  '我是默认导出对象': '',
  '我是默认导出对象3': '',
  '我是默认导出对象2': '',
  '我是默认导出对象1': '',
}

export const a = {
  '你好': '',
  '我好': '',
}
```

结果如下：

```js
export default {
  "我是默认导出对象": "I am the default export object",
  "我是默认导出对象3": "I am the default export object 3",
  "我是默认导出对象2": "I am the default export object 2",
  "我是默认导出对象1": "I am the default export object 1"
}

export const a = {
  "你好": "Hello",
  "我好": "I'm good"
}

```

## 📣 后续开发计划

- 支持指定翻译源
- 支持配置文件化
- 支持增加忽略文件或者包含文件规则
- 增加监听文件变化 chokidar https://www.npmjs.com/package/chokidar

## ⏰ 如果该库帮助了您，期待您的 star

Github 地址：[欢迎Star⭐️](https://github.com/fu1996/color-replace-loader.git)


