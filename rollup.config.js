import fileSize from 'rollup-plugin-filesize'
import babel from 'rollup-plugin-babel'

const plugins = [fileSize(), babel()]

const constructBuildFiles = (filename = 'index') => ({
  input: `lib/${filename}.js`,
  output: {
    file: `dist/${filename}.js`,
    format: 'es'
  },
  external: ['react', 'lodash.isfunction', 'lodash.reduce', 'storybook-readme'],
  plugins
})

export default [constructBuildFiles()]
