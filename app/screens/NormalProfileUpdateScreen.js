import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import * as Yup from 'yup'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import usersApi from '../api/users'
import Screen from '../components/Screen'
import { Form, FormField, SubmitButton } from '../components/forms'
import routes from '../navigation/routes'
import { useTheme } from '@react-navigation/native'
import AuthContext from '../auth/context'
import NormalButton from '../components/forms/NormalButton'

const validationSchema = Yup.object().shape({
  lastname: Yup.string().required().label('Last Name'),
  firstname: Yup.string().required().label('First Name'),
  phone: Yup.string().required().label('Mobile number'),
  password: Yup.string().required().max(5).label('5 Pin number'),
})

function NormalProfileUpdateScreen({ navigation }) {
  const { colors } = useTheme()
  const authContext = useContext(AuthContext)
  const { user, setUser } = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const [dat, setData] = useState({})

  let id = user.id
  useEffect(() => {
    let abortController = new AbortController()

    fetch(`http://cvrug.org/ehealth/actions/getuserbyid.php?id=${id}`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status)
        }

        return response.json()
      })
      .then((json) => setData(json))
      .catch((error) => console.error(error))

    return () => {
      abortController.abort()
    }
  }, [])

  // console.log(data.firstname);
  const handleSubmit = async (user) => {
    const result = await usersApi.addUser(user)

    if (!result.ok) return alert('Registration failed, Please try again later')

    alert(result.data['message'])
  }
  return (
    // <KeyboardAvoidingView>
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
            lastname: dat.lastname,
            firstname: dat.firstname,
            phone: dat.phoneNo,
            password: dat.password,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="lastname"

            textContentType="name"
          />
          <FormField
            autoCorrect={false}
            icon="account"
            name="firstname"
            placeholder="First Name   "
            textContentType="name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            keyboardType="phone-pad"
            name="phone"
            placeholder="Mobile number      "
            textContentType="telephoneNumber"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
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
    // </KeyboardAvoidingView>
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

export default NormalProfileUpdateScreen
