const fs = require('fs');
const path = require('path');

function stringIncludes(string, maybeString) {
  return typeof maybeString === 'string' ? string.includes(maybeString) : false;
}
// 因为webpack5 有缓存机制，内容没有更改不会再发起解析，
// 此时删除node_module 里的.cache/webpack 目录即可
// 清理webpack 缓存
class DependencePlugin {
  /**
   * @param root0
   * @param root0.rootDir 生成的 文件的存储目录
   * @param root0.fileName 生成的文件名 默认为 index.txt
   * @param root0.clean 是否清除上次的产物
   * @param root0.exclude 根据此规则哪些文件不会生成在 filename 里 默认node_modules
   * @param root0.excludeFunc 【优先级大于exclude 规则】此方法接受 request 和 context 两个参数，如果此函数返回值为true, 则此路径不参与生成
   */
  constructor({
    rootDir,
    fileName,
    excludeFunc,
    clean = true,
    exclude = /node_modules/,
  }) {
    this.rootDir = rootDir;
    this.fileName = fileName;
    this.clean = clean;
    this.excludeFunc = excludeFunc;
    this.exclude = exclude && !Array.isArray(exclude) ? [exclude] : exclude;
    this.targetPath = path.join(this.rootDir, this.fileName || 'index.txt');
    // 需要清空 并且该文件存在
    if (this.clean && fs.existsSync(this.targetPath)) {
      fs.unlinkSync(this.targetPath);
    }
  }
  /**
   * @param {Resolver} resolver the resolver
   * @returns {void}
   */
  apply(resolver) {
    const source = resolver.ensureHook('after-result');
    source.tapAsync('AfterResultPlugin', (request, context, callback) => {
      const resourcePath = request.path;
      // 如果 命中 excludeFunc 就不写入文件
      if (this.excludeFunc && this.excludeFunc(request, context)) {
        return callback(null, request);
      }
      // 如果 命中 exclude 的规则 就不写入文件
      if (
        this.exclude &&
        this.exclude.some(function (exclude) {
          return (
            resourcePath.search(exclude) >= 0 ||
            stringIncludes(resourcePath, exclude)
          );
        })
      ) {
        return callback(null, request);
      }
      fs.appendFileSync(this.targetPath, request.path + '\r\n', {
        encoding: 'utf-8',
      });
      callback(null, request);
    });
  }
}
module.exports = DependencePlugin;
