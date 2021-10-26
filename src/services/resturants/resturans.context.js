import React, { createContext, useContext, useEffect, useState } from 'react'
import { LocationContext } from '../location/location.context'
import { resturantRequest, tranfromResturantData } from './resturans.service'

export const ResturantContext = createContext()

const ResturantContextProvider = ({ children }) => {
  const [resturants, setResturants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { location } = useContext(LocationContext)

  const retriveResturants = (loc) => {
    setIsLoading(true)
    setResturants([])

    setTimeout(() => {
      resturantRequest(loc)
        .then(tranfromResturantData)
        .then((data) => setResturants(data))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false))
    }, 2000)
  }

  useEffect(() => {
    if (location) {
      const stringLoc = `${location.lat},${location.lng}`
      retriveResturants(stringLoc)
    }
  }, [location])

  return (
    <ResturantContext.Provider
      value={{
        resturants,
        isLoading,
        error,
      }}
    >
      {children}
    </ResturantContext.Provider>
  )
}

export default ResturantContextProvider
