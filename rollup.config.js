import fileSize from "rollup-plugin-filesize";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

const plugins = [fileSize(), babel(), resolve()];

const constructBuildFiles = (filename = "index") => ({
  input: `lib/${filename}.js`,
  output: {
    file: `dist/${filename}.js`,
    format: "es"
  },
  external: ["react", "@storybook/react", "storybook-readme"],
  plugins
});

export default [constructBuildFiles()];
