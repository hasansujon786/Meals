import camelize from 'camelize'
import { locations } from './location.mock'

export const locationRequest = (searchKeyword) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchKeyword]
    if (!locationMock) {
      reject('not found')
    }

    resolve(locationMock)
  })
}

export const tranfromLocationData = (response) => {
  const convertedResponst = camelize(response)
  const { geometry = {} } = convertedResponst.results[0]
  const { lng, lat } = geometry.location

  return { lng, lat }
}
