import React, { useContext, useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native'

import Search from '../componets/search.componenet'
import { LocationContext } from '../../../services/location/location.context'

const MapScreen = () => {
  const { location } = useContext(LocationContext)
  const [latDelta, setLatDelta] = useState(0)

  useEffect(() => {
    const northeastLat = location.viewport.northeast.lat
    const southwestLat = location.viewport.southwest.lat
    setLatDelta(northeastLat - southwestLat)
  }, [location])

  return (
    <View style={styles.container}>
      <Search />
      <MapView
        style={styles.map}
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default MapScreen
