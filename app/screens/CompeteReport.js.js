import React, { useState, useEffect, useContext } from 'react'
import { Alert, StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import * as Yup from 'yup'
import Screen from '../components/Screen'
import { Form, FormField, FormPicker, SubmitButton, FormCheckBox } from '../components/forms'
import { useTheme } from '@react-navigation/native'
import { Checkbox } from 'react-native-paper'
import AuthContext from '../auth/context'
import useLocation from '../hooks/useLocation'
import UploadScreen from './UploadScreen'
import AppText from '../components/Text'
import { CheckBox } from 'react-native-elements'

const validationSchema = Yup.object().shape({
  others: Yup.string().label('Please choose a value for option1'),
  option1: Yup.string().required().label('Please choose a value for option1'),
  option2: Yup.string().required().label('Please choose a value for option2'),
  option3: Yup.string().required().label('Please choose a value for option3'),
  option4: Yup.string().required().label('Please choose a value for option4'),
})

function ReportingSelectSigns({ route }) {
  const { colors } = useTheme()
  const authContext = useContext(AuthContext)
  const [disease, setDisease] = React.useState("");
  const [signs, setSigns] = React.useState();


  const [option1, setOption1] = React.useState(false);
  const [option1Value, setOption1Value] = React.useState(false);
  const [option2, setOption2] = React.useState(false);

  const [option2Value, setOption2Value] = React.useState(false);
  const [option3, setOption3] = React.useState(false);
  const [option3Value, setOption3Value] = React.useState(false);
  const [option4, setOption4] = React.useState(false);
  const [option4Value, setOption4Value] = React.useState(false);

  const info = route.params;
  const diseaseID = info.diseaseID
  // console.log(info);
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const location = useLocation()
  // console.log(location);
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState(null)
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

  // console.log(option1);

  const handleSubmit = async (report, { resetForm }) => {
    let disID = info.diseaseID
    // let phone = info.phone
    console.log(report.others);
    // let sign1 = report.sign
    // let sign1 = report.signs
    let lat = location.coords.latitude
    let long = location.coords.longitude
    console.log("Option 1 Value: " + option1Value);
    console.log("Option 2 Value: " + option2Value);
    console.log("Option 3 Value: " + option3Value);
    console.log("Option 4 Value: " + option4Value);
    // const response = await fetch(
    //   `http://cvrug.org/ehealth/actions/addreport.php?diseaseID=${disID}&phone=${phone}&signs=${signs}&lat=${lat}&long=${long}`,
    // )

    // const result = await response.json()
    // setMsg(result.message);
    // console.log(result.message);
    // Alert.alert('Report Status', result.message)

    // if (!result.ok) {
    //   setUploadVisible(false)
    //   // console.log(report)
    //   setErr(true)
    //   return alert('Could not register report')

    // }

    // console.log(result);
    // setMsg(result.data['message'])
    // setErr(result.data['error'])
    // // resetForm()
  }

  // console.log("Option 1 Value " + option1Value)
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
        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
          <AppText style={styles.tagline1}>{disease} Suspected </AppText>
          <AppText style={styles.tagline2}>Select Signs & Symptoms</AppText>
        </View>
        <Form
          initialValues={{
            others: '',
            // option1: '',
            // option2: '',
            // option3: '',
            // option4: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {/* {typeof (signs) === "object" ? (

            <>
              <CheckBox
                title={signs.sign1}
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
                    setOption1Value(true)
                    setOption1(!option1);
                  } else {
                    setOption1(false)
                    setOption1Value(false)
                    setOption1(!option1);
                  }
                  // console.log("Option 1 Value " + option1Value);

                }}
              />

              <CheckBox
                title={signs.sign2}
                checked={option2}

                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={colors.primary}
                uncheckedColor="white"
                textStyle={{
                  color: colors.text,
                  fontWeight: '300'
                }}
                containerStyle={{
                  backgroundColor: colors.background,
                  borderColor: colors.background
                }}
                onPress={() => {
                  if (option2 === true) {
                    setOption2Value(true)
                  } else {
                    setOption2Value(false)
                  }
                  // console.log("Option 2 Value " + option2Value);
                  setOption2(!option2);
                }}
              />

              <CheckBox
                title={signs.sign3}
                checked={option3}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={colors.primary}
                uncheckedColor="white"
                textStyle={{
                  color: colors.text,
                  fontWeight: '300'
                }}
                containerStyle={{
                  backgroundColor: colors.background,
                  borderColor: colors.background,
                }}
                onPress={() => {
                  if (option3 === true) {
                    setOption3Value(true)
                  } else {
                    setOption3Value(false)
                  }
                  // console.log("Option 3 Value " + option3Value);
                  setOption3(!option3);
                }}
              />

              <CheckBox
                title={signs.sign4}
                checked={option4}
                textStyle={{
                  color: colors.text,
                  fontWeight: '300'
                }}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={colors.primary}
                uncheckedColor="white"
                containerStyle={{
                  backgroundColor: colors.background,
                  borderColor: colors.background
                }}
                onPress={() => {
                  if (option1 === true) {
                    setOption4Value(true)
                  } else {
                    setOption4Value(false)
                  }
                  // console.log("Option 4 Value " + option4Value);
                  setOption4(!option4);
                }}
              />

            </>) : (
            null
          )
          } */}


          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="book"
            // keyboardType="phone-pad"
            name="others"
            placeholder="Other signs and symptoms         "
            textContentType="telephoneNumber"
          />
          <SubmitButton
            color={colors.buttonBackground}
            title="Report Disease"
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
  check: {
    borderRadius: 25,
    flexDirection: 'row',

  },
  logo: {
    alignSelf: 'center',
    marginBottom: 10,
    width: 120,
    height: 120,
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
