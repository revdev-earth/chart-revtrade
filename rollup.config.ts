// rollup.config.js
import { swc } from "rollup-plugin-swc3";

import terser from "@rollup/plugin-terser";

import { generateDtsBundle } from "rollup-plugin-dts-bundle-generator";

export default {
  input: "src/index.ts",

  output: {
    dir: "lib",
    plugins: [terser()],
  },

  external: ["react/jsx-runtime", "react"],

  plugins: [swc(), generateDtsBundle()],
};
