import * as React from 'react'
import Resturants from '../screens/Resturants'
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

const RootNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createTabScreenOptions}>
      <Tab.Screen name='Resturants' component={Resturants} />
      <Tab.Screen name='Map' component={Resturants} />
      <Tab.Screen name='Settings' component={Resturants} />
    </Tab.Navigator>
  )
}

export default RootNavigator
