import React, { useState, useEffect, useContext } from 'react'
import { Alert, KeyboardAvoidingWrapper, StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import * as Yup from 'yup'
import Screen from '../components/Screen'
import { Form, FormField, FormPicker, SubmitButton } from '../components/forms'
import { useTheme } from '@react-navigation/native'
import AuthContext from '../auth/context'
import useLocation from '../hooks/useLocation'
import UploadScreen from '../screens/UploadScreen'

const validationSchema = Yup.object().shape({
  disease: Yup.string().required().label("Disease's name"),
  description: Yup.string().required().label("Description"),
  sign1: Yup.string().required().min(5).label("Sign & Symptom 1"),
  sign2: Yup.string().required().min(5).label("Sign & Symptoms 2"),
  sign3: Yup.string().required().min(5).label("Sign & Symptoms 3"),
  sign4: Yup.string().required().min(5).label("Sign & Symptoms 4"),
  prevention: Yup.string().required().min(10).label("Prevetion methods"),
  cure: Yup.string().required().min(10).label("Cure methods"),
})

function AdminDiseaseAddScreen({ navigation }) {
  const { colors } = useTheme()
  const authContext = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState(null)
  const { user, setUser } = useContext(AuthContext)

  const handleSubmit = async (report, { resetForm }) => {
    let disease = report.disease
    let description = report.description
    let sign1 = report.sign1
    let sign2 = report.sign2
    let sign3 = report.sign3
    let sign4 = report.sign4
    let prevention = report.prevention
    let cure = report.cure
    let uid = user.id
    // console.log(uid)
    // console.log(long);
    const response = await fetch(
      `http://cvrug.org/ehealth/actions/adddisease.php?disease=${disease}&description=${description}&sign1=${sign1}&sign2=${sign2}&sign3=${sign3}&sign4=${sign4}&prevention=${prevention}&cure=${cure}&uid=${uid}`,
    )

    const result = await response.json()
    // setMsg(result.message);
    console.log(result)
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

          {/* <Text style={[styles.tagline, {
    color: colors.textInButton,}]}>Disease Reporting
    </Text>             */}
        </View>
        {/* <Text style={styles.tagline}>The IoT Framework</Text> */}
        <Form
          initialValues={{
            disease: '',
            description: '',
            sign1: '',
            sign2: '',
            sign3: '',
            sign4: '',
            prevention: '',
            cure: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="apps"
            // keyboardType="phone-pad"
            name="disease"
            placeholder="Disease name      "
            textContentType="telephoneNumber"
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="note"
            name="description"
            multiline={true}
            placeholder="Description        "
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="note"
            name="sign1"
            multiline={true}
            placeholder="Signs & Symptom 1        "
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="note"
            name="sign2"
            multiline={true}
            placeholder="Signs & Symptom 2        "
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="note"
            name="sign3"
            multiline={true}
            placeholder="Signs & Symptom 3        "
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="note"
            name="sign4"
            multiline={true}
            placeholder="Signs & Symptom 4        "
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="note"
            name="prevention"
            multiline={true}
            placeholder="Prevention methods        "
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="note"
            name="cure"
            multiline={true}
            placeholder="Cure methods        "
          />
          <SubmitButton
            color={colors.buttonBackground}
            title="Register New Disease"
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

export default AdminDiseaseAddScreen
