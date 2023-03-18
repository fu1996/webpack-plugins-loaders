const colorRe = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

const varColor = (rawColor, colorMap) => {
    for (const key in colorMap) {
        if (Object.hasOwnProperty.call(colorMap, key)) {
            const element = colorMap[key];
            if (rawColor.toLocaleLowerCase() === element.toLocaleLowerCase()) {
                return key;
            }
        }
    }
};

function loader(source) {
    // 不想安装loader-utils 包，直接看其源码 得知 v2 版本是使用的 this.getOptions() v3 版本用的  this.query
    const {colorMap = {}} = this.query || this.getOptions();
    const matchResults = source.match(colorRe);
    if (Array.isArray(matchResults) && matchResults.length > 0) {
        Array.from(new Set(matchResults)).forEach(rawColor => {
            const key = varColor(rawColor, colorMap);
            if (key) {
                const resultKey = `var(${key})`;
                const reg = new RegExp(rawColor, 'g');
                source = source.replace(reg, resultKey);
            }
        });
    }
    return source;
}

module.exports = loader;
