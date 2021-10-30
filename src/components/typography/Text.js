import styled from 'styled-components/native'

const body = (theme) => `
  font-size: ${theme.fontSizes['base']}
`
const label = (theme) => `
  font-size: ${theme.fontSizes['base']}
  font-weight: bold
`
const caption = (theme) => `
  font-size: ${theme.fontSizes['sm']}
  font-weight: bold
`
const error = (theme) => `
  color: ${theme.colors.text.error}
`
const hint = (theme) => `
  font-size: ${theme.fontSizes['base']}
`
const title = (theme, size = 'lg') => `
  font-weight: bold;
  font-size: ${theme.fontSizes[size]};
`
const varients = {
  body,
  label,
  caption,
  error,
  hint,
  title,
}

const Text = styled.Text`
  ${({ theme, varient = 'body', size }) => varients[varient](theme, size)}
`

export default Text
