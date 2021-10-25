import styled from 'styled-components/native'

const directionVarients = {
  top: 'margin-top',
  bottom: 'margin-bottom',
  left: 'margin-left',
  right: 'margin-right',
  all: 'margin',
  x: 'margin',
  y: 'margin',
}

const getStyle = (direction, size, theme) => {
  let value = theme.spacing[size]
  let yZeroIfx = direction == 'x' ? '0' : ''
  let xZeroIfy = direction == 'y' ? '0' : ''
  return `${directionVarients[direction]}: ${yZeroIfx} ${value} ${xZeroIfy}`
}

const Spacer = styled.View`
  ${({ direction = 'all', size = 0, theme }) => getStyle(direction, size, theme)}
`

export default Spacer
