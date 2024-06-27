const babel = require("@rollup/plugin-babel").default;
const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve").default;
const path = require("path");

module.exports = [
  {
    input: "src/index.ts",
    output: {
      dir: "esm",
      format: "es",
      entryFileNames: "[name].mjs",
      preserveModules: true,
      preserveModulesRoot: path.dirname("src/index.ts"),
    },
    plugins: [
      resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
      commonjs(),
      babel({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        babelHelpers: "bundled",
        rootMode: "upward",
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "cjs",
    },
    plugins: [
      resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
      commonjs(),
      babel({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        babelHelpers: "bundled",
        rootMode: "upward",
      }),
    ],
  },
];
