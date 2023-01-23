import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AdminReporterListingsScreen from '../screens/AdminReporterListingsScreen'
import AdminHealthListingsScreen from '../screens/AdminHealthListingsScreen'
import AdminListingsScreen from '../screens/AdminListingsScreen'


const Stack = createStackNavigator()

const AdminUsersNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Administrators"
      component={AdminListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Reporters" component={AdminReporterListingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Health" component={AdminHealthListingsScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default AdminUsersNavigator
