import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'

function Icon({
  name,
  size = 40,
  backgroundColor,
  borderColor,
  color
}) {

  const { colors } = useTheme()
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        borderColor,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name={name} color={color} size={size * 0.6} />
    </View>
  )
}

export default Icon
