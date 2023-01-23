import React, { useState, useEffect, useContext } from 'react'
import {
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Text,
  Button,
  KeyboardAvoidingView,
} from 'react-native'
import { useTheme } from '@react-navigation/native'
import Screen from '../components/Screen'
import routes from '../navigation/routes'
import ActivityIndicator from '../components/ActivityIndicator'
import diseasesApi from '../api/diseases'
import useApi from '../hooks/useApi'
import CompanyCard from '../components/CompanyCard'
import DiseaseCard from '../components/DiseaseCard'
import NormalButton from '../components/forms/NormalButton'
import DiseaseReport from '../components/DiseaseReport'

function NewsScreen({ navigation }) {
  const { colors } = useTheme()
  const getDiseasesApi = useApi(diseasesApi.getApprovedReports)

  const [refreshing, setRefreshing] = useState(false)
  useEffect(() => {
    let abortController = new AbortController()
    getDiseasesApi.request()

    return () => {
      abortController.abort()
    }
  }, [])

  // console.log(getDiseasesApi)
  return (
    <Screen>
      <Text style={[styles.tagText, { color: colors.text, marginBottom: 10 }]}>
        Uganda's Diseases Outbreaks
      </Text>
      {getDiseasesApi.error && (
        <>
          <Text style={{ color: colors.text }}>
            Couldn't retrieve New Outbreaks.
          </Text>
          <Button title="Retry" onPress={getDiseasesApi.request} />
        </>
      )}
      <ActivityIndicator visible={getDiseasesApi.loading} />

      {typeof getDiseasesApi.data === 'object' ? (
        // <ScrollView
        //   showsVerticalScrollIndicator={false}
        // >
        <>

          <FlatList
            data={getDiseasesApi.data}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <DiseaseReport
                name={item.name}
                signs={item.sign1}
                iconName="disease"
                numOfCases={item.numOfCases}
                reportedDate={item.created}
                onPress={() =>
                  navigation.navigate(routes.NEWSMAPBYDISEASE,
                    item,
                  )
                }
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
          <Button
            title="No Results currently"
          // onPress={() => navigation.navigate(routes.ADMIN_DISEASE_ADD)}
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
    marginTop: 8,
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
})

export default NewsScreen
