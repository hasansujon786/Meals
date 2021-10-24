import React from 'react'
import { StyleSheet, View, SafeAreaView, StatusBar, FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'
import Spacer from '../components/Spacer'
import ResturantInfoCard from '../features/resturants/componets/ResturantInfoCard'

const ResturantCardList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 12 },
})``

const Resturant = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Searchbar style={{ marginHorizontal: 12 }} />
      <ResturantCardList
        data={[{ name: 1 }, { name: 2 }]}
        keyExtractor={(item) => item.name}
        renderItem={(itemData) => (
          <Spacer direction='bottom' size={4}>
            <ResturantInfoCard resturant={{}} />
          </Spacer>
        )}
      />
    </SafeAreaView>
  )
}

export default Resturant

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
})
