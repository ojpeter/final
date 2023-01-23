import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AdminProfileScreen from '../screens/AdminProfileScreen'
import AdminProfileUpdateScreen from '../screens/AdminProfileUpdateScreen'


const Stack = createStackNavigator()

const AdminProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={AdminProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Profile Update" component={AdminProfileUpdateScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default AdminProfileNavigator
