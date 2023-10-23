var colorRe = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var getTargetColor = function (rawColor, colorReplaceMap) { return colorReplaceMap[rawColor] || rawColor; };
// 缓存结果
var memoizeMap = new Map();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loader(source) {
    // 不想安装loader-utils 包，直接看其源码 得知 v2 版本是使用的 this.getOptions() v3 版本用的  this.query
    var _a = (this.query || this.getOptions()).colorReplaceMap, colorReplaceMap = _a === void 0 ? {} : _a;
    // 借助Proxy 实现大小写忽略的功能
    var newColorReplaceMap = new Proxy(colorReplaceMap, {
        get: function (target, property) {
            return (target[property] ||
                target[property === null || property === void 0 ? void 0 : property.toLocaleLowerCase()] ||
                target[property === null || property === void 0 ? void 0 : property.toLocaleUpperCase()]);
        },
    });
    var matchResults = source.match(colorRe);
    if (Array.isArray(matchResults) && matchResults.length > 0) {
        Array.from(new Set(matchResults)).forEach(function (rawColor) {
            var resultKey = memoizeMap.get(rawColor);
            if (!resultKey) {
                resultKey = getTargetColor(rawColor, newColorReplaceMap);
                memoizeMap.set(rawColor, resultKey);
            }
            var reg = new RegExp(rawColor, 'g');
            source = source.replace(reg, resultKey);
        });
    }
    return source;
}

export { loader as default };
