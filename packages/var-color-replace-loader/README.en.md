# var-color-replace-loader

## Install this loader

```shell
npm i -D @fu1996/var-color-replace-loader
```

## How to configure

Take less as an example

```javascript
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', {
                    loader: '@fu1996/var-color-replace-loader',
                    options: {
                        // color map object
                        colorMap: {
                            '--color-cyan-1': '#f5f8ff',
                            '--color-emerald-7': '#049160',
                            '--color-indigo-5': '#41a7fa',
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
  background: #f5f8ff;
  color: #049160;
  border-color: #41a7fa;
  color: #adc;
}
```

After being processed by the loader, the content will change to the following code

```css
body {
  width: 200px;
  height: 200px;
  background: var(--color-cyan-1);
  color: var(--color-emerald-7);
  border-color: var(--color-indigo-5);
  color: #adc;
}
```

## Github

https://github.com/fu1996/var-color-replace-loader

If it helps you, please light up star. If there is a need, please mention issue.
