import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ReportingScreen from '../screens/ReportingScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import NewsScreen from '../screens/NewsScreen'
import AboutScreen from '../screens/AboutScreen'

const Stack = createStackNavigator()

const HealthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Reporting" component={ReportingScreen} options={{ headerShown: false }} />
    <Stack.Screen name="News" component={NewsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default HealthNavigator
