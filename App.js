import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components'
import RooNavigator from './src/navigators/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import theme from './src/infrastructure/theme'
import ResturantContextProvider from './src/services/resturants/resturans.context'
import LocationContextProvider from './src/services/location/location.context.js'

export default function Main() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <LocationContextProvider>
            <ResturantContextProvider>
              <NavigationContainer>
                <RooNavigator />
              </NavigationContainer>
            </ResturantContextProvider>
          </LocationContextProvider>
        </PaperProvider>
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  )
}
