import React from 'react'
import { useFormikContext } from 'formik'

import AppButton from '../Button'
import { useTheme } from '@react-navigation/native'

function SubmitButton({ title, color, borderColor }) {
  const { handleSubmit } = useFormikContext()
  const { colors } = useTheme()

  return <AppButton title={title} borderColor={colors.borderColor} color={color} onPress={handleSubmit} />
}

export default SubmitButton
