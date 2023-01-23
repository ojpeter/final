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
import AuthContext from '../auth/context'
import DiseaseCard from '../components/DiseaseCard'
import NormalButton from '../components/forms/NormalButton'

function MyReportsScreen({ navigation }) {
  const [getDiseasesApi, setGetDiseasesApi] = useState()
  const { user, setUser } = useContext(AuthContext)

  const [refreshing, setRefreshing] = useState(false)

  // console.log(user);
  let phone = user.phoneNo
  useEffect(() => {
    let abortController = new AbortController()

    fetch(`http://cvrug.org/ehealth/actions/reportsbyid.php?phone=${phone}`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status)
        }

        return response.json()
      })
      .then((json) => setGetDiseasesApi(json))
      .catch((error) => console.error(error))

    return () => {
      abortController.abort()
    }
  }, [])

  const { colors } = useTheme()
  // console.log(getDiseasesApi)
  return (
    <Screen style={{ marginTop: 20 }}>
      {/* {getDiseasesApi.error && (
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
      <ActivityIndicator visible={getDiseasesApi.loading} /> */}


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
        My Disease Report History
      </Text>
      {typeof getDiseasesApi === 'object' ? (
        <>
          <FlatList
            data={getDiseasesApi}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <DiseaseCard
                lname={item.name}
                phone={item.signs}
                iconName="disease"
                report_status={item.status}
                created={item.created}
                onPress={() => navigation.navigate('ReportDetails', item)}
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
          {/* <Button
            title="Connection Lost, Refresh"
            onPress={getReportsApi.request}
          /> */}
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

export default MyReportsScreen
