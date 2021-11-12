import React, { createContext, useEffect, useState } from 'react'

export const FavouritesContext = createContext()

const FavoritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant])
  }

  const remove = (restaurant) => {
    const newFavourites = favourites.filter((fav) => fav.placeId !== restaurant.placeId)
    setFavourites(newFavourites)
  }

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourite: add,
        removeFromFavourite: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}

export default FavoritesContextProvider
