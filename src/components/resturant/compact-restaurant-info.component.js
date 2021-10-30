import React from 'react'
import styled from 'styled-components/native'

import Text from '../typography/Text'
import Spacer from '../utility/Spacer'

const Container = styled.View`
  width: 150px;
  padding: 10px;
`

const CompactImage = styled.Image`
  height: 100px;
  width: 100%;
  border-radius: 4px;
`

const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Container>
      <CompactImage source={{ uri: restaurant.photos[0] }} />
      <Spacer direction='top' size={2}></Spacer>
      <Text varient='caption'>{restaurant.name}</Text>
    </Container>
  )
}

export default CompactRestaurantInfo
