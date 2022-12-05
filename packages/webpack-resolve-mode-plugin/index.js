const path = require("path");
const basename = require("enhanced-resolve/lib/getPaths").basename;
const addInfix = require("./add-infix");

function stringIncludes(string, maybeString) {
  return typeof maybeString === "string" ? string.includes(maybeString) : false;
}

module.exports = class WebpackResolverModePlugin {
  constructor({ mode, exclude, includeFileSuffix, debug = false }) {
    this.mode = mode;
    this.exclude =  exclude && !Array.isArray(exclude) ? [exclude] : exclude,
    // this.include =  include && !Array.isArray(include) ? [include] : include,
    this.includeFileSuffix = includeFileSuffix;
    this.debug = debug;
  }

  apply(resolver) {
    const target = resolver.ensureHook("file");
    const mode = this.mode;
    resolver
      .getHook("before-file")
      .tapAsync("AddModePlugin", (request, resolveContext, callback) => {
        if (request.mode) {
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
          this.exclude &&
          this.exclude.some(function (exclude) {
            return (
              resourcePath.search(exclude) >= 0 || stringIncludes(resourcePath, exclude)
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
          "add mode: " + mode,
          resolveContext,
          callback
        );
      });
  }
};
