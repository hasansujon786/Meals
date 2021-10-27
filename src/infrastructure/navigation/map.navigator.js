import React from 'react'
import MapScreen from '../../features/map/screens/map.screen'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

const Stack = createStackNavigator()

const MapNavigatior = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // ...TransitionPresets.ModalSlideFromBottomIOS,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        gestureEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name='MapIndex' component={MapScreen} />
    </Stack.Navigator>
  )
}

export default MapNavigatior
