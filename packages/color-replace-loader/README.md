## ð å³äºè¯¥åºçèæ¯

> å ä¸ºäººå·¥è¿è¡é¢è²æ¿æ¢çæçå¤ªä½ï¼æä»¥å¼åæ­¤æä»¶ï¼å¯ä»¥å¨æåæå»ºæ¶è¿è¡æ¹éèªå¨æ¿æ¢

å¦å¤ä¸ä¸ªå³äº`cssåéé¢è²æ¿æ¢ç loader é´é¡¹ç®ï¼` (var-color-replace-loader)[https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages/var-color-replace-loader]

## ð é¡¹ç®åç§°ååç

`åç§°ï¼` wenpack é¢è²æ¿æ¢å·¥å·

`åçï¼` ä½¿ç¨ loader éè¿æ­£åï¼æé¢è²æ¥æ¾åºæ¥ å¹¶è¿è¡æ¿æ¢

## ð¦ å®è£æ¹å¼

```bash
# ä¸ºå½åé¡¹ç®å®è£
npm i -D color-replace-loader
```

## ð éç½®å¦ä¸ï¼

å¯¹ webpack éç½®æä»¶ä¿®æ¹

```js
{
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader', 
    {
        loader: 'color-replace-loader',
        options: {
            // keyï¼è¦æ¿æ¢çé¢è²å¼ ï¼valueï¼æ¿æ¢åçç®æ å¼
            colorReplaceMap: {
                '#fff': '#000',
                '#aaa': '#bbb',
                '#ccc': '#ddd',
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
    background: #fff;
    color: #aaa;
    border-color: #ccc;
    color: #adc;
}
```

ç»è¿æ­¤ loader å¤çä»¥åçç»æå¦ä¸ï¼

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


## ð£ åç»­å¼åè®¡å

ææ 

## â° å¦æè¯¥åºå¸®å©äºæ¨ï¼æå¾æ¨ç star

Github å°åï¼[æ¬¢è¿Star â­ï¸](https://github.com/fu1996/webpack-plugins-loaders/tree/main/packages#:~:text=.%E2%80%8A.-,color%2Dreplace%2Dloader,-feat%3A%20update%20version)
