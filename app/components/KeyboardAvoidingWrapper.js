import React, { Children } from 'react'

import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'

function KeyboardAvoidingWrapper({ children }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingWrapper
