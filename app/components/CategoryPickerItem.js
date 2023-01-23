import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from './Icon'
import Text from './Text'
import { useTheme } from '@react-navigation/native'

function CategoryPickerItem({ item, onPress }) {
  
  const { colors } = useTheme()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          color={colors.iconInIcon}
          size={80}
        />
      </TouchableOpacity>
      {/* <View style={{flexDirection: 'column'}}> */}
      <Text style={styles.label}>{item.label}</Text>
      </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
  },
})

export default CategoryPickerItem
