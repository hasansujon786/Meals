import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import RooNavigator from './src/navigators/RootNavigator'

export default function Main() {
  return (
    <>
      <PaperProvider>
        <RooNavigator />
      </PaperProvider>
      <StatusBar style="auto" />
    </>
  )
}
