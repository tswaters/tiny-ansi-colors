
const defaults = {
  color: null,
  background: null,
  bold: false,
  underline: false,
  reverse: false
}

const ANSI_CODES = {
  bold: 1,
  dim: 2,
  underline: 4,
  reverse: 7,
  normal: 22,
  underline_off: 24,
  reverse_off: 27
}

const ANSI_COLOR = {
  black: 0,
  red: 1,
  green: 2,
  yellow: 3,
  blue: 4,
  magenta: 5,
  cyan: 6,
  white: 7,
  default: 9
}

const bright_re = /[-_]?bright[-_]?/i
const hex_re = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
const rgb_re = /^rgba?\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),?\s*(\d*(?:\.\d+)?)?\)$/i

function ansi_color (str, is_bg) {

  let is_bright = bright_re.test(str)
  if (is_bright) { str = str.replace(bright_re, '') }

  let code = null

  if (Object.hasOwnProperty.call(ANSI_COLOR, str)) {

    code = ANSI_COLOR[str]

  } else {

    let r = null
    let g = null
    let b = null

    if (hex_re.test(str.toString(16))) {
      const match = str.toString(16).match(hex_re)
      const colorString = match[1].length === 3
        ? match[1].split('').map(char => char + char).join('')
        : match[1]
      const i = parseInt(colorString, 16)
      r = (i >> 16) & 0xFF
      g = (i >> 8) & 0xFF
      b = i & 0xFF
    } else if (rgb_re.test(str)) {
      [, r, g, b] = rgb_re.exec(str)
      if (r.indexOf('%') > -1) { r = parseInt(r, 10) * 2.55 }
      if (g.indexOf('%') > -1) { g = parseInt(g, 10) * 2.55 }
      if (b.indexOf('%') > -1) { b = parseInt(b, 10) * 2.55 }
    } else {
      throw new Error(`invalid color: ${str}`)
    }

    // figure out approx lightness, 0-1 regular, 2-3 is bright
    // special case for bright black - this is lightness of 1 and r=g=b

    const value = Math.floor(Math.max(r, g, b) / 64)
    if (value === 0 || value === 1 && r === g && g === b) {
      code = 0
      is_bright = value === 1
    } else {
      code = ((Math.round(b / 255) << 2) | (Math.round(g / 255) << 1) | Math.round(r / 255))
      is_bright = value === 3
    }
  }

  const modifier = 30 + (is_bg ? 10 : 0) + (is_bright ? 60 : 0)
  return `\u001b[${code + modifier}m`
}

function ansi_code (code) {
  return `\u001b[${ANSI_CODES[code]}m`
}

export const colors = (text, {
  color = defaults.color,
  background = defaults.background,
  bold = defaults.bold,
  dim = defaults.dim,
  underline = defaults.underline,
  reverse = defaults.reverse
} = defaults) => {

  const parts = []

  if (color) { parts.push(ansi_color(color.toLowerCase())) }
  if (background) { parts.push(ansi_color(background.toLowerCase(), true)) }
  if (dim) { parts.push(ansi_code('dim')) }
  if (bold) { parts.push(ansi_code('bold')) }
  if (underline) { parts.push(ansi_code('underline')) }
  if (reverse) { parts.push(ansi_code('reverse')) }

  parts.push(text)

  if (reverse) { parts.push(ansi_code('reverse_off')) }
  if (underline) { parts.push(ansi_code('underline_off')) }
  if (bold || dim) { parts.push(ansi_code('normal')) }
  if (background) { parts.push(ansi_color('default', true)) }
  if (color) { parts.push(ansi_color('default')) }

  return parts.join('')

}
