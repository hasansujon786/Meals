import React, { createContext, useEffect, useState } from 'react'
import { resturantRequest, tranfromResturantData } from './resturans.service'

export const ResturantContext = createContext()

const ResturantContextProvider = ({ children }) => {
  const [resturants, setResturants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const retriveResturants = () => {
    setIsLoading(true)
    setTimeout(() => {
      resturantRequest()
        .then(tranfromResturantData)
        .then((data) => setResturants(data))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false))
    }, 2000)
  }

  useEffect(() => {
    retriveResturants()
  }, [])

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
