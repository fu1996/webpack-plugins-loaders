const colorRe = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

const getTargetColor = (rawColor, colorReplaceMap) => colorReplaceMap[rawColor] || rawColor;

// 缓存结果
const memoizeMap = new Map();

function loader(source) {
    // 不想安装loader-utils 包，直接看其源码 得知 v2 版本是使用的 this.getOptions() v3 版本用的  this.query
    const {colorReplaceMap = {}} = this.query || this.getOptions();
    // 借助Proxy 实现大小写忽略的功能
    const newColorReplaceMap = new Proxy(colorReplaceMap, {
        get: function (target, property, receiver) {
            return target[property] || target[property.toLocaleLowerCase && property?.toLocaleLowerCase()] || target[property.toLocaleUpperCase && property?.toLocaleUpperCase()];
        },
    });
    const matchResults = source.match(colorRe);
    if (Array.isArray(matchResults) && matchResults.length > 0) {
        Array.from(new Set(matchResults)).forEach(rawColor => {
            let resultKey = memoizeMap.get(rawColor);
            if (!resultKey) {
                resultKey = getTargetColor(rawColor, newColorReplaceMap);
                memoizeMap.set(rawColor, resultKey);
            }
            const reg = new RegExp(rawColor, 'g');
            source = source.replace(reg, resultKey);
        });
    }
    return source;
}

module.exports = loader;
