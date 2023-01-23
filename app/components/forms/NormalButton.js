import React from 'react'
import { useFormikContext } from 'formik'

import AppButton from '../Button'
import { useTheme } from '@react-navigation/native'

function NormalButton({ title, color, onPress }) {
  const { colors } = useTheme()

  return <AppButton title={title} borderColor={colors.borderColor} color={color} onPress={onPress} />
}

export default NormalButton
