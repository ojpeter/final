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
import UserDetailsCard from '../components/UserDetailsCard';

function AdminUserDetailsScreen({ navigation, route }) {
  const getDiseasesApi = useApi(diseasesApi.getDiseases)
  const user = route.params
  // console.log(user);

  const { colors } = useTheme()

  return (
    <Screen style={{ alignContent: 'center', justifyContent: 'center' }}>

      <UserDetailsCard
        lname={user.lastname}
        fname={user.firstname}
        phone={user.phoneNo}
        group={user.gname}
        created={user.created}
        createdBy={user.created_by}
        modified={user.modified}
        modifiedBy={user.modified_by}

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

export default AdminUserDetailsScreen
