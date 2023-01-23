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
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import Screen from '../components/Screen'
import routes from '../navigation/routes'
import ActivityIndicator from '../components/ActivityIndicator'
import diseasesApi from '../api/diseases'
import useApi from '../hooks/useApi'
import CompanyCard from '../components/CompanyCard'
import DiseaseCard from '../components/DiseaseCard'
import NormalButton from '../components/forms/NormalButton'

function AdminDiseasesScreen({ navigation }) {
  const getDiseasesApi = useApi(diseasesApi.getReports)

  const [refreshing, setRefreshing] = useState(false)
  useEffect(() => {
    let abortController = new AbortController()
    getDiseasesApi.request()

    return () => {
      abortController.abort()
    }
  }, [])

  const { colors } = useTheme()
  // console.log(getDiseasesApi.data)
  return (
    <Screen style={{ marginTop: 20 }}>
      {getDiseasesApi.error && (
        <>
          <Text
            style={{
              color: colors.text,
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            Couldn't retrieve Outbreak Reports.
          </Text>
          <NormalButton
            color={colors.primary}
            title="Retry"
            onPress={getDiseasesApi.request}
          />
        </>
      )}
      <ActivityIndicator visible={getDiseasesApi.loading} />

      {typeof getDiseasesApi.data === 'object' ? (
        <>
          <Text
            style={{
              color: colors.text,
              alignContent: 'center',
              justifyContent: 'center',
              marginLeft: '20%',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            All Reported Disease Outbreaks
          </Text>
          <FlatList
            data={getDiseasesApi.data}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <DiseaseCard
                lname={item.name}
                phone={item.signs}
                iconName="disease"
                report_status={item.status}
                created={item.created}
                onPress={() => navigation.navigate('AdminReportDetails', item)}
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => handleDelete(item)} />
                )}
              />
            )}
            // ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => getDiseasesApi.request()}
          />
        </>
      ) : (
        // </ScrollView>
        <>
          <Text style={{ color: colors.text }}>No results currently.</Text>
          <Button
            title="Connection Lost, Refresh"
            onPress={getReportsApi.request}
          />
        </>
      )}
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
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tagline: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  floatingActionButton: {
    position: 'absolute',
    right: 5,
    top: 0,
  },
})

export default AdminDiseasesScreen
