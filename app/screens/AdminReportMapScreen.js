import React, { useEffect, useState, useContext } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Yup from 'yup'
import { useTheme } from '@react-navigation/native'
import Screen from '../components/Screen'
import MapView from 'react-native-maps'

import AuthContext from '../auth/context'

const validationSchema = Yup.object().shape({
  uphone: Yup.string().required().label('Mobile number'),
  upassword: Yup.string().required().min(4).label('Password'),
})

function AdminReportMapScreen({ navigation }) {
  const authContext = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const [message, setMessage] = useState('')
  const [reports, setReports] = useState(null)
  const { colors } = useTheme()
  const theme = useTheme()

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
          visibility: 'on',
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
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#539016',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#539016',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#539016',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#539016',
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
          color: '#E1C16E',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#E1C16E',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#E1C16E',
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
          color: '#add8e6',
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

  useEffect(() => {
    fetch(`http://cvrug.org/ehealth/actions/reportings.php`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status)
        }

        return response.json()
      })
      .then((json) => setReports(json))
      .catch((error) => console.error(error))
  }, [])

  // console.log(reports);

  return (
    <MapView
      minHeight={900}
      // style={{ flex: 1, minHeight: 400 }}
      initialRegion={{
        latitude: 1.308296,
        longitude: 32.367684,
        latitudeDelta: 1.4,
        longitudeDelta: 5.4,
      }}
      customMapStyle={theme.dark ? MapDarkStyle : MapLightStyle}
    >
      {reports
        ? reports.map((report, id) => {
          return (
            <MapView.Marker
              key={id}
              title={report.disease + ' - ' + report.status}
              coordinate={{
                latitude: report.latitude,
                longitude: report.longitude,
              }}
            />
          )
        })
        : null}
    </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tagline: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
})

export default AdminReportMapScreen
