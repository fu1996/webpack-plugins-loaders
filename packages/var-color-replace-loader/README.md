## 🗝 关于该库的背景

> 因为人工进行颜色替换的效率太低，所以开发此插件，可以在打包构建时进行批量自动替换

另一一个关于`颜色替换的 loader 见项目：` (color-replace-loader)[https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages/color-replace-loader]

## 🎉 项目名称和原理

`名称：` css变量颜色替换工具

`原理：` 使用 loader 通过正则，把颜色查找出来 并对照已提供的 colorMap 的数据进行替换

## 📦 安装方式

```bash
# 为当前项目安装
npm i -D @fu1996/var-color-replace-loader
```

## 🏄 配置如下：

对 webpack 配置文件修改

```js
{
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader',
    {
        loader: '@fu1996/var-color-replace-loader',
        options: {
            // 将项目中使用到的 #f5f8ff 替换为颜色变量 --color-cyan-1
            colorMap: {
                '--color-cyan-1': '#f5f8ff',
                '--color-emerald-7': '#049160',
                '--color-indigo-5': '#41a7fa',
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
  background: #f5f8ff;
  background: #f5f8ff; // 忽略大小写匹配
  color: #049160;
  border-color: #41a7fa;
  color: #adc;
}
```

经过此 loader 处理以后的结果如下：

```css
body {
  width: 200px;
  height: 200px;
  background: var(--color-cyan-1);
  background: var(--color-cyan-1);
  color: var(--color-emerald-7);
  border-color: var(--color-indigo-5);
  color: #adc;
}
```

## 📣 后续开发计划

暂无

## ⏰ 如果该库帮助了您，期待您的 star

Github 地址：[欢迎Star ⭐️](https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages/var-color-replace-loader)
