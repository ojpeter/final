import React from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
} from 'react-native'

import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import {
  Feather,
  Fontisto,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import Text from './Text'
import { useTheme } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')
const GOOGLE_MAPS_APIKEY = 'AIzaSyAxEwbXiLJ26MgZ1xAwNlv4KB1KvQL0hF0'

const MapLightStyle = []
const MapDarkStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        weight: 3,
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4ecdc4',
      },
      {
        lightness: 5,
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#cd7f4c',
      },
      {
        visibility: 'on',
      },
      {
        weight: 3,
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4ecdc4',
      },
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#cd7f4c',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'transit.station.bus',
    elementType: 'labels.icon',
    stylers: [
      {
        color: '#c6642f',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'transit.station.bus',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#a6b43c',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'transit.station.rail',
    elementType: 'geometry',
    stylers: [
      {
        color: '#99f53d',
      },
      {
        visibility: 'on',
      },
      {
        weight: 3,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
]
// const coordinates = [
//   {
//     latitude: 2.7701158,
//     longitude: 32.2987143,
//   },
//   {
//     latitude: 0.3195147,
//     longitude: 32.5706933,
//   },
// ]

function RouteDetailsCard({
  route_name,
  route_via,
  route_viaLat,
  route_viaLong,
  route_start,
  routeStart_lat,
  routeStart_long,
  route_ends,
  routeEnd_lat,
  routeEnd_long,
  rcreated,
  onPress,
}) {
  const { colors } = useTheme()
  const theme = useTheme()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          backgroundColor: colors.card,
          borderWidth: 2,
          borderColor: colors.primary,
          marginBottom: 10,
          overflow: 'hidden',
        }}
      >
        <MapView
          minHeight={600}
          // style={{ flex: 1, minHeight: 400 }}
          initialRegion={{
            latitude: 2.508296,
            longitude: 32.367684,
            latitudeDelta: 4.4,
            longitudeDelta: 5.4,
          }}
          customMapStyle={theme.dark ? MapDarkStyle : MapLightStyle}
        >
          {/* Gulu City Bus Terminal */}
          <MapView.Marker
            // title={'Bus | Taxis Terminal: ' + route_start}
            title={route_start}
            coordinate={{
              // latitude: rsLat,
              // longitude: rsLong,
              latitude: routeStart_lat,
              longitude: routeStart_long,
            }}
          />

          {/* Via Place */}
          <MapView.Marker
            title={route_via}
            coordinate={{
              latitude: route_viaLat,
              longitude: route_viaLong,
            }}
          />

          {/* Destination */}
          <MapView.Marker
            title={route_ends}
            // title={'Destination: ' + route_ends}
            coordinate={{
              // latitude: 0.3195147,
              // longitude: 32.5706933,
              latitude: routeEnd_lat,
              longitude: routeEnd_long,
            }}
          />

          <MapViewDirections
            origin={{ latitude: routeStart_lat, longitude: routeStart_long }}
            destination={{ latitude: routeEnd_lat, longitude: routeEnd_long }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            lineDashPattern={[0]}
          />

          {/* <MapViewDirections
            origin={{ latitude: 2.77011586, longitude: 32.2987143 }}
            destination={{ latitude: 0.3195147, longitude: 32.5706933 }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            lineDashPattern={[0]}
          /> */}
        </MapView>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{
            padding: 20,
            color: colors.primary,
          }}
        >
          <View style={styles.row1}>
            <Feather name="activity" color={colors.primary} size={40} />
            <Text
              style={{
                fontWeight: '500',
                marginLeft: 5,
                color: colors.text,
              }}
              numberOfLines={1}
            >
              {route_name} via {route_via}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 2,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  map: {
    alignItems: 'center',
    borderWidth: 0,
    justifyContent: 'center',
    width: '100%',
    height: '60%',
  },
  row1: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subTitle: {
    fontWeight: '500',
    marginLeft: 5,
    fontFamily: 'Poppins_400Regular',
  },
  title: {
    fontWeight: '500',
    marginBottom: 7,
    fontFamily: 'Poppins_400Regular',
  },
})

export default RouteDetailsCard
