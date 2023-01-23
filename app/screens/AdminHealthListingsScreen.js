import React, { useState, useContext } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Yup from 'yup'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import jwtDecode from 'jwt-decode'
import authApi from '../api/auth'
import { useTheme } from '@react-navigation/native'
import Screen from '../components/Screen'
import Button from '../components/Button'
import routes from '../navigation/routes'

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from '../components/forms'

import AuthContext from '../auth/context'
import authStorage from '../auth/storage'
import NormalButton from '../components/forms/NormalButton'

const validationSchema = Yup.object().shape({
  uphone: Yup.string().required().label('Mobile number'),
  upassword: Yup.string().required().min(4).label('Password'),
})

function AdminHealthListingsScreen({ navigation }) {
  const authContext = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const [loginFailed, setLoginFailed] = useState(false)
  const [message, setMessage] = useState('')
  const { colors } = useTheme()

  const handleSubmit = async ({ uphone, upassword }) => {
    const result = await authApi.login(uphone, upassword)

    // console.log(result.data)
    if (!result.ok) {
      setMessage(result.problem)
      return setLoginFailed(true)
    }

    if (result.data.error == true) {
      setMessage(result.data.message)
      return setLoginFailed(true)
    } else {
      setLoginFailed(false)

      const success = jwtDecode(result.data.user)
      const user = success.data
      authContext.setUser(user)
      // console.log(user)
      authStorage.storeToken(result.data.user)
    }
  }

  return (
    // <KeyboardAvoidingWrapper>
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Screen style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logo}>
          {isDarkTheme === true ? (
        <Image
          style={styles.logo}
          source={require('../assets/icondark.png')}
        />
      ) : (<Image
        style={styles.logo}
        source={require('../assets/icon2.png')}
      />)}

                 
          </View>
          <Text style={[styles.tagline, {
    color: colors.textInButton,}]}>Disease Reporting
    </Text>   
          {/* <Button
        title="Return Home"
        color="secondary"
        onPress={() => navigation.navigate(routes.WELCOME)}
      >
        <Icon name="home-outline" backgroundColor="#1da1f2" size={25} />
      </Button> */}
      <Text style={[styles.tagText, {
    color: colors.textInButton,}]}>All Health Officials Screen is getting up soon!!
    </Text>
        </ScrollView>
      </Screen>
    </KeyboardAvoidingView>
    // </KeyboardAvoidingWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center", justifyContent:"center"
  },
  tagline: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: "center", justifyContent:"center"
  },
  tagText: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: "center", justifyContent:"center"
  },
})

export default AdminHealthListingsScreen
