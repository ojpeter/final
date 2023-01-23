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

function NewsDetailsMapScreen({ navigation, route }) {
  const authContext = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const [message, setMessage] = useState('')
  const [reports, setReports] = useState(null)
  const { colors } = useTheme()
  const diseaseID = route.params

  // console.log('Here')

  useEffect(() => {
    fetch(`http://cvrug.org/ehealth/actions/reportings.php?did=${diseaseID}`, {
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
    >
      {reports
        ? reports.map((report, id) => {
          return (
            <MapView.Marker
              key={id}
              title={report.disease + ' suspected'}
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

export default NewsDetailsMapScreen
