import React, { useEffect, useState, useContext } from 'react'
import {
  Alert,
  RefreshControl,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Yup from 'yup'
import { useTheme } from '@react-navigation/native'
import Screen from '../components/Screen'
import MapView from 'react-native-maps'
import Icon from '../components/Icon'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import reportsApi from '../api/reportings'

import AuthContext from '../auth/context'
import NormalButton from '../components/forms/NormalButton'
import IconM from '../components/IconM'

function NormalReportDetailsScreen({ navigation, route }) {
  const authContext = useContext(AuthContext)
  const report = route.params
  const { colors } = useTheme()
  const theme = useTheme()
  const [states, setStates] = useState(false)

  console.log(report);
  const validateReport = async () => {
    let id = report.id
    // const abortController = new AbortController()
    // const signal = abortController.signal

    let response = await fetch(
      `http://cvrug.org/ehealth/actions/update_report_status.php?id=${id}`,
    )
    // `http://cvrug.org/ehealth/actions/update_report_status.php?id=${id}`,
    let res = await response.json()

    // console.log(res)
    setStates(true)
    Alert.alert('Report Status', res.message)
    // if (res.message === 'SUCCESSFUL') {
    //   // setPayDone('Done')
    // Alert.alert('Report Status', [
    //   {
    //     text: 'BUS BOOKING STATUS',
    //     onPress: () => {
    //       navigation.navigate("All Reportigns")
    //     },
    //   },
    // ])
    // }
  }

  const cancelReport = async () => {
    let id = report.id
    // const abortController = new AbortController()
    // const signal = abortController.signal

    let response = await fetch(
      `http://cvrug.org/ehealth/actions/cancel_report.php?id=${id}`,
    )

    let res = await response.json()
    setStates(true)
    Alert.alert('Report Status', res.message)
  }

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

  // console.log(report);
  return (
    <ScrollView

    >
      <MapView
        minHeight={500}
        // style={{ flex: 1, minHeight: 400 }}
        initialRegion={{
          latitude: 1.308296,
          longitude: 32.367684,
          latitudeDelta: 1.4,
          longitudeDelta: 5.4,
        }}
        customMapStyle={theme.dark ? MapDarkStyle : MapLightStyle}
      >
        {report ? (
          <MapView.Marker
            title={report.disease + ' - ' + report.status}
            coordinate={{
              latitude: report.latitude,
              longitude: report.longitude,
            }}
          />
        ) : null}
      </MapView>
      <View style={{ marginLeft: 5 }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
            <IconM
              name="disease"
              color={colors.iconColor}
              borderColor={colors.borderColor}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200',
            }}
            numberOfLines={1}
          >
            {' '}
            Suspected - {report.disease}{' '}
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
            <Icon
              name="note"
              color={colors.iconColor}
              borderColor={colors.borderColor}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200',
            }}
            numberOfLines={1}
          >
            {' '}
            Signs - {report.signs}{' '}
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
            <Icon
              name="account-outline"
              color={colors.iconColor}
              borderColor={colors.borderColor}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200',
            }}
            numberOfLines={1}
          >
            {' '}
            Reporter - {report.phoneNo}{' '}
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 6,
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200',
            }}
            numberOfLines={1}
          >
            {' '}
            Reported on - {report.created}{' '}
          </Text>
        </View>
        {states === false ? (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            {report.status === 'Approved' ? (
              <TouchableOpacity
                style={{
                  borderWidth: 1.5,
                  borderColor: colors.primary,
                  flexDirection: 'row',
                  padding: 5,
                  marginRight: 8,
                  borderRadius: 15,
                  width: '40%',
                  justifyContent: 'center',
                  backgroundColor: colors.primary,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins_400Regular',
                    color: colors.approve,
                    fontSize: 16,
                    fontWeight: '600',
                  }}
                  numberOfLines={1}
                >
                  {' '}
                  APPROVED{' '}
                </Text>
              </TouchableOpacity>
            ) : report.status === 'Cancelled' ? (
              <TouchableOpacity
                style={{
                  borderWidth: 1.5,
                  borderColor: 'red',
                  flexDirection: 'row',
                  padding: 5,
                  marginRight: 4,
                  borderRadius: 15,
                  width: '40%',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins_400Regular',
                    color: 'red',
                    fontSize: 16,
                    fontWeight: '600',
                  }}
                  numberOfLines={1}
                >
                  {' '}
                  FALSE ALERT{' '}
                </Text>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  style={{
                    borderWidth: 1.5,
                    borderColor: colors.primary,
                    flexDirection: 'row',
                    padding: 5,
                    marginRight: 8,
                    borderRadius: 15,
                    width: '40%',
                    justifyContent: 'center',
                    backgroundColor: colors.primary,
                  }}
                  onPress={() => validateReport()}
                >
                  {/* <TouchableOpacity onPress={() => toggleTheme()} style={{ marginBottom: 5, paddingRight: 5 }}> */}
                  {/* <Icon name="account-outline" color={colors.iconColor} borderColor={colors.borderColor} /> */}
                  {/* <MaterialIcons name="approval" size={30} color={colors.textColor} />
            </TouchableOpacity> */}
                  <Text
                    style={{
                      fontFamily: 'Poppins_400Regular',
                      color: colors.approve,
                      fontSize: 16,
                      fontWeight: '600',
                    }}
                    numberOfLines={1}
                  >
                    {' '}
                    APPROVE{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1.5,
                    borderColor: 'red',
                    flexDirection: 'row',
                    padding: 5,
                    marginRight: 4,
                    borderRadius: 15,
                    width: '40%',
                    justifyContent: 'center',
                  }}
                  onPress={() => cancelReport()}
                >
                  {/* <TouchableOpacity onPress={() => toggleTheme()} style={{ marginBottom: 5, paddingRight: 5, }}>
              <MaterialCommunityIcons name="cancel" size={30} color="red" />
            </TouchableOpacity> */}
                  <Text
                    style={{
                      fontFamily: 'Poppins_400Regular',
                      color: 'red',
                      fontSize: 16,
                      fontWeight: '600',
                    }}
                    numberOfLines={1}
                  >
                    {' '}
                    DISCARD{' '}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        ) : (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            {report.status === 'Approved' ? (
              <TouchableOpacity
                style={{
                  borderWidth: 1.5,
                  borderColor: colors.primary,
                  flexDirection: 'row',
                  padding: 5,
                  marginRight: 8,
                  borderRadius: 15,
                  width: '40%',
                  justifyContent: 'center',
                  backgroundColor: colors.primary,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins_400Regular',
                    color: colors.approve,
                    fontSize: 16,
                    fontWeight: '600',
                  }}
                  numberOfLines={1}
                >
                  {' '}
                  APPROVED{' '}
                </Text>
              </TouchableOpacity>
            ) : report.status === 'Cancelled' ? (
              <TouchableOpacity
                style={{
                  borderWidth: 1.5,
                  borderColor: 'red',
                  flexDirection: 'row',
                  padding: 5,
                  marginRight: 4,
                  borderRadius: 15,
                  width: '40%',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins_400Regular',
                    color: 'red',
                    fontSize: 16,
                    fontWeight: '600',
                  }}
                  numberOfLines={1}
                >
                  {' '}
                  FALSE ALERT{' '}
                </Text>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  style={{
                    borderWidth: 1.5,
                    borderColor: colors.primary,
                    flexDirection: 'row',
                    padding: 5,
                    marginRight: 8,
                    borderRadius: 15,
                    width: '40%',
                    justifyContent: 'center',
                    backgroundColor: colors.primary,
                  }}
                  onPress={() => validateReport()}
                >
                  {/* <TouchableOpacity onPress={() => toggleTheme()} style={{ marginBottom: 5, paddingRight: 5 }}> */}
                  {/* <Icon name="account-outline" color={colors.iconColor} borderColor={colors.borderColor} /> */}
                  {/* <MaterialIcons name="approval" size={30} color={colors.textColor} />
            </TouchableOpacity> */}
                  <Text
                    style={{
                      fontFamily: 'Poppins_400Regular',
                      color: colors.approve,
                      fontSize: 16,
                      fontWeight: '600',
                    }}
                    numberOfLines={1}
                  >
                    {' '}
                    APPROVE{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1.5,
                    borderColor: 'red',
                    flexDirection: 'row',
                    padding: 5,
                    marginRight: 4,
                    borderRadius: 15,
                    width: '40%',
                    justifyContent: 'center',
                  }}
                  onPress={() => cancelReport()}
                >
                  {/* <TouchableOpacity onPress={() => toggleTheme()} style={{ marginBottom: 5, paddingRight: 5, }}>
              <MaterialCommunityIcons name="cancel" size={30} color="red" />
            </TouchableOpacity> */}
                  <Text
                    style={{
                      fontFamily: 'Poppins_400Regular',
                      color: 'red',
                      fontSize: 16,
                      fontWeight: '600',
                    }}
                    numberOfLines={1}
                  >
                    {' '}
                    DISCARD{' '}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )

        }

      </View>
    </ScrollView>
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
  container: {
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  floatingActionButton: {
    position: 'absolute',
    right: 5,
    top: 0,
  },
})

export default NormalReportDetailsScreen
