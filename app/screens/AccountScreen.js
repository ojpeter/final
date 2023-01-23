import React, { useContext } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import { ListItem, ListItemSeparator } from '../components/lists'
import colors from '../config/colors'
import Icon from '../components/Icon'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import AuthContext from '../auth/context'
import authStorage from '../auth/storage'
import { useTheme } from '@react-navigation/native'

function AccountScreen({ navigation }) {
  const { colors } = useTheme()
  const { user, setUser } = useContext(AuthContext)

  const handleLogOut = () => {
    setUser(null)
    authStorage.removeToken()
  }

  const menuItems = [
    {
      title: 'Update Profile',
      icon: {
        name: 'format-list-bulleted',
        backgroundColor: colors.secondary,
      },
      targetScreen:
        user.vo_position === undefined
          ? routes.PASSS_PROFILE_UPDATE
          : routes.ADMIN_PROFILE_UPDATE,
    },
    {
      title: 'Travel History',
      icon: {
        name: 'history',
        backgroundColor: colors.secondary,
      },
      targetScreen: routes.PASS_HISTORY,
    },
    {
      title: 'Notifications',
      icon: {
        name: 'email',
        backgroundColor: colors.secondary,
      },
      targetScreen: routes.MESSAGES,
    },
  ]
  return (
    <Screen
      style={{
        backgroundColor: colors.background,
      }}
    >
      <View style={styles.container}>
        <ListItem
          title={
            user.uposition
              ? user.ulname + ' ' + user.ufname
              : user.vo_lname + ' ' + user.vo_fname
          }
          subTitle={user.uposition ? user.uphone : user.vo_phone}
          image={require('../assets/ambo.jpeg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          // ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen, item)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon name="logout" backgroundColor={colors.secondary} />
        }
        onPress={handleLogOut}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
})

export default AccountScreen
