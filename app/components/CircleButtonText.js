import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import CircleButton from './CircleButton'
import AppText from './Text'

function CircleButtonText({
  amount,
  title,
  backgroundColor = '#000',
  iconColor = '#fff',
}) {
  return (
    <View style={styles.circleView}>
      <CircleButton amount={amount} />
      <Text style={{ fontFamily: 'Poppins_400Regular' }}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circleView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
  },
})

export default CircleButtonText
