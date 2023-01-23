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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '@react-navigation/native'
import Screen from '../components/Screen'
import NewsScreen from './NewsScreen'


import AuthContext from '../auth/context'
import Greetings from '../components/Greetings'

function NormalAboutScreen({ navigation }) {
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
        <TouchableOpacity onPress={() => navigation.navigate("Reporting")} style={styles.touchableO}>
          <MaterialIcons name="bug-report" size={40} color={colors.iconColor} />
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 16,
            fontWeight: '600'
          }}>Report Disease Outbreaks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MyReports")} style={styles.touchableO}>
          <MaterialIcons name="history" size={40} color={colors.iconColor} />
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 16,
            fontWeight: '600'
          }}>Disease Reporting History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("News")} style={styles.touchableO}>
          <Entypo name="list" size={40} color={colors.iconColor} />
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 16,
            fontWeight: '600'
          }}>Listings of Confirmed Disease Outbreaks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Map Reports')} style={styles.touchableO}>
          <MaterialCommunityIcons name="map-marker-radius-outline" size={40} color={colors.iconColor} />
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 16,
            fontWeight: '200'
          }}>MapView of Confirmed Disease Outbreaks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NormalDiseases')} style={styles.touchableO}>
          <FontAwesome5 name="disease" size={40} color={colors.iconColor} />
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 16,
            fontWeight: '200'
          }}>Listings of Registered Infectious Diseases</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Accounts')} style={styles.touchableO}>
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

export default NormalAboutScreen
