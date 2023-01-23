import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import Text from './Text'

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'

function PickerItem({ item, iconName, onPress }) {
  const { colors } = useTheme()
  return (
    <TouchableOpacity onPress={onPress} style={{}}>
      <View style={{flexDirection: 'row', padding: 7, backgroundColor: colors.buttonBackground, marginBottom: 2}}>
      <FontAwesome5 name={iconName} size={24} color = {colors.iconInPicker}  />
      <Text style={[styles.text, {color: colors.textInButtonPicker}]}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400'
  },
})

export default PickerItem
