import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import AdminReportListingScreen from '../screens/AdminReportListingScreen'
import AdminReportMapScreen from '../screens/AdminReportMapScreen'
import AdminScreen from '../screens/AdminScreen'
import AdminReporterListingsScreen from '../screens/AdminReporterListingsScreen'
import AdminHealthListingsScreen from '../screens/AdminHealthListingsScreen'
import AdminListingsScreen from '../screens/AdminListingsScreen'
import AboutScreen from '../screens/AboutScreen'

const Stack = createStackNavigator()

const AdminHomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Command Center"
      component={AboutScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ReportListing"
      component={AdminReportListingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MapReportListing"
      component={AdminReportMapScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Reporters"
      component={AdminReporterListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Health"
      component={AdminHealthListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Admin"
      component={AdminListingsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default AdminHomeNavigator
