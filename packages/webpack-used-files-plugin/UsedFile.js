const { omit } = require('ramda');
const fs = require('fs');
const path = require('path');

/** @typedef {import("webpack").Compiler} Compiler */
let total = 0;

class UsedFils {
  /**
   * Apply the plugin
   * @param {Compiler} compiler compiler instance
   * @returns {void}
   */
  apply(compiler) {
    compiler.hooks.shouldEmit.tap(this.constructor.name, (compilation) => {
      const data = Array.from(compilation.fileDependencies.values());
      fs.appendFileSync('./file.txt', data.toString(), 'utf8');
      console.log('shouldEmit', data.length);
    });
    // compiler.hooks.compilation.tap(this.constructor.name, compilation => {
    //     compilation.hooks.finishModules.tapAsync(
    //         this.constructor.name,
    //         (modules, callback) => {
    //             // console.log('finishModules', modules);
    //             const result = [];
    //             for (const module of modules) {
    //                 // console.log('module', module);
    //                 if (
    //                     module.resource
    //       && !module.resource.includes('node_modules')
    //       && !module.resource.startsWith('data:')
    //                 ) {
    //                     const moduleInfo = {
    //                         resource: module.resource,
    //                         type: module.type,
    //                         // resourceResolveData: omit(
    //                         //     ['descriptionFileData', 'context'],
    //                         //     module.resourceResolveData,
    //                         // ),
    //                     };
    //                     result.push(moduleInfo);
    //                 }
    //             }
    //             if (result.length) {
    //                 total += result.length;
    //                 fs.appendFileSync('./result.json', JSON.stringify(result, null, 2) + ',');
    //             }
    //             console.log('result:', result.length, total);
    //             callback();
    //         },
    //     );
    // });

    // compiler.hooks.finishModules.tap(this.constructor.name, (factory) => {
    //   factory.hooks.afterResolve.tapPromise(
    //     this.constructor.name,
    //     (resolveData) => {
    //       console.log('afterResolve', resolveData);
    //       return new Promise(resolveData);
    //     }
    //   );
    // });
  }
}

module.exports = UsedFils;
