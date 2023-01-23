import React, { useState, useEffect, useContext } from 'react'
import {
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native'
import Screen from '../components/Screen'
import routes from '../navigation/routes'
import ActivityIndicator from '../components/ActivityIndicator'
import diseasesApi from '../api/diseases'
import useApi from '../hooks/useApi'
import CompanyCard from '../components/CompanyCard'
import DiseaseCard from '../components/DiseaseCard'
import NormalButton from '../components/forms/NormalButton'
import DiseaseDetailsCard from '../components/DiseaseDetailsCard';

function AdminDiseaseDetailsScreen({ navigation, route }) {
  const getDiseasesApi = useApi(diseasesApi.getDiseases)
  const disease = route.params
  // console.log(disease.description);

  const { colors } = useTheme()

  return (
    <Screen style={{ alignContent: 'center', justifyContent: 'center' }}>

      <DiseaseDetailsCard
        name={disease.name}
        description={disease.description}
        sign1={disease.sign1}
        sign2={disease.sign2}
        sign3={disease.sign3}
        sign4={disease.sign4}
        prevention={disease.prevention}
        cure={disease.cure}
        iconName="disease"
        created={disease.created}
        createdBy={disease.createdBy}

      />

    </Screen>
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
    alignSelf: "center", justifyContent: "center"
  },
  tagline: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: "center", justifyContent: "center"
  },
  tagText: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: "center", justifyContent: "center"
  },
  floatingActionButton: {
    position: 'absolute',
    right: 5,
    bottom: 0
  }
})

export default AdminDiseaseDetailsScreen
