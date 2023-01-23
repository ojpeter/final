import React from 'react'
import { useFormikContext } from 'formik'

import TextInput from '../TextInput'
import ErrorMessage from './ErrorMessage'

function AppFormField({ name, width, visible, editable, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext()

  return visible === false ? null : (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
        editable={editable}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField
