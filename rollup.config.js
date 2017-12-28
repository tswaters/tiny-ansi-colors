
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const config = (browser, minify) => {

  const babel_plugins = []
  if (browser) {
    babel_plugins.push(
      'transform-es3-property-literals',
      'transform-es3-member-expression-literals'
    )
  }

  const plugins = [
    babel({
      plugins: babel_plugins,
      presets: [
        ['@babel/preset-env', {
          loose: true,
          modules: false,
          targets: browser
            ? {browsers: ['ie >= 8']}
            : {node: '4'}
        }]
      ]
    })
  ]

  if (minify) {
    plugins.push(uglify())
  }

  return {
    input: './src/index.js',
    output: browser ? {
      file: `dist/tiny-ansi-colors.umd${minify ? '.min' : ''}.js`,
      name: 'tinyAnsiColors',
      format: 'umd'
    } : [{
      file: './es/index.mjs',
      format: 'es'
    }, {
      file: './dist/tiny-ansi-colors.js',
      format: 'cjs'
    }],
    plugins
  }

}

export default [
  config(true, false),  // browser.unmin
  config(true, true),   // browser.min
  config(false)         // nodejs (es, cjs)
]
