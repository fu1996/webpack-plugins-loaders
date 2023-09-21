import { LoaderOptions } from '../types';

const colorRe = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

const getTargetColor = (
  rawColor: string,
  colorReplaceMap: { [key: string]: string },
) => colorReplaceMap[rawColor] || rawColor;

// 缓存结果
const memoizeMap = new Map<string, string>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loader(this: any, source: string) {
  // 不想安装loader-utils 包，直接看其源码 得知 v2 版本是使用的 this.getOptions() v3 版本用的  this.query
  const { colorReplaceMap = {} } = this.query || this.getOptions();
  // 借助Proxy 实现大小写忽略的功能
  const newColorReplaceMap = new Proxy(colorReplaceMap, {
    get: function (target, property: string) {
      return (
        target[property] ||
        target[property?.toLocaleLowerCase()] ||
        target[property?.toLocaleUpperCase()]
      );
    },
  });
  const matchResults = source.match(colorRe);
  if (Array.isArray(matchResults) && matchResults.length > 0) {
    Array.from(new Set(matchResults)).forEach((rawColor) => {
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

export default loader;

/**
 * expose public types via declaration merging
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace loader {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Options extends LoaderOptions {}
}
