import React, { useEffect, useContext, useState } from 'react'
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native'
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native'

import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks'

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper'

import OfflineNotice from './app/components/OfflineNotice'
import AuthNavigator from './app/navigation/AuthNavigator'
import AuthContext from './app/auth/context'
import NormalBottomNavigator from './app/navigation/NormalBottomNavigator'
import AdminBottomNavigator from './app/navigation/AdminBottomNavigator'

import authStorage from './app/auth/storage'
import jwtDecode from 'jwt-decode'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

export default function AppHome() {
  const { landscape } = useDeviceOrientation()

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      primary: '#8414dc',
      secondary: '#4ecdc4',
      background: '#e5cff8',
      borderColor: '#8414dc',
      switchColor: '#333333',
      customCardColor: 'white',
      headerColor: 'white',
      iconColor: '#8414dc',
      iconColorTab: '#e5cff8',
      iconCircle: '8414dc',
      approve: 'white',
      navIcon: 'white',
      ProfileIcon: 'white',
      textColor: '#8414dc',
      textInButton: '#8414dc',
      textInButtonPicker: 'white',
      textButtonUpdate: 'white',
      buttonColor: 'red',
      buttonBack: '#ff5252',
      buttonBackground: '#8414dc',
      seatEmpty: 'green',
      seatTaken: 'red',
      iconInIcon: '#8414dc',
      iconInPicker: "white",
      actionButton: '#8414dc',
      mapStyle: [],
    },
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      primary: 'white',
      background: '#0a0502',
      borderColor: 'white',
      switchColor: '#8414dc',
      buttonBackground: '#333333',
      customCardColor: '#bfb8b8',
      headerColor: '#404040',
      iconColor: 'white',
      iconColorTab: 'lime',
      iconCircle: '#fff',
      navIcon: 'white',
      ProfileIcon: 'black',
      textColor: '#ffffff',
      textInButton: '#ffffff',
      textInButtonPicker: 'white',
      textButtonUpdate: '#ffffff',
      buttonColor: '#000',
      buttonBack: '#333333',
      seatEmpty: 'green',
      seatTaken: 'red',
      iconInIcon: '#6e6969',
      iconInPicker: "white",
      actionButton: 'white',
      approve: 'green'
    },
  }

  function SwitchCase({ value }) {
    if (value == 'Health') {
      return <AdminBottomNavigator />

    } else {
      return <NormalBottomNavigator />
    }
  }


  const [isDarkTheme, setIsDarkTheme] = React.useState()
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

  const [user, setUser] = useState()
  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if (!token) return
    const success = jwtDecode(token)
    const user = success.data
    setUser(user)
  }


  useEffect(() => {
    restoreToken()
  }, [])

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, isDarkTheme, setIsDarkTheme }}
    >
      <OfflineNotice />
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          {user ? <SwitchCase value={user.group} /> : <AuthNavigator />}
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
    // </View>
  )
}

