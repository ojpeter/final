import React, { useState, useEffect, useContext } from 'react'
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
import { CheckBox } from 'react-native-elements'
import useLocation from '../hooks/useLocation'
import AppText from '../components/Text'
import { Alert } from 'react-native'

const validationSchema = Yup.object().shape({
  others: Yup.string().required().label('Others'),
})

function ReportingSelectSigns({ navigation, route }) {
  const { colors } = useTheme()
  const [signs, setSigns] = React.useState();
  const authContext = useContext(AuthContext)
  const [disease, setDisease] = React.useState("");
  const location = useLocation()
  const [msg, setMsg] = useState('')
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const [option1, setOption1] = React.useState(false);
  const [option2, setOption2] = React.useState(false);
  const [option3, setOption3] = React.useState(false);
  const [option4, setOption4] = React.useState(false);
  const [uploadVisible, setUploadVisible] = useState(false)
  const [err, setErr] = useState(null)

  const info = route.params;
  const diseaseID = info.diseaseID

  useEffect(() => {
    let abortController = new AbortController()

    fetch(`http://cvrug.org/ehealth/actions/diseasenamebyid.php?diseaseid=${diseaseID}`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status)
        }

        return response.json()
      })
      .then((json) => setDisease(json.message))
      .catch((error) => console.error(error))

    return () => {
      abortController.abort()
    }
  }, [])

  useEffect(() => {
    let abortController = new AbortController()

    fetch(`http://cvrug.org/ehealth/actions/getsignsbydisease.php?id=${diseaseID}`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status)
        }

        return response.json()
      })
      .then((json) => setSigns(json))
      .catch((error) => console.error(error))

    return () => {
      abortController.abort()
    }
  }, [])


  // console.log(signs);
  const handleSubmit = async (report) => {

    let disID = info.diseaseID
    let phone = info.phone
    let sign1 = option1
    let sign2 = option2
    let sign3 = option3
    let sign4 = option4
    let others = report.others
    let lat = location.coords.latitude
    let long = location.coords.longitude
    const response = await fetch(
      `http://cvrug.org/ehealth/actions/addreport.php?diseaseID=${disID}&phone=${phone}&sign1=${sign1}&sign2=${sign2}&sign3=${sign3}&sign4=${sign4}&others=${others}&lat=${lat}&long=${long}`,
    )

    const result = await response.json()
    setMsg(result.message);
    console.log(result.message);
    Alert.alert('Report Status', result.message)


    // console.log(result);
    // setMsg(result.data['message'])
    // setErr(result.data['error'])
    // // resetForm()

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

        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
          <AppText style={styles.tagline1}>{disease} Suspected </AppText>
          <AppText style={styles.tagline2}>Select Signs & Symptoms</AppText>
        </View>
        <Form
          initialValues={{
            others: '',
            // upassword: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {typeof signs === "object" ? (
            <>
              <CheckBox
                title={signs.sign1}
                name="others"
                checked={option1}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={colors.primary}
                textStyle={{
                  color: colors.text,
                  fontWeight: '300'
                }}
                uncheckedColor="white"
                containerStyle={{
                  backgroundColor: colors.background,
                  borderColor: colors.background
                }}
                onPress={() => {
                  if (option1 === true) {
                    setOption1(true)
                  } else {
                    setOption1(false)
                  }
                  setOption1(!option1);
                }}
              />

              <CheckBox
                title={signs.sign2}
                name="others"
                checked={option2}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={colors.primary}
                textStyle={{
                  color: colors.text,
                  fontWeight: '300'
                }}
                uncheckedColor="white"
                containerStyle={{
                  backgroundColor: colors.background,
                  borderColor: colors.background
                }}
                onPress={() => {
                  if (option2 === true) {
                    setOption2(true)
                  } else {
                    setOption2(false)
                  }
                  setOption2(!option2);
                }}
              />

              <CheckBox
                title={signs.sign3}
                checked={option3}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={colors.primary}
                textStyle={{
                  color: colors.text,
                  fontWeight: '300'
                }}
                uncheckedColor="white"
                containerStyle={{
                  backgroundColor: colors.background,
                  borderColor: colors.background
                }}
                onPress={() => {
                  if (option3 === true) {
                    setOption3(true)
                  } else {
                    setOption3(false)
                  }
                  setOption3(!option3);
                }}
              />

              <CheckBox
                title={signs.sign4}
                checked={option4}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={colors.primary}
                textStyle={{
                  color: colors.text,
                  fontWeight: '300'
                }}
                uncheckedColor="white"
                containerStyle={{
                  backgroundColor: colors.background,
                  borderColor: colors.background
                }}
                onPress={() => {
                  if (option4 === true) {
                    setOption4(true)
                  } else {
                    setOption4(false)
                  }
                  setOption4(!option4);
                }}
              />
            </>



          ) : (
            null
          )}
          <FormField
            autoCorrect={false}
            icon="book"
            name="others"
            placeholder="Other Signs and Symptoms          "
            textContentType="name"
            multiline={true}
            numberOfLines={4}
          />
          <SubmitButton color={colors.buttonBackground} title="Register" />


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
  tagline1: {
    fontSize: 22,
    fontWeight: '600',
    paddingVertical: 2,
    alignSelf: 'center',
  },
  tagline2: {
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 2,
    alignSelf: 'center',
  },
})

export default ReportingSelectSigns
