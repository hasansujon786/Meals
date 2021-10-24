import camelize from 'camelize'
import { mockImages, mocks } from './mock'

export const resturantRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location]
    if (!mock) {
      reject('not found')
    }

    resolve(mock)
  })
}

export const tranfromResturantData = ({ results = [] }) => {
  const mappedData = results.map((resturant) => ({
    ...resturant,
    photos: resturant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)]
    }),
    isClosedTemprarily: resturant.business_status === 'CLOSED_TEMPORARILY',
    isOpenNow: resturant.opening_hours && resturant.opening_hours.open_now,
  }))
  return camelize(mappedData)
}
