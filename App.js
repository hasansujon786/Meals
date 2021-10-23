import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components'
import RooNavigator from './src/navigators/RootNavigator'
import theme from './src/infrastructure/theme'

export default function Main() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <RooNavigator />
        </PaperProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  )
}
