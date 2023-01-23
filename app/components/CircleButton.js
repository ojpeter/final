import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import AppText from './Text'

import { useTheme } from '@react-navigation/native'

function CircleButton({
  amount,
  title,
  onPress,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff',
}) {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      style={{
        borderWidth: 2,
        borderColor: colors.iconColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        backgroundColor: colors.background,
        borderRadius: 60,
        marginRight: 20,
        marginBottom: 20,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: colors.textColor,
          fontFamily: 'Poppins_400Regular',
          fontSize: 16,
        }}
      >
        {amount}
      </Text>
      <Text
        style={{
          color: colors.textColor,
          fontFamily: 'Poppins_400Regular',
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  screen: {},
})

export default CircleButton
