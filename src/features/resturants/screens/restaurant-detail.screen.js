import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

import SafeArea from '../../../components/utility/SafeArea'
import Spacer from '../../../components/utility/Spacer'
// import { ResturantContext } from '../../../services/resturants/resturans.context'

const ResturantsDetailScreen = ({ navigation, route }) => {
  const {
    restaurant: { name },
  } = route.params
  return (
    <SafeArea>
      <Text>{name}</Text>
    </SafeArea>
  )
}

export default ResturantsDetailScreen
