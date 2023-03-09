const colorRe = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

const getTargetColor = (rawColor, colorReplaceMap) => colorReplaceMap[rawColor] || colorReplaceMap[rawColor?.toLocaleLowerCase()] ||colorReplaceMap[rawColor]?.toLocaleUpperCase() || rawColor;

function loader(source) {
    // 不想安装loader-utils 包，直接看其源码 得知 v2 版本是使用的 this.getOptions() v3 版本用的  this.query
    const {colorReplaceMap = {}} = this.query || this.getOptions();
    const matchResults = source.match(colorRe);
    if (Array.isArray(matchResults) && matchResults.length > 0) {
        Array.from(new Set(matchResults)).forEach(rawColor => {
            const resultKey = getTargetColor(rawColor, colorReplaceMap);
            const reg = new RegExp(rawColor, 'g');
            source = source.replace(reg, resultKey);
        });
    }
    return source;
}

module.exports = loader;
