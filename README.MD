# tiny-ansi-colors

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
[![Dependency Status][dependency-badge]][dependency-url]
[![devDependency Status][devDependency-badge]][devDependency-url]

yet another ansi color module

## But why?

Not interested in pulling in > 5kb into a library to get coloured terminal output.

This library is as bare-bones as it gets.

There is no:
* fancy api (pojo is where it is at)
* mutation of string prototype (wtf colors?!)
* checking for color support (do it yourself!)
* truecolor / ansi256 ("16 colors should be enough for anyone!")

## Exports

* `./lib/index.js` - main export. cjs bundle. transpiled to node@current, exports {colors}

* `./es/index.mjs` - mjs bundle, exports {colors}

* `./dist/tiny-ansi-colors` - browser bundle (es3), exported to window `tinyAnsiColors.colors`

## Usage

```js
const {colors} = require('tiny-ansi-colors')
// or import {colors} from 'tiny-ansi-colors/es'

colors('hello!', {color: 'red', background: 'green', bold: true, underline: true})
// \u001b[31m\u001b[42m\u001b[1m\u001b[4mhello!\u001b[24m\u001b[22m\u001b[49m\u001b[39m
```

## API

colors(text: string, options: *?)

Supported options:

* _color_ {string} color to use for foreground
* _background_ {string} color to use for background
* _bold_ {boolean} pass true to get a bold color
* _dim_ {boolean} pass true to get a dim color
* _underline_ {boolean} pass true to underline text
* _reverse_ {boolean} pass true to reverse the codes.

### Supported Colors

 * Black
 * Red
 * Green
 * Yellow
 * Blue
 * Magenta
 * Cyan
 * White

Colors are case-insensitive. You can include `bright`, `_bright`, `-bright`, `bright-` or `bright_` to use the bright variant.

Hex codes (e.g., '#fff', '#fffff'), or rgb strings (e.g., rgba(100%, 100%, 100%), rgb(255, 255, 255); note that alpha is ignored) can be passed. These will be converted to the approximate ansi code. Any rgb value <= 64 is coerced to black.

If an invalid color is provided, this module with throw an error.

[npm-badge]: https://badge.fury.io/js/tiny-ansi-colors.svg
[npm-url]: https://badge.fury.io/js/tiny-ansi-colors
[travis-badge]: https://travis-ci.org/tswaters/tiny-ansi-colors.svg?branch=master
[travis-url]: https://travis-ci.org/tswaters/tiny-ansi-colors
[coveralls-badge]: https://coveralls.io/repos/github/tswaters/tiny-ansi-colors/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/tswaters/tiny-ansi-colors?branch=master
[dependency-badge]: https://david-dm.org/tswaters/tiny-ansi-colors.svg
[dependency-url]: https://david-dm.org/tswaters/tiny-ansi-colors
[devDependency-badge]: https://david-dm.org/tswaters/tiny-ansi-colors/dev-status.svg
[devDependency-url]: https://david-dm.org/tswaters/tiny-ansi-colors?type=dev
