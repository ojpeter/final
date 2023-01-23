import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
} from 'react-native'

import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { Screen } from './Screen'

import { useTheme } from '@react-navigation/native'

import {
  Feather,
  FontAwesome5,
  Fontisto,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import Text from './Text'
import { useTheme } from '@react-navigation/native'
import useLocation from '../hooks/useLocation'

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

function ReportLocationCard({
  vid,
  num_plate,
  capacity,
  vl_long,
  vl_lati,
  ulname,
  co_name,
  onPress,
}) {
  const { colors } = useTheme()
  const theme = useTheme()

  const bus = co_name + num_plate

  // console.log(co_name)
  let location = useLocation()
  // let lat = vl_lati
  // let lng = vl_long
  // console.log(typeof vl_long);

  // console.log(vl_long);
  // const lat = location.coords.latitude
  // const long = location.coords.longitude

  // console.log(location.coords.latitude);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          // borderBottomLeftRadius: 15,
          // borderBottomRightRadius: 15,
          // backgroundColor: colors.card,
          // borderWidth: 2,
          // borderColor: colors.primary,
          // marginBottom: 15,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}
      >
        <MapView
          minHeight={600}
          customMapStyle={theme.dark ? MapDarkStyle : MapLightStyle}
          style={{ flex: 1, minHeight: 400 }}
          initialRegion={{
            latitude: 1.308296,
            longitude: 32.367684,
            latitudeDelta: 1.4,
            longitudeDelta: 5.4,
          }}
        >
          
          {typeof location === 'object' && (
            <>
              <Marker
                title="Command Center"
                coordinate={{
                  latitude: location.coords.latitude
                    ? location.coords.latitude
                    : 0,
                  longitude: location.coords.longitude
                    ? location.coords.longitude
                    : 0,
                }}
              >
                <MaterialCommunityIcons
                  name="human-handsup"
                  size={30}
                  color="black"
                />
              </Marker>

              <Marker
                title="Suspected Disease Outbreak"
                coordinate={{
                  latitude: vl_long,
                  longitude: vl_lati,
                }}
              >
                <FontAwesome5 name="disease" color={colors.iconColor}
            size={30} />
              </Marker>
            </>
          )}
        </MapView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  map: {
    alignItems: 'center',
    borderWidth: 0,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
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
  },
  title: {
    fontWeight: '500',
    marginBottom: 7,
  },
})

export default ReportLocationCard
