import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components'
import theme from './src/infrastructure/theme'
import Navigation from './src/infrastructure/navigation'
import ResturantContextProvider from './src/services/resturants/resturans.context'
import LocationContextProvider from './src/services/location/location.context'

export default function Main() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <LocationContextProvider>
            <ResturantContextProvider>
              <Navigation />
            </ResturantContextProvider>
          </LocationContextProvider>
        </PaperProvider>
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  )
}
