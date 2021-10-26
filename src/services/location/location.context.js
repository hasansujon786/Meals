import React, { createContext, useEffect, useState } from 'react'
import { locationRequest, tranfromLocationData } from './location.service'

export const LocationContext = createContext()

const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('antwerp')
  const [location, setLocation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!keyword.length) {
      return
    }
    locationRequest(keyword)
      .then(tranfromLocationData)
      .then((result) => {
        setLocation(result)
        setError(null)
      })
      .catch((err) => {
        setError(err)
        setLocation(null)
      })
      .finally(() => setIsLoading(false))
  }, [keyword])

  const onSearch = (searchKeyword) => {
    setIsLoading(true)
    setKeyword(searchKeyword.toLowerCase())
  }

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        keyword,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}

export default LocationContextProvider
