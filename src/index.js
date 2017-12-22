
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

const bright_re = /[-_]?bright[-_]?/gi

function ansi_color (code, is_bg = false) {
  const is_bright = bright_re.test(code)
  const modifier = 30 + (is_bg ? 10 : 0) + (is_bright ? 60 : 0)
  if (is_bright) { code = code.replace(bright_re, '') }
  if (!ANSI_COLOR.hasOwnProperty(code)) {
    throw new Error(`invalid color: ${code}`)
  }
  return `\u001b[${ANSI_COLOR[code] + modifier}m`
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
