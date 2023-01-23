import * as React from 'react'
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native'

import {
  Feather,
  Fontisto,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import Text from '../components/Text'
import { useTheme } from '@react-navigation/native'

const GOOGLE_MAPS_APIKEY = 'AIzaSyAxEwbXiLJ26MgZ1xAwNlv4KB1KvQL0hF0'

export default function MapSample() {
  const { colors } = useTheme()

  let sLat = 2.7701158
  let sLong = 32.2987143

  let viaLat = 2.2400163
  let viaLong = 32.2387409

  let dLat = 0.3195147
  let dLong = 32.5706933

  // console.log(typeof gulat);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          backgroundColor: colors.card,
          borderWidth: 2,
          borderColor: colors.primary,
          marginBottom: 20,
          overflow: 'hidden',
        }}
      >
        <MapView
          minHeight={600}
          // style={{ flex: 1, minHeight: 400 }}
          initialRegion={{
            latitude: 1.608296,
            longitude: 32.367684,
            latitudeDelta: 4.2,
            longitudeDelta: 5.2,
          }}
        >
          {/* Gulu City Bus Terminal */}
          <MapView.Marker
            title="Gulu City Bus Terminal"
            coordinate={{
              latitude: sLat,
              longitude: sLong,
            }}
          />
          {/* Lira Bus Park */}
          {/* <MapView.Marker
          title="Lira Bus Terminal"
            coordinate={{
              latitude: 2.244002,
              longitude: 32.894620,
            }}
          /> */}

          {/* Karuma Bridge */}
          <MapView.Marker
            title="Karuma Bridge"
            coordinate={{
              latitude: viaLat,
              longitude: viaLong,
            }}
          />

          {/* Namuyembe Bus Terminal */}
          <MapView.Marker
            title="Namuyembe Bus Terminal"
            coordinate={{
              latitude: dLat,
              longitude: dLong,
            }}
          />

          {/* <MapViewDirections
            origin={{ latitude: 2.244002, longitude: 32.894620 }}
            destination={{ latitude: 0.3195147, longitude: 32.5706933 }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
          /> */}

          <MapViewDirections
            origin={{ latitude: 2.77011586, longitude: 32.2987143 }}
            destination={{ latitude: 0.3195147, longitude: 32.5706933 }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        </MapView>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('Map Clicked')
        }}
      >
        <View
          style={{
            padding: 10,
            color: colors.primary,
          }}
        >
          <View style={styles.row1}>
            <Feather name="activity" color={colors.primary} size={40} />
            <Text> Expected Arrival Time: 40 mins</Text>
          </View>
          <View style={styles.row1}>
            <Feather name="activity" color={colors.primary} size={40} />
            <Text> Seats Available: 2</Text>
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
    marginVertical: 3,
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
