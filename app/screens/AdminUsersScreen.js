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
import usersApi from '../api/users'
import useApi from '../hooks/useApi'
import CompanyCard from '../components/CompanyCard'
import DiseaseCard from '../components/DiseaseCard'
import NormalButton from '../components/forms/NormalButton'
import UserCard from '../components/UserCard'

function AdminUsersScreen({ navigation }) {
  const getUsersApi = useApi(usersApi.getUsers)

  const [refreshing, setRefreshing] = useState(false)
  useEffect(() => {
    let abortController = new AbortController()
    getUsersApi.request()

    return () => {
      abortController.abort()
    }
  }, [])

  const { colors } = useTheme()

  console.log(getUsersApi.data)
  return (
    <View style={{ marginTop: 40 }}>
      {getUsersApi.error && (
        <>
          <Text style={{ color: colors.primary }}>
            Couldn't retrieve Users.
          </Text>
          <Button title="Retry" onPress={getUsersApi.request} />
        </>
      )}
      <ActivityIndicator visible={getUsersApi.loading} />

      {typeof getUsersApi.data === 'object' ? (
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
            All Registered Users
          </Text>
          <FlatList
            data={getUsersApi.data}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <UserCard
                lname={item.lastname}
                fname={item.firstname}
                phone={item.phoneNo}
                onPress={() => navigation.navigate('AdminUserDetails', item)}
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => handleDelete(item)} />
                )}
              />
            )}
            // ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => getUsersApi.request()}
          />
          <TouchableOpacity
            style={styles.floatingActionButton}
            onPress={() => navigation.navigate('AdminUserAdd')}
          >
            <Feather name="plus-circle" size={40} color={colors.actionButton} />
          </TouchableOpacity>
        </>
      ) : (
        // </ScrollView>
        <>
          <Text style={{ color: colors.text }}>No results currently.</Text>
          <Button title="Register Diseases" onPress={getDiseasesApi.request} />
        </>
      )}
    </View>
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

export default AdminUsersScreen
