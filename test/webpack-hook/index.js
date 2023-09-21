const path = require('path');
const basename = require('enhanced-resolve/lib/getPaths').basename;
const { validate } = require('schema-utils');
const schema = require('./schema.json');

/** @typedef {import('./types').WebpackResolverModePluginOptions} WebpackResolverModePluginOptions */

function addInfix(resourcePath, infix, extname) {
  extname = extname || path.extname(resourcePath);
  return (
    resourcePath.substring(0, resourcePath.length - extname.length) +
    '.' +
    infix +
    extname
  );
}

function stringIncludes(string, maybeString) {
  return typeof maybeString === 'string' ? string.includes(maybeString) : false;
}

module.exports = class WebpackResolverModePlugin {
  /**
   *
   * @param {WebpackResolverModePluginOptions=} options options object
   */
  constructor(options) {
    validate(schema, options, {
      name: 'WebpackResolverModePlugin',
    });
    const {
      mode = '',
      excludes = /node_modules/,
      includeFileSuffix = ['.js'],
      debug = false,
    } = options;
    this.mode = mode;
    (this.excludes =
      excludes && !Array.isArray(excludes) ? [excludes] : excludes),
      // this.include =  include && !Array.isArray(include) ? [include] : include,
      (this.includeFileSuffix = includeFileSuffix);
    this.debug = debug;
  }

  apply(resolver) {
    const target = resolver.ensureHook('file');
    const mode = this.mode;
    resolver
      .getHook('before-file')
      .tapAsync('AddModePlugin', (request, resolveContext, callback) => {
        // 请求的mode 存在，或者 填入的mode 为空
        if (request.mode || !mode) {
          return callback();
        }

        const resourcePath = request.path;
        const dirName = basename(resourcePath); // 当前文件的请求地址 index.js
        const {
          name, // 不包含文件后缀的名字
          ext, // 文件后缀
        } = path.parse(dirName);
        if (this.includeFileSuffix && !this.includeFileSuffix.includes(ext)) {
          return callback();
        }
        if (
          this.excludes &&
          this.excludes.some(function (excludes) {
            return (
              resourcePath.search(excludes) >= 0 ||
              stringIncludes(resourcePath, excludes)
            );
          })
        ) {
          return callback();
        }
        // if (
        //   this.include &&
        //   !this.include.some(function (i) {
        //     return resourcePath.search(i) >= 0 || stringIncludes(resourcePath, i);
        //   })
        // ) {
        //   return callback();
        // }
        const extname = path.extname(resourcePath);
        const obj = {
          mode,
        };
        obj.path = addInfix(resourcePath, mode, extname);
        obj.relativePath =
          request.relativePath && addInfix(request.relativePath, mode, extname);
        if (this.debug) {
          console.log(JSON.stringify(obj, null, 2));
        }
        resolver.doResolve(
          target,
          Object.assign({}, request, obj),
          'add mode: ' + mode,
          resolveContext,
          callback,
        );
      });
  }
};
