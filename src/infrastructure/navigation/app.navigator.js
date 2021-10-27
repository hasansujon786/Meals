import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { View, Text } from 'react-native'

import RestaurantNavigator from './restaurant.navigator'
import MapNavigatior from './map.navigator'

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

const Settings = () => {
  return (
    <View>
      <Text>settings</Text>
      <Text>settings</Text>
      <Text>settings</Text>
    </View>
  )
}

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createTabScreenOptions}>
      <Tab.Screen name='Resturants' component={RestaurantNavigator} />
      <Tab.Screen name='Map' component={MapNavigatior} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
}

export default AppNavigator
