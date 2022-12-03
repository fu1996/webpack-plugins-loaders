# 一个国际化翻译工具
原理是借用谷歌翻译的api 读取 esm 的待翻译js 文件，进行翻译

# 全局安装

```bash
npm i -g i18n-translate-tool
```

# 测试安装是否成功
安装成功后，`itt` 会全局可用

```bash
itt -h
```
输入内容如下：
```bash
Options:
  -V, --version                output the version number
  -f, --file [file]            导入待翻译的文件以及目标语言
  -d, --dist [file]            输出翻译后的结果，默认会覆盖源文件
  -p, --param [translate key]  取被翻译文件对象的 keys 或者 values (default: "keys")
  -h, --help                   display help for command
```

# 配置如下：

- -f, --file 被翻译的文件

- -d, --dist 国际化之后要生成的文件名（生成在当前目录）

- -p, --param 取被翻译文件对象的 keys 或者 values (default: "keys")

-- -h, --help 帮助文档

# 快捷使用
默认 取 对象的 keys 做为翻译源 
```bash
itt ./test/1.js
```

# demo

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

# 后续开发计划

- 支持指定翻译源
- 支持配置文件化
- 支持增加忽略文件或者包含文件规则
- 增加监听文件变化 chokidar https://www.npmjs.com/package/chokidar