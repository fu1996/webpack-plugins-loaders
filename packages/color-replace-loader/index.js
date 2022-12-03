const colorRe = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

const getTargetColor = (rawColor, colorReplaceMap) => colorReplaceMap[rawColor] || rawColor;

function loader(source) {
    const {colorReplaceMap = {}} = this.getOptions();
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
