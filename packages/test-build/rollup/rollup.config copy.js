import path from "node:path";
import { fileURLToPath } from "url";
import typescript from "rollup-plugin-typescript2";
import nodeResolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import { replaceTscAliasPaths } from "tsc-alias";

import { defineConfig } from "rollup";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**专门用来转换.ts和.d.ts文件中的别名路径为相对路径 */
const tscAlias = () => {
  return {
    name: "rollup-plugin-tsc-alias",
    writeBundle: async () => {
      const outDirs = ["./dist/esm", "./dist/cjs", "./dist/types"];
      for (const _dir of outDirs) {
        await replaceTscAliasPaths({
          resolveFullPaths: true,
          outDir: _dir,
        });
      }

      return;
    },
  };
};

const config = defineConfig([
  {
    input: "src/index.ts",
    external: ["axios", "fs-extra"],
    output: {
      //   dir: "dist/types",
      file: "dist/types/index.d.ts",
      format: "esm",
      //   preserveModules: true,
    },
    plugins: [dts()],
  },
  {
    input: "src/index.ts",
    external: ["axios", "fs-extra"],
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        preserveModules: true,
        entryFileNames: "[name].mjs",
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        preserveModules: true,
        entryFileNames: "[name].cjs",
      },
    ],
    plugins: [json(), nodeResolve(), commonjs(), typescript(), tscAlias()],
  },
]);

export default config;
