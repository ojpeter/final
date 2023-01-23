import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AdminDiseasesScreen from '../screens/AdminDiseasesScreen'
import AdminDiseaseUpdateScreen from '../screens/AdminDiseaseUpdateScreen'
import AdminDiseaseAddScreen from '../screens/AdminDiseaseAddScreen'


const Stack = createStackNavigator()

const AdminDiseasesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Command Center"
      component={AdminDiseasesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Disease Update" component={AdminDiseaseUpdateScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Disease Register" component={AdminDiseaseAddScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default AdminDiseasesNavigator
