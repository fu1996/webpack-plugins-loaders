# color-replace-loader

## Install this loader
```shell
npm i -D color-replace-loader
```

## How to configure
Take less as an example
```javascript
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', {
                    loader: path.resolve(__dirname, 'loaders/afterBabel'),
                    options: {
                        // color map object
                        colorReplaceMap: {
                            '#fff': '#000',
                            '#aaa': '#bbb',
                            '#ccc': '#ddd',
                        },
                    }
                },]
            },
```
Assume that the contents of the current index.less file are
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

After being processed by the loader, the content will change to the following code
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

## Github
https://github.com/fu1996/color-replace-loader.git

If it helps you, please light up star. If there is a need, please mention issue.
