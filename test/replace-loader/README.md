## 🗝 关于该库的背景222

> 因为人工替换的效率太低，所以开发此插件，可以在打包构建时进行批量自动替换

另外一个关于`css变量颜色替换的 loader 间项目：` (var-replace-loader)[https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages/var-replace-loader]

## 🎉 项目名称和原理

`名称：` webpack 颜色替换工具

`原理：` 根据配置并进行替换

## 📦 安装方式

```bash
# 为当前项目安装
npm i -D @fu1996/replace-loader
```

## 🏄 配置如下：

对 webpack 配置文件修改

```js
{
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader', 
    {
        loader: 'replace-loader',
        options: {
            // key：要替换的颜色值 ，value：替换后的目标值
            colorReplaceMap: {
                '#fff': '#000',
                '#aaa': '#bbb',
                '#ccc': '#ddd',
            },
        }
    }]
},
```

## 📝 demo
当前 less 文件如下内容

```less
body {
    width: 200px;
    height: 200px;
    background: #fff;
    color: #aaa;
    border-color: #ccc;
    color: #adc;
}
```

经过此 loader 处理以后的结果如下：

```css
body {
    width: 200px;
    height: 200px;
    background: #000;
    color: #bbb;
    border-color: #ddd;
    color: #adc;
}
```


## 📣 后续开发计划

暂无

## ⏰ 如果该库帮助了您，期待您的 star

Github 地址：[欢迎Star ⭐️](https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages#:~:text=.%E2%80%8A.-,color%2Dreplace%2Dloader,-feat%3A%20update%20version)
