import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)),
);

export default [
  // browser-friendly UMD build
  // {
  //   input: "./src/index.ts",
  //   output: {
  //     name: pkg.name,
  //     file: pkg.module,
  //     format: "umd",
  //   },
  //   plugins: [
  //     resolve(), // so Rollup can find `ms`
  //     commonjs(), // so Rollup can convert `ms` to an ES module
  //     typescript(), // so Rollup can convert TypeScript to JavaScript
  //   ],
  // },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: './src/index.ts',
    // external: ["ms"],
    plugins: [
      typescript({
        sourceMap: true,
        inlineSources: true,
      }), // so Rollup can convert TypeScript to JavaScript
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
