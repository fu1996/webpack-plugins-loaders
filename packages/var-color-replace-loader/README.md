## ð å³äºè¯¥åºçèæ¯

> å ä¸ºäººå·¥è¿è¡é¢è²æ¿æ¢çæçå¤ªä½ï¼æä»¥å¼åæ­¤æä»¶ï¼å¯ä»¥å¨æåæå»ºæ¶è¿è¡æ¹éèªå¨æ¿æ¢

å¦ä¸ä¸ä¸ªå³äº`é¢è²æ¿æ¢ç loader è§é¡¹ç®ï¼` (color-replace-loader)[https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages/color-replace-loader]

## ð é¡¹ç®åç§°ååç

`åç§°ï¼` cssåéé¢è²æ¿æ¢å·¥å·

`åçï¼` ä½¿ç¨ loader éè¿æ­£åï¼æé¢è²æ¥æ¾åºæ¥ å¹¶å¯¹ç§å·²æä¾ç colorMap çæ°æ®è¿è¡æ¿æ¢

## ð¦ å®è£æ¹å¼

```bash
# ä¸ºå½åé¡¹ç®å®è£
npm i -D var-color-replace-loader
```

## ð éç½®å¦ä¸ï¼

å¯¹ webpack éç½®æä»¶ä¿®æ¹

```js
{
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader', 
    {
        loader: 'var-color-replace-loader',
        options: {
            // å°é¡¹ç®ä¸­ä½¿ç¨å°ç #f5f8ff æ¿æ¢ä¸ºé¢è²åé --color-cyan-1
            colorMap: {
                '--color-cyan-1': '#f5f8ff',
                '--color-emerald-7': '#049160',
                '--color-indigo-5': '#41a7fa',
            },
        }
    }]
},
```

## ð demo
å½å less æä»¶å¦ä¸åå®¹

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

ç»è¿æ­¤ loader å¤çä»¥åçç»æå¦ä¸ï¼

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


## ð£ åç»­å¼åè®¡å

ææ 

## â° å¦æè¯¥åºå¸®å©äºæ¨ï¼æå¾æ¨ç star

Github å°åï¼[æ¬¢è¿Star â­ï¸](https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages/var-color-replace-loader)
