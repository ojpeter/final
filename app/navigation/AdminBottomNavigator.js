import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../components/Icons'
import * as Animatable from 'react-native-animatable'
import AdminReportMapScreen from '../screens/AdminReportMapScreen'

import { useTheme } from '@react-navigation/native'
import AdminHomeNavigator from './AdminHomeNavigator'
import AdminDiseasesNavigator from './AdminDiseasesNavigator'
import AdminUsersNavigator from './AdminUsersNavigator'
import AdminProfileNavigator from './AdminProfileNavigator'
import AdminDiseaseAddScreen from '../screens/AdminDiseaseAddScreen'
import AdminDiseaseDetailsScreen from '../screens/AdminDiseaseDetailsScreen'
import AdminUserDetailsScreen from '../screens/AdminUserDetailsScreen'
import AdminUsersScreen from '../screens/AdminUsersScreen'
import AdminUserAddScreen from '../screens/AdminUserAddScreen'
import AdminProfileScreen from '../screens/AdminProfileScreen'
import AdminProfileUpdateScreen from '../screens/AdminProfileUpdateScreen'
import AdminReportListingScreen from '../screens/AdminReportListingScreen'
import AdminReportDetailsScreen from '../screens/AdminReportDetailsScreen'

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
    component: AdminHomeNavigator,
  },
  {
    route: 'Reports',
    label: 'Reports',
    type: Icons.Entypo,
    activeIcon: 'list',
    inActiveIcon: 'list',
    component: AdminReportListingScreen,
  },
  {
    route: 'Map Reports',
    label: 'Map Reports',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'map-marker-radius-outline',
    inActiveIcon: 'map-marker-radius-outline',
    component: AdminReportMapScreen,
  },
  {
    route: 'Diseases',
    label: 'Diseases',
    type: Icons.FontAwesome5,
    activeIcon: 'disease',
    inActiveIcon: 'disease',
    component: AdminDiseasesNavigator,
  },
  {
    route: 'Users',
    label: 'Users',
    type: Icons.Ionicons,
    activeIcon: 'ios-people-circle',
    inActiveIcon: 'ios-people-circle',
    component: AdminUsersScreen,
  },
  {
    route: 'Account',
    label: 'Account',
    type: Icons.MaterialIcons,
    activeIcon: 'emoji-people',
    inActiveIcon: 'emoji-people',
    component: AdminProfileScreen,
  },
]
const Tab = createBottomTabNavigator()

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props
  const { colors } = useTheme()
  const focused = accessibilityState.selected
  const viewRef = useRef(null)

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: '0deg' },
        1: { scale: 1.5, rotate: '360deg' },
      })
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, rotate: '360deg' },
        1: { scale: 1, rotate: '0deg' },
      })
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? colors.iconColor : colors.iconColor}
        />
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function AdminBottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          position: 'absolute',
          bottom: 10,
          right: 10,
          left: 10,
          borderRadius: 16,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        )
      })}
      <Tab.Screen
        name="AdminDiseaseAdd"
        component={AdminDiseaseAddScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="AdminDiseaseDetails"
        component={AdminDiseaseDetailsScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="AdminUserDetails"
        component={AdminUserDetailsScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="AdminUsers"
        component={AdminUsersScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />
      <Tab.Screen
        name="AdminUserAdd"
        component={AdminUserAddScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="AdminProfileUpdate"
        component={AdminProfileUpdateScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="AdminReportDetails"
        component={AdminReportDetailsScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
