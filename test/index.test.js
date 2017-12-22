
import assert from 'assert'
import {colors} from '../src'

describe('colors', () => {

  it('should do nothing with no options', () => {
    assert.equal(colors('hello'), 'hello')
  })

  it('should throw for invalid colors', () => {
    assert.throws(() => colors('hello', {color: 'totally-invalid'}), /invalid color: totally-invalid/)
    assert.throws(() => colors('hello', {background: 'totally-invalid'}), /invalid color: totally-invalid/)
  })

  it('should do colors properly', () => {

    assert.equal(colors('hello', {color: 'black'}), '\u001b[30mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'red'}), '\u001b[31mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'green'}), '\u001b[32mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'yellow'}), '\u001b[33mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'blue'}), '\u001b[34mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'magenta'}), '\u001b[35mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'cyan'}), '\u001b[36mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'white'}), '\u001b[37mhello\u001b[39m')

    assert.equal(colors('hello', {color: 'black_bright'}), '\u001b[90mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'red_bright'}), '\u001b[91mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'green_bright'}), '\u001b[92mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'yellow_bright'}), '\u001b[93mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'blue_bright'}), '\u001b[94mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'magenta_bright'}), '\u001b[95mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'cyan_bright'}), '\u001b[96mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'white_bright'}), '\u001b[97mhello\u001b[39m')

    assert.equal(colors('hello', {color: 'black-bright'}), '\u001b[90mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'red-bright'}), '\u001b[91mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'green-bright'}), '\u001b[92mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'yellow-bright'}), '\u001b[93mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'blue-bright'}), '\u001b[94mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'magenta-bright'}), '\u001b[95mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'cyan-bright'}), '\u001b[96mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'white-bright'}), '\u001b[97mhello\u001b[39m')

    assert.equal(colors('hello', {color: 'blackBright'}), '\u001b[90mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'redBright'}), '\u001b[91mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'greenBright'}), '\u001b[92mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'yellowBright'}), '\u001b[93mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'blueBright'}), '\u001b[94mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'magentaBright'}), '\u001b[95mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'cyanBright'}), '\u001b[96mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'whiteBright'}), '\u001b[97mhello\u001b[39m')

    assert.equal(colors('hello', {color: 'bright_black'}), '\u001b[90mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright_red'}), '\u001b[91mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright_green'}), '\u001b[92mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright_yellow'}), '\u001b[93mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright_blue'}), '\u001b[94mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright_magenta'}), '\u001b[95mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright_cyan'}), '\u001b[96mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright_white'}), '\u001b[97mhello\u001b[39m')

    assert.equal(colors('hello', {color: 'bright-black'}), '\u001b[90mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright-red'}), '\u001b[91mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright-green'}), '\u001b[92mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright-yellow'}), '\u001b[93mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright-blue'}), '\u001b[94mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright-magenta'}), '\u001b[95mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright-cyan'}), '\u001b[96mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'bright-white'}), '\u001b[97mhello\u001b[39m')

    assert.equal(colors('hello', {color: 'brightBlack'}), '\u001b[90mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'brightRed'}), '\u001b[91mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'brightGreen'}), '\u001b[92mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'brightYellow'}), '\u001b[93mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'brightBlue'}), '\u001b[94mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'brightMagenta'}), '\u001b[95mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'brightCyan'}), '\u001b[96mhello\u001b[39m')
    assert.equal(colors('hello', {color: 'brightWhite'}), '\u001b[97mhello\u001b[39m')
  })

  it('should do background colors properly', () => {

    assert.equal(colors('hello', {background: 'black'}), '\u001b[40mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'red'}), '\u001b[41mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'green'}), '\u001b[42mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'yellow'}), '\u001b[43mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'blue'}), '\u001b[44mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'magenta'}), '\u001b[45mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'cyan'}), '\u001b[46mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'white'}), '\u001b[47mhello\u001b[49m')

    assert.equal(colors('hello', {background: 'black_bright'}), '\u001b[100mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'red_bright'}), '\u001b[101mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'green_bright'}), '\u001b[102mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'yellow_bright'}), '\u001b[103mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'blue_bright'}), '\u001b[104mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'magenta_bright'}), '\u001b[105mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'cyan_bright'}), '\u001b[106mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'white_bright'}), '\u001b[107mhello\u001b[49m')

    assert.equal(colors('hello', {background: 'black-bright'}), '\u001b[100mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'red-bright'}), '\u001b[101mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'green-bright'}), '\u001b[102mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'yellow-bright'}), '\u001b[103mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'blue-bright'}), '\u001b[104mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'magenta-bright'}), '\u001b[105mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'cyan-bright'}), '\u001b[106mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'white-bright'}), '\u001b[107mhello\u001b[49m')

    assert.equal(colors('hello', {background: 'blackBright'}), '\u001b[100mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'redBright'}), '\u001b[101mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'greenBright'}), '\u001b[102mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'yellowBright'}), '\u001b[103mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'blueBright'}), '\u001b[104mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'magentaBright'}), '\u001b[105mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'cyanBright'}), '\u001b[106mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'whiteBright'}), '\u001b[107mhello\u001b[49m')

    assert.equal(colors('hello', {background: 'bright_black'}), '\u001b[100mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright_red'}), '\u001b[101mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright_green'}), '\u001b[102mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright_yellow'}), '\u001b[103mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright_blue'}), '\u001b[104mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright_magenta'}), '\u001b[105mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright_cyan'}), '\u001b[106mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright_white'}), '\u001b[107mhello\u001b[49m')

    assert.equal(colors('hello', {background: 'bright-black'}), '\u001b[100mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright-red'}), '\u001b[101mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright-green'}), '\u001b[102mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright-yellow'}), '\u001b[103mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright-blue'}), '\u001b[104mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright-magenta'}), '\u001b[105mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright-cyan'}), '\u001b[106mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'bright-white'}), '\u001b[107mhello\u001b[49m')

    assert.equal(colors('hello', {background: 'brightBlack'}), '\u001b[100mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'brightRed'}), '\u001b[101mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'brightGreen'}), '\u001b[102mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'brightYellow'}), '\u001b[103mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'brightBlue'}), '\u001b[104mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'brightMagenta'}), '\u001b[105mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'brightCyan'}), '\u001b[106mhello\u001b[49m')
    assert.equal(colors('hello', {background: 'brightWhite'}), '\u001b[107mhello\u001b[49m')
  })

  it('should do modifiers properly', () => {

    assert.equal(colors('hello', {bold: true}), '\u001b[1mhello\u001b[22m')
    assert.equal(colors('hello', {dim: true}), '\u001b[2mhello\u001b[22m')
    assert.equal(colors('hello', {underline: true}), '\u001b[4mhello\u001b[24m')
    assert.equal(colors('hello', {reverse: true}), '\u001b[7mhello\u001b[27m')
    assert.equal(colors('hello', {bold: true, dim: true, underline: true, reverse: true}), '\u001b[2m\u001b[1m\u001b[4m\u001b[7mhello\u001b[27m\u001b[24m\u001b[22m')

  })

})
