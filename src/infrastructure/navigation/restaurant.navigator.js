import React from 'react'
import ResturantsScreen from '../../features/resturants/screens/restaurants.screen'
import ResturantsDetailScreen from '../../features/resturants/screens/restaurant-detail.screen'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

const Stack = createStackNavigator()

const RestaurantNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // ...TransitionPresets.ModalSlideFromBottomIOS,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        gestureEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name='Restaurant' component={ResturantsScreen} />
      <Stack.Screen name='RestaurantDetail' component={ResturantsDetailScreen} />
    </Stack.Navigator>
  )
}

export default RestaurantNavigator
