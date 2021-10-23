import React from 'react'
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import ResturantInfoCard from '../components/ResturantInfoCard'

const Resturant = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ paddingVertical: 12, paddingHorizontal: 12 }}>
        <Searchbar />
      </View>
      <View style={{ paddingHorizontal: 12 }}>
        <ResturantInfoCard resturant={{}} />

        <View style={{ marginTop: 20 }}>

          <Button dark={true} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Resturant


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  }
})
