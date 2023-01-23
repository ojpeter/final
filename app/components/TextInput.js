import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import defaultStyles from '../config/styles'

function AppTextInput({ icon, width = '100%', ...otherProps }) {
  const { colors } = useTheme()
  return (
    <View style={[styles.container, { width, 
      borderColor: colors.borderColor, }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.iconInIcon}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontFamily: 'Poppins_400Regular',
  },
})

export default AppTextInput
