import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors'
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

function AppButton({ title, onPress, color, borderColor }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color, borderColor: borderColor, flexDirection: 'row' },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: "white" }]}>{title}</Text>
      <Ionicons
        name="ios-arrow-forward-circle-outline"
        size={25}
        color="white"
        style={{ marginLeft: 10 }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: 'Poppins_600SemiBold',
  },
})

export default AppButton
