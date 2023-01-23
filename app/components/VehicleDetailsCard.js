import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import MapView from 'react-native-maps'
import Text from './Text'
import { useTheme } from '@react-navigation/native'

const GOOGLE_MAPS_APIKEY = 'AIzaSyAxEwbXiLJ26MgZ1xAwNlv4KB1KvQL0hF0'

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
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4ecdc4',
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

const MapLightStyle = []

function VehicleDetailsCard({
  co_name,
  num_plate,
  vcat_capacity,
  onPress,
  vl_lat,
  vl_long,
  vcreated,
}) {
  const { colors } = useTheme()
  const theme = useTheme()
  return (
    <>
      <View>
        <View
          style={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderWidth: 2,
            borderColor: colors.iconColor,
            marginBottom: 0,
            overflow: 'hidden',
          }}
        >
          <View style={styles.row1}>
            <MaterialCommunityIcons
              name="bus"
              size={40}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={{
                fontWeight: '500',
                marginLeft: 5,
                color: colors.text,
              }}
              numberOfLines={2}
            >
              {co_name} {num_plate}
            </Text>
          </View>
          <View style={styles.row1}>
            <MaterialCommunityIcons
              name="seat-outline"
              size={40}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={{
                fontWeight: '500',
                marginLeft: 5,
                color: colors.text,
              }}
              numberOfLines={2}
            >
              {vcat_capacity} Seats
            </Text>
          </View>

          <View style={styles.row1}>
            <MaterialIcons
              name="date-range"
              size={40}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={{
                fontWeight: '500',
                marginLeft: 5,
                color: colors.text,
              }}
              numberOfLines={2}
            >
              {vcreated}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          backgroundColor: colors.card,
          overflow: 'hidden',
        }}
      >
        <MapView
          minHeight={600}
          // style={{ flex: 1, minHeight: 400 }}
          // style={{ backgroundColor: 'blue' }}
          initialRegion={{
            latitude: 1.123594,
            longitude: 32.58609,
            latitudeDelta: 7.2,
            longitudeDelta: 5.2,
          }}
          customMapStyle={theme.dark ? MapDarkStyle : MapLightStyle}
        >
          {/* Bus Location */}
          <MapView.Marker
            title={co_name + ' ' + num_plate}
            coordinate={{
              latitude: vl_long,
              longitude: vl_lat,
            }}
          />
        </MapView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
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
    marginLeft: 5,
  },
  title: {
    marginBottom: 7,
  },
})

export default VehicleDetailsCard
