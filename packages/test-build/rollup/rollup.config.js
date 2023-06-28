import strip from "@rollup/plugin-strip";

export default [
  {
    input: "src/index.js",
    output: {
      dir: "dist/esm",
      format: "esm",
      entryFileNames: "[name].mjs",
    },
    plugins: [
      strip({
        include: "**/*.js",
        debugger: true,
        functions: ["console.*"],
        labels: [],
        sourceMap: true,
      }),
    ],
  },
  // {
  //   input: "src/ts/main.ts",
  //   output: {
  //     file: "lib/bundle.cjs.js",
  //     format: "cjs",
  //     name: "myLib",
  //   },
  // },
  //   {
  //     input: "src/main.js",
  //     output: {
  //       file: "lib/bundle.cjs.js",
  //       format: "cjs",
  //       name: "myLib",
  //     },
  //   },
  //   {
  //     input: "src/main.js",
  //     external: [],
  //     output: {
  //       file: "lib1/bundle.js",
  //       format: "esm",
  //       sourcemap: true,
  //       name: "myLib",
  //       globals: {
  //         lodash: "_", //告诉rollup,全局变量_就是lodash
  //       },
  //     },
  //     plugins: [],
  //   },
  //   {
  //     input: "src/commonjs/main.js",
  //     external: [],
  //     output: {
  //       file: "lib2/bundle.js",
  //       format: "esm",
  //       sourcemap: true,
  //       name: "myLib",
  //       globals: {
  //         lodash: "_", //告诉rollup,全局变量_就是lodash
  //       },
  //     },
  //     plugins: [],
  //   },
];
