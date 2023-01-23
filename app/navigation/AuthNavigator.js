import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ReportingScreen from '../screens/ReportingScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import AnomBottomNavigator from './AnomBottomNavigator'
import AboutScreen from '../screens/AboutScreen'
import NewsDetailsMapScreen from '../screens/NewsDetailsMapScreen'
import ReportingSelectSigns from '../screens/ReportingSelectSigns'
import CompeteReport from '../screens/CompeteReport.js'

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Reporting"
      component={ReportingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="News"
      component={AnomBottomNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="About"
      component={AboutScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={NewsDetailsMapScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ReportingSelectSigns" component={ReportingSelectSigns} options={{ headerShown: false }} />

  </Stack.Navigator>
)

export default AuthNavigator
