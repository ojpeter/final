import React, { useState, useContext } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Entypo, Ionicons, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import * as Yup from 'yup'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import jwtDecode from 'jwt-decode'
import authApi from '../api/auth'
import { useTheme } from '@react-navigation/native'
import Screen from '../components/Screen'
import Button from '../components/Button'
import routes from '../navigation/routes'


import AuthContext from '../auth/context'
import authStorage from '../auth/storage'
import Greetings from '../components/Greetings'
import AppText from '../components/Text'

function AboutScreen({ navigation }) {
  const authContext = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const { user, setUser } = useContext(AuthContext)
  const { colors } = useTheme()

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logo}>
          {isDarkTheme === true ? (
            <Image
              style={styles.logo}
              source={require('../assets/icondark.png')}
            />
          ) : (<Image
            style={styles.logo}
            source={require('../assets/icon2.png')}
          />)}


        </View>
        <Greetings />
        <Text style={{
          fontFamily: 'Poppins_400Regular',
          color: colors.textColor,
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 5
        }}>ENJOY YOUR ROLES</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Reports")} style={styles.touchableO}>
          <Entypo name="list" size={40} color={colors.iconColor} />
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 16,
            fontWeight: '600'
          }}>Listings of Suspected Disease Outbreaks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Map Reports')} style={styles.touchableO}>
          <MaterialCommunityIcons name="map-marker-radius-outline" size={40} color={colors.iconColor} />
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 16,
            fontWeight: '200'
          }}>MapView of Suspected Disease Outbreaks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Diseases')} style={styles.touchableO}>
          <FontAwesome5 name="disease" size={40} color={colors.iconColor} />
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 16,
            fontWeight: '200'
          }}>Manage Infectious Disease Data</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Users')} style={styles.touchableO}>
          <Ionicons name="ios-people-circle" size={40} color={colors.iconColor} />
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 16,
            fontWeight: '200'
          }}>Manage Health Officials' Data</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.touchableO}>
          <MaterialIcons name="emoji-people" size={40} color={colors.iconColor} />
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 16,
            fontWeight: '200'
          }}>Manage Profile Data</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleTheme()} style={styles.touchableO}>
          <Icon name="toggle-switch-off" size={40} color={colors.iconColor} borderColor={colors.borderColor} />
          {isDarkTheme === true ? (
            <Text style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 16,
              fontWeight: '200'
            }}>Toggle to Light theme</Text>
          ) : (
            <Text style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 16,
              fontWeight: '200'
            }}
              numberOfLines={1}>Toggle to Dark theme</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </Screen >
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
    alignSelf: "center", justifyContent: "center"
  },
  tagline: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: "center", justifyContent: "center"
  },
  tagText: {
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: "center", justifyContent: "center"
  },
  touchableO: { flex: 1, flexDirection: "row", marginBottom: 5, alignItems: "center" }
})

export default AboutScreen
