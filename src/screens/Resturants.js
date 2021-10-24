import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'
import Spacer from '../components/utility/Spacer'
import ResturantInfoCard from '../features/resturants/componets/ResturantInfoCard'

const ResturantCardList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 12 },
})``

const Resturants = () => {
  return (
    <SafeAreaView>
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

export default Resturants
