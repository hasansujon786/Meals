import React, { useContext } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import styled from 'styled-components'

import SafeArea from '../../../components/utility/SafeArea'
import Spacer from '../../../components/utility/Spacer'
import ResturantInfoCard from '../componets/ResturantInfoCard'
import Search from '../componets/search.componenet'
import { ResturantContext } from '../../../services/resturants/resturans.context'

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

const ResturantsScreen = ({ navigation }) => {
  const resturantContext = useContext(ResturantContext)

  return (
    <SafeArea>
      <Search />
      {!resturantContext.isLoading && (
        <ResturantCardList
          data={resturantContext.resturants}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Spacer direction='top' size={4}>
              <TouchableOpacity
                onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
              >
                <ResturantInfoCard resturant={item} />
              </TouchableOpacity>
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

export default ResturantsScreen
