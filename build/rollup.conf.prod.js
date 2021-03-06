import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

const pkg = require('../package.json')

const version = pkg.version

const babelConfig = {
  // runtimeHelpers: true,
  exclude: 'node_modules/**',
  plugins: ['external-helpers'],
}

const nodeResolveOptions = {
  module: true,
  jsnext: true,
  extensions: ['.js', '.vue'],
}

export default {
  banner: `/*
    portal-vue
    Version: ${version}
    Licence: MIT
    (c) Thorsten Lünborg
  */
  `,
  entry: './src/index.js',
  external: ['vue'],
  globals: {
    vue: 'Vue',
  },
  format: 'umd',
  moduleName: 'PortalVue',
  dest: './dist/portal-vue.js', // equivalent to --output
  sourceMap: true,
  plugins: [babel(babelConfig), nodeResolve(nodeResolveOptions), commonjs()],
}
