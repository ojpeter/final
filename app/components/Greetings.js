import React, { useContext, useState } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useTheme } from '@react-navigation/native'
import AuthContext from '../auth/context'

const Greetings = () => {

  const { user, setUser } = useContext(AuthContext)
  const { colors } = useTheme()

  var hours = new Date().getHours()



  return (
    <View>
      {hours >= 0 && hours < 12 ? (
        <Text style={[styles.tagline, {
          color: colors.textInButton,
        }]}>{"Good Morning " + user.lastname}</Text>
      ) : (
        hours >= 12 && hours < 17 ? (
          <Text style={[styles.tagline, {
            color: colors.textInButton,
          }]}>{"Good Afternoon " + user.lastname}</Text>
        ) : (
          <Text style={[styles.tagline, {
            color: colors.textInButton,
          }]}>{"Good Evening " + user.lastname}</Text>
        )
      )}
    </View>
  )
}
const styles = StyleSheet.create({

  tagline: {
    fontSize: 19,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: "center", justifyContent: "center",
    marginBottom: 10
  },
  tagText: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: "center", justifyContent: "center"
  },
})
export default Greetings