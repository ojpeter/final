import React, { useState, useContext } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native'
import * as Yup from 'yup'
import jwtDecode from 'jwt-decode'
import authApi from '../api/auth'
import { useTheme } from '@react-navigation/native'
import Screen from '../components/Screen'
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
  phone: Yup.string().required().label('Mobile number'),
  password: Yup.string().required().min(4).label('Password'),
})

function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const [loginFailed, setLoginFailed] = useState(false)
  const [message, setMessage] = useState('')
  const { colors } = useTheme()

  const handleSubmit = async ({ phone, password }) => {
    const result = await authApi.login(phone, password)

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
            ) : (
              <Image
                style={styles.logo}
                source={require('../assets/icon2.png')}
              />
            )}

            {/* <Text style={[styles.tagline, {
    color: colors.textInButton,}]}>Disease Reporting
    </Text>             */}
          </View>

          <Form
            initialValues={{ phone: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <ErrorMessage error={message} visible={loginFailed} />

            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="phone"
              keyboardType="phone-pad"
              name="phone"
              placeholder="Mobile number       "
              textContentType="telephoneNumber"
              visible="true"
            />
            <FormField
              icon="lock"
              name="password"
              placeholder="*  *  *  *  *  *     "
              secureTextEntry={true}
              textContentType="password"
              // keyboardType="phone-pad"
              visible="true"
            />
            <SubmitButton color={colors.buttonBackground} title="Login" />
          </Form>
          <NormalButton
            title="Register"
            color={colors.buttonBackground}
            borderColor={colors.buttonColor}
            onPress={() => navigation.navigate(routes.REGISTER)}
          />

          {/* <Button
        title="Return Home"
        color="secondary"
        onPress={() => navigation.navigate(routes.WELCOME)}
      >
        <Icon name="home-outline" backgroundColor="#1da1f2" size={25} />
      </Button> */}
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
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tagline: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
  },
})

export default LoginScreen
