const colorRe = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

const varColor = (rawColor, colorMap) => {
    for (const key in colorMap) {
        if (Object.hasOwnProperty.call(colorMap, key)) {
            const element = colorMap[key];
            if (element === rawColor) {
                return key;
            }
        }
    }
};

function loader(source) {
    const {colorMap = {}} = this.getOptions();
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
