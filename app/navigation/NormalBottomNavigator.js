import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../components/Icons'
import * as Animatable from 'react-native-animatable'
import NewsMapScreen from '../screens/AdminReportMapScreen'

import { useTheme } from '@react-navigation/native'
import NewsScreen from '../screens/NewsScreen'
import NewsDetailsMapScreen from '../screens/NewsDetailsMapScreen'
import NormalAboutScreen from '../screens/NormalAboutScreen'
import ReportingScreen from '../screens/ReportingScreen'
import NormalAccountScreen from '../screens/NormalProfileScreen'
import NormalDiseaseDetailsScreen from '../screens/NormalDiseaseDetailsScreen'
import NormalDiseasesScreen from '../screens/NormalDiseasesScreen'
import NormalProfileScreen from '../screens/NormalProfileScreen'
import NormalProfileUpdateScreen from '../screens/NormalProfileUpdateScreen'
import MyReportsScreen from '../screens/MyReportsScreen'
import NormalReportDetailsScreen from '../screens/NormalReportDetailsScreen'

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
    component: NormalAboutScreen,
  },
  {
    route: 'Reports',
    label: 'Reports',
    type: Icons.Entypo,
    activeIcon: 'list',
    inActiveIcon: 'list',
    component: NewsScreen,
  },
  {
    route: 'Map Reports',
    label: 'Map Reports',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'map-marker-radius-outline',
    inActiveIcon: 'map-marker-radius-outline',
    component: NewsMapScreen,
  },
  {
    route: 'Map Details Reports',
    label: 'Map Details Reports',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'details',
    inActiveIcon: 'details',
    component: NewsDetailsMapScreen,
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

export default function AnomBottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          right: 100,
          left: 100,
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
        name="News"
        component={NewsScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="MyReports"
        component={MyReportsScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />


      <Tab.Screen
        name="NewsDetailsMap"
        component={NewsDetailsMapScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="Reporting"
        component={ReportingScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="NormalDiseases"
        component={NormalDiseasesScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="NormalDiseaseDetails"
        component={NormalDiseaseDetailsScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="Accounts"
        component={NormalProfileScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="AccountsUpdate"
        component={NormalProfileUpdateScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, // if you don't want to see the tab bar
        }}
      />

      <Tab.Screen
        name="ReportDetails"
        component={NormalReportDetailsScreen}
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
