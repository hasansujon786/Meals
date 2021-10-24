import styled from 'styled-components/native'

const directionVarients = {
  top: 'margin-top',
  bottom: 'margin-bottom',
  left: 'margin-left',
  right: 'margin-right',
}

const getStyle = (direction, size, theme) => `${directionVarients[direction]}: ${theme.spacing[size]}`

const Spacer = styled.View`
  ${({ direction = 'top', size = 0, theme }) => getStyle(direction, size, theme)}
`

export default Spacer
