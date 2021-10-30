import React, { useContext, useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native'

import { LocationContext } from '../../../services/location/location.context'
import { ResturantContext } from '../../../services/resturants/resturans.context'
import Search from '../componets/search.componenet'
import MapCallout from '../componets/map-callout.component'

const MapScreen = () => {
  const { location } = useContext(LocationContext)
  const { resturants = [] } = useContext(ResturantContext)
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
      >
        {resturants.map((restaurant) => (
          <MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <MapView.Callout>
              <MapCallout restaurant={restaurant} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
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
