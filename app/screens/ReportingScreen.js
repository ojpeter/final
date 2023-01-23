import React, { useState, useEffect, useContext } from 'react'
import { Alert, StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import * as Yup from 'yup'
import Screen from '../components/Screen'
import { Form, FormField, FormPicker, SubmitButton, FormCheckBox } from '../components/forms'
import { useTheme } from '@react-navigation/native'
import { Checkbox } from 'react-native-paper'
import AuthContext from '../auth/context'
import useLocation from '../hooks/useLocation'
import UploadScreen from '../screens/UploadScreen'
import AppText from '../components/Text'
import { CheckBox } from 'react-native-elements'
import routes from '../navigation/routes'

const validationSchema = Yup.object().shape({
  disease: Yup.object().required().label('Suspended Disease'),
  phone: Yup.string().min(10, "Mobile number has few digits, Please make them 10 digits").max(10, "Mobile number must be 10 digits, Please reduce the digits").matches("^[0]{1}[7]{1}[0-9]{8}", "Mobile number start with 07").required().label('Mobile number'),
  // phone: Yup.string().matches("^[07]{2}[0-9]{8}").required().min(10).max(12).label('Mobile number'),

})

function ReportingScreen({ navigation }) {
  const { colors } = useTheme()
  const authContext = useContext(AuthContext)
  const [checked, setChecked] = React.useState(false);
  const [option1, setOption1] = React.useState(false);
  const [option1Value, setOption1Value] = React.useState(false);
  const [option2, setOption2] = React.useState(false);

  const [option2Value, setOption2Value] = React.useState(false);
  const [option3, setOption3] = React.useState(false);
  const [option3Value, setOption3Value] = React.useState(false);
  const [option4, setOption4] = React.useState(false);
  const [option4Value, setOption4Value] = React.useState(false);
  const [option5, setOption5] = React.useState(false);
  const [option5Value, setOption5Value] = React.useState(false);

  const [diseases, setDiseases] = useState(null)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const location = useLocation()
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState(null)
  useEffect(() => {
    let abortController = new AbortController()

    fetch(`http://cvrug.org/ehealth/actions/diseases.php`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status)
        }

        return response.json()
      })
      .then((json) => setDiseases(json))
      .catch((error) => console.error(error))

    return () => {
      abortController.abort()
    }
  }, [])

  // console.log(location);

  const handleSubmit = async (report) => {
    // let diseaseID = report.disease.id
    // let phone = report.phone


    // console.log(phone);
    if (typeof report === "object") {
      return Alert.alert("Report Status: Pending", "Please proceed to provide the disease's signs and symptoms or cancel this report", [
        {
          text: "Proceed",
          onPress: () => {
            navigation.navigate(routes.SELECT_SIGNS, {
              diseaseID: report.disease.id,
              phone: report.phone,
            });

          },
        },
        {
          text: "Cancel",
        },
      ]);
    }
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

          {/* <Text style={[styles.tagline, {
    color: colors.textInButton,}]}>Disease Reporting
    </Text>             */}
        </View>
        {/* <Text style={styles.tagline}>The IoT Framework</Text> */}
        <Form
          initialValues={{
            disease: '',
            phone: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            keyboardType="phone-pad"
            name="phone"
            placeholder="Mobile number      "
            textContentType="telephoneNumber"

          />

          <FormPicker
            placeholder="Suspected Disease"
            name="disease"
            autoCorrect={false}
            items={diseases}
            icon="apps"
          />




          <SubmitButton
            color={colors.buttonBackground}
            title="CONTINUE WITH REPORT"
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
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ReportingScreen
