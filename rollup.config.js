import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy-assets'
export default {
  input: "src/index.js",
  output: {
    file: "dist/main.js",
    format: "iife",
  },
  plugins: [
    postcss({
      plugins: [],
      extract: true,
      extract: "css/main.css",
    }),
    copy({
      assets:[
        'src/Assets'
      ]
    })
  ],
};
