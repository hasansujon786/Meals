import * as React from 'react'
import RestaurantNavigator from './restaurant.navigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const createTabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName
    switch (route.name) {
      case 'Resturants':
        iconName = 'restaurant'
        break
      case 'Map':
        iconName = 'map'
        break
      case 'Settings':
        iconName = 'settings'
        break
      default:
        iconName = 'ios-information-circle'
        break
    }
    return <Ionicons name={iconName} size={size} color={color} />
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
})

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createTabScreenOptions}>
      <Tab.Screen name='Resturants' component={RestaurantNavigator} />
      <Tab.Screen name='Map' component={RestaurantNavigator} />
      <Tab.Screen name='Settings' component={RestaurantNavigator} />
    </Tab.Navigator>
  )
}

export default AppNavigator

