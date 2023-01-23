import React from 'react'
import Constants from 'expo-constants'
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

function Screen({ children, style }) {
  const { landscape } = useDeviceOrientation()
  // console.log(useDimensions())
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
  },
  view: {},
})

export default Screen
