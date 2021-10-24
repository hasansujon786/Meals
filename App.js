import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components'
import RooNavigator from './src/navigators/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import theme from './src/infrastructure/theme'
import ResturantContextProvider from './src/services/resturants/resturans.context'

export default function Main() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <ResturantContextProvider>
            <NavigationContainer>
              <RooNavigator />
            </NavigationContainer>
          </ResturantContextProvider>
        </PaperProvider>
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  )
}
