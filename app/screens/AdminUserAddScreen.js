import React, { useState, useEffect, useContext } from 'react'
import { Alert, StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import * as Yup from 'yup'
import Screen from '../components/Screen'
import { Form, FormField, FormPicker, SubmitButton } from '../components/forms'
import { useTheme } from '@react-navigation/native'
import AuthContext from '../auth/context'
import useLocation from '../hooks/useLocation'
import UploadScreen from './UploadScreen'

const validationSchema = Yup.object().shape({
  fname: Yup.string().required().label('First name'),
  lname: Yup.string().required().label('Last name'),
  phone: Yup.string().required().min(10).label('Mobile number'),
  password: Yup.string().required().min(5).label('Password'),
  type: Yup.object().required().label('User category'),
})

function AdminUserAddScreen({ navigation }) {
  const { colors } = useTheme()
  const authContext = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState(null)
  const { user, setUser } = useContext(AuthContext)

  const [usertypes, setUserTypes] = useState(null)

  useEffect(() => {
    let abortController = new AbortController()

    fetch(`http://cvrug.org/ehealth/actions/usertypes.php`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status)
        }

        return response.json()
      })
      .then((json) => setUserTypes(json))
      .catch((error) => console.error(error))

    return () => {
      abortController.abort()
    }
  }, [])

  const handleSubmit = async (report, { resetForm }) => {
    let firstname = report.fname
    let lastname = report.lname
    let phone = report.phone
    let password = report.password
    let type = report.type.value
    let uid = user.id

    const response = await fetch(
      `http://cvrug.org/ehealth/actions/adduser.php?firstname=${firstname}&lastname=${lastname}&phone=${phone}&password=${password}&type=${type}&uid=${uid}`,
    )

    const result = await response.json()
    // setMsg(result.message);
    // console.log(result);
    Alert.alert('Report Status', result.message)
    resetForm()
  }

  return (
    // <KeyboardAvoidingWrapper>
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
        message={msg}
        err={err}
      />
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
        </View>
        <Form
          initialValues={{
            fname: '',
            lname: '',
            phone: '',
            password: '',
            type: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            // keyboardType="phone-pad"
            name="lname"
            placeholder="Last name      "
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            // keyboardType="phone-pad"
            name="fname"
            placeholder="First name      "
          />

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

          <FormPicker
            placeholder="User Category"
            name="type"
            autoCorrect={false}
            items={usertypes}
            icon="apps"
          />
          <SubmitButton
            color={colors.buttonBackground}
            title="Register New User"
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

export default AdminUserAddScreen
