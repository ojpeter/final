import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import defaultStyles from '../config/styles'
import { Checkbox } from 'react-native-paper'
import AppText from './Text'

function CheckBox({ name, ...otherProps }) {
  const { colors } = useTheme()
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={[styles.container, {
      width,
      borderColor: colors.borderColor,
    }]}>

      {/* <Checkbox
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      /> */}
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <AppText>{name}</AppText>
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

export default CheckBox
