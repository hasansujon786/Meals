import React, { useContext } from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FavouritesContext } from '../../services/favourites/favorites.constext'

const FavouritesButtonContainer = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 9;
`

const FavouriteButton = ({ restaurant }) => {
  const { favourites, addToFavourite, removeFromFavourite } = useContext(FavouritesContext)

  const isFavourite = !!favourites.find((fav) => fav.placeId === restaurant.placeId)
  const onFavToggle = () => {
    isFavourite ? removeFromFavourite(restaurant) : addToFavourite(restaurant)
  }

  return (
    <FavouritesButtonContainer onPress={onFavToggle}>
      <Ionicons name={isFavourite ? 'heart' : 'heart-outline'} size={32} color={isFavourite ? 'red' : 'white'} />
    </FavouritesButtonContainer>
  )
}

export default FavouriteButton
