import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'
import SafeArea from '../components/utility/SafeArea'
import Spacer from '../components/utility/Spacer'
import ResturantInfoCard from '../features/resturants/componets/ResturantInfoCard'
import { ResturantContext } from '../services/resturants/resturans.context'
import { ActivityIndicator, Colors } from 'react-native-paper'

const ResturantCardList = styled(FlatList).attrs({
  contentContainerStyle: { paddingHorizontal: 12, paddingBottom: 20 },
})`
  flex: 1;
`
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
`

const Resturants = () => {
  const resturantContext = useContext(ResturantContext)

  return (
    <SafeArea>
      <Searchbar style={{ marginHorizontal: 12 }} />
      {!resturantContext.isLoading && (
        <ResturantCardList
          data={resturantContext.resturants}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Spacer direction='top' size={4}>
              <ResturantInfoCard resturant={item} />
            </Spacer>
          )}
        />
      )}
      {resturantContext.isLoading && (
        <LoadingContainer>
          <ActivityIndicator animating={true} color={Colors.orange700} />
        </LoadingContainer>
      )}
    </SafeArea>
  )
}

export default Resturants
