import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import replaceHtmlVars from 'rollup-plugin-replace-html-vars'

const production = !process.env.ROLLUP_WATCH

const appVersion = process.env.CIRCLE_TAG || 'treinamentos'

const formatedAppVersion = `'${appVersion}'`

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js',
  },
  plugins: [
    replace({
      'VERSION': formatedAppVersion,
    }),
    svelte({
      dev: !production,
      css: css => {
        css.write('public/bundle.css')
      },
    }),
    resolve(),
    commonjs(),
    !production && livereload('public'),
    production && terser(),
    replaceHtmlVars({
      files: 'public/index.html',
      from: [/bundle.js?.*\'/, /bundle.css?.*\'/],
      to: [`bundle.js?version=${appVersion}'`, `bundle.css?version=${appVersion}'`],
    })
  ],
  watch: {
    clearScreen: false,
  },
}
