import React from 'react'
import { View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

function IconM({ name, size = 40, backgroundColor, borderColor, color }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        borderColor,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FontAwesome5 name={name} color={color} size={size * 0.6} />
    </View>
  )
}

export default IconM
