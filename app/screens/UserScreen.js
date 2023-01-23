import React, { useState, useContext } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, 
  Switch,
  Alert, } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Screen from '../components/Screen'
import {
  Feather,
  Ionicons,
  Entypo,
  AntDesign,
  Fontisto,
  FontAwesome5,
  MaterialIcons,
  Octicons,

  MaterialCommunityIcons,
} from '@expo/vector-icons'

import routes from '../navigation/routes'
import AuthContext from '../auth/context'
import authStorage from '../auth/storage'
import MainScreen from '../components/MainScreen'

function UserScreen({ navigation }) {
  const { colors } = useTheme()
  const { user, setUser } = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  // console.log(isDarkTheme);
  const handleLogOut = () => {
    setUser(null)
    authStorage.removeToken()
  }

  return (
    <MainScreen style={{backgroundColor: colors.background, width: '100%', height: '100%' , alignItems: "center", justifyContent:"center"}} >
      <View >
      
        {isDarkTheme === true ? (
          <Image
            style={styles.logo}
            source={require('../assets/icondark.png')}
          />
        ) : (<Image
          style={styles.logo}
          source={require('../assets/icon2.png')}
        />)}

        <Text style={[styles.tagline, {color: colors.textInButton,}]}>Reporter Account</Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: 15,
          marginTop: 15
        }}
      >
        <TouchableOpacity
          style={[
            styles.touchables,
            {
              borderColor: colors.iconColor,
              borderRadius: 20,
              // borderBottomEndRadius: 20,
              // borderTopLeftRadius: 20,
              borderWidth: 1.5,
              alignItems: "center",
              width: '32%',
              marginLeft: 25,
              padding: 9
            },
          ]}
          onPress={() => navigation.navigate('Reporting')}
        >
          <Octicons name="report" color={colors.iconColor} size={40} />
          <Text
            style={{
              fontSize: 13,
              color: colors.textInButton,
              fontWeight: '600',
              fontFamily: 'Poppins_400Regular',
            }}
          >
            REPORTING
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchables,
            {
              borderColor: colors.iconColor,
              borderRadius: 20,
              // borderBottomEndRadius: 20,
              // borderTopLeftRadius: 20,
              borderWidth: 1.5,
              alignItems: "center",
              width: '32%',
              marginLeft: 25,
              padding: 9
            },
          ]}
          onPress={() => navigation.navigate('News')}
        >
          <Entypo name="news" color={colors.iconColor} size={40} />
          <Text
            style={{
              fontSize: 13,
              color: colors.textInButton,
              fontFamily: 'Poppins_400Regular',
            }}
          >
            NEWS
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: 15,
        }}
      >
        <TouchableOpacity
          style={[
            styles.touchables,
            {
              borderColor: colors.iconColor,
              borderRadius: 20,
              // borderBottomEndRadius: 20,
              // borderTopLeftRadius: 20,
              borderWidth: 1.5,
              alignItems: "center",
              width: '32%',
              marginLeft: 25,
              padding: 9,
              marginBottom: 5
            },
          ]}
          onPress={() => navigation.navigate('About')}
        >
          <Ionicons name="ios-information-circle-outline"
            color={colors.iconColor}
            size={40}
          />
          <Text
            style={{
              fontSize: 13,
              color: colors.textInButton,
              fontWeight: '600',
              fontFamily: 'Poppins_400Regular',
            }}
          >
            ABOUT
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchables,
            {
              borderColor: colors.iconColor,
              borderRadius: 20,
              // borderBottomEndRadius: 20,
              // borderTopLeftRadius: 20,
              borderWidth: 1.5,
              alignItems: "center",
              width: '32%',
              marginLeft: 25,
              padding: 9
            },
          ]}
          onPress={() => navigation.navigate('Register')}
        >
          <MaterialIcons name="app-registration"
            color={colors.iconColor}
            size={40}
          />
          <Text
            style={{
              fontSize: 13,
              color: colors.textInButton,
              fontWeight: '600',
              fontFamily: 'Poppins_400Regular',
            }}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: 15,
          marginBottom: 5
        }}
      >
        <TouchableOpacity
          style={[
            styles.touchables,
            {
              borderColor: colors.iconColor,
              borderRadius: 20,
              // borderBottomEndRadius: 20,
              // borderTopLeftRadius: 20,
              borderWidth: 1.5,
              alignItems: "center",
              width: '32%',
              marginLeft: 25,
              padding: 9
            },
          ]}
          onPress={handleLogOut}
        >
          <AntDesign name="logout"
            color={colors.iconColor}
            size={40}
          />
          <Text
            style={{
              fontSize: 13,
              color: colors.textInButton,
              fontWeight: '600',
              fontFamily: 'Poppins_400Regular',
            }}
          >
            LOG OUT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touchables,
            {
              borderColor: colors.iconColor,
              borderRadius: 20,
              // borderTopLeftRadius: 20,
              borderWidth: 1.5,
              width: '32%',
              marginLeft: 25,
              padding: 5,
              alignItems:"center",
              justifyContent: "center"
            },
          ]}
          onPress={() => toggleTheme()}
        >
          
          <View style={styles.preference}>
            {/* <Text>{themeText}</Text> */}
            <View pointerEvents="none">
              <Switch
                value={isDarkTheme}
                //onValueChange={(value) => setSwitch(value)}
                trackColor={{ false: colors.switchColor }}
              />
            </View>
          </View>
          {/* </TouchableRipple> */}
          <Text
            style={{
              fontSize: 13,
              color: colors.textInButton,
              fontFamily: 'Poppins_400Regular',
            }}
          >
            THEMES
          </Text>
        </TouchableOpacity>
        
      </View>
    </MainScreen>
  )
}

const styles = StyleSheet.create({
  
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center", justifyContent:"center"
  },
  tagline: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
  },
})

export default UserScreen
