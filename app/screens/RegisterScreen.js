import React, { useState, useContext } from 'react'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import * as Yup from 'yup'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import usersApi from '../api/users'
import Screen from '../components/Screen'
import { Form, FormField, SubmitButton } from '../components/forms'
import Button from '../components/Button'
import routes from '../navigation/routes'
import { useTheme } from '@react-navigation/native'
import AuthContext from '../auth/context'
import NormalButton from '../components/forms/NormalButton'

const validationSchema = Yup.object().shape({
  uname: Yup.string().required().label('Name'),
  uphone: Yup.string().required().label('Mobile number'),
  upassword: Yup.string().required().max(5).label('5 Pin number'),
})

function RegisterScreen({ navigation }) {
  const { colors } = useTheme()
  const authContext = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)

  const handleSubmit = async (user) => {
    const result = await usersApi.addUser(user)

    if (!result.ok) return alert('Registration failed, Please try again later')

    alert(result.data['message'])

    //console.log(result.data)
  }
  return (
    // <KeyboardAvoidingWrapper>
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

          {/* <Text style={[styles.tagline, {
    color: colors.textInButton,}]}>Disease Reporting
    </Text>             */}
        </View>
        {/* <Text style={styles.tagline}>The IoT Framework</Text> */}
        <Form
          initialValues={{
            uname: '',
            uphone: '',
            upassword: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="uname"
            placeholder="Name   "
            textContentType="name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            keyboardType="phone-pad"
            name="uphone"
            placeholder="Mobile number      "
            textContentType="telephoneNumber"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="upassword"
            placeholder="* * * * * * *    "
            secureTextEntry
            textContentType="password"
          // keyboardType="phone-pad"
          />
          <SubmitButton color={colors.buttonBackground} title="Register" />
          <NormalButton
            title="Login"
            color={colors.buttonBackground}
            borderColor={colors.buttonColor}
            onPress={() => navigation.navigate(routes.LOGIN)}
          />

        </Form>
      </ScrollView>
    </Screen>
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
    alignSelf: 'center',
    marginBottom: 10,
    width: 120,
    height: 120,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default RegisterScreen
