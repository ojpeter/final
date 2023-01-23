import React, { useContext } from 'react'
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import { ListItem, ListItemSeparator } from '../components/lists'
import colors from '../config/colors'
import Icon from '../components/Icon'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import AuthContext from '../auth/context'
import authStorage from '../auth/storage'
import { useTheme } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


function AdminProfileScreen({ navigation }) {
  const { colors } = useTheme()
  const { user, setUser } = useContext(AuthContext)
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AuthContext)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }
  const handleLogOut = () => {
    setUser(null)
    authStorage.removeToken()
  }



  return (
    <Screen
      style={{
        backgroundColor: colors.background,
        marginLeft: 20,
        marginRight: 10,
        // alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image style={styles.image} source={require('../assets/ambo.jpeg')} />
      </View>


      <TouchableOpacity style={{
        marginBottom: 5, paddingRight: 5, alignItems: 'center',
        flexDirection: 'row'
      }}>
        <Icon name="account" color={colors.iconColor} borderColor={colors.borderColor} />

        <Text style={{
          fontFamily: 'Poppins_400Regular',
          color: colors.textColor,
          fontSize: 16,
          fontWeight: '200',
          marginLeft: 10,
        }}
          numberOfLines={1}>{user.lastname + ' ' + user.firstname}</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{
        marginBottom: 5, alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Icon name="phone" color={colors.iconColor} borderColor={colors.borderColor} />

        <Text style={{
          fontFamily: 'Poppins_400Regular',
          color: colors.textColor,
          fontSize: 16,
          fontWeight: '200',
          marginLeft: 10,
        }}
          numberOfLines={1}>{user.phoneNo}</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{
        marginBottom: 5, alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Icon name="account-group-outline" color={colors.iconColor} borderColor={colors.borderColor} />

        <Text style={{
          fontFamily: 'Poppins_400Regular',
          color: colors.textColor,
          fontSize: 16,
          fontWeight: '200',
          marginLeft: 10,
        }}
          numberOfLines={1}>{user.group + ' Category'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        marginBottom: 5, alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Icon name="account-edit-outline" color={colors.iconColor} borderColor={colors.borderColor} />

        <Text style={{
          fontFamily: 'Poppins_400Regular',
          color: colors.textColor,
          fontSize: 16,
          fontWeight: '200',
          marginLeft: 10,
        }}
          numberOfLines={1}> Update Profile Info</Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleTheme()} style={{
        marginBottom: 5, alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Icon name="toggle-switch-off" color={colors.iconColor} borderColor={colors.borderColor} />

        <Text style={{
          fontFamily: 'Poppins_400Regular',
          color: colors.textColor,
          fontSize: 16,
          fontWeight: '200'
        }}
          numberOfLines={1}> Theme Changer</Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogOut} style={{
        marginBottom: 5, alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Icon name="logout" color={colors.iconColor} borderColor={colors.borderColor} />

        <Text style={{
          fontFamily: 'Poppins_400Regular',
          color: colors.textColor,
          fontSize: 16,
          fontWeight: '200'
        }}
          numberOfLines={1}> Logout</Text>
      </TouchableOpacity>
      {/*  */}
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 80,

  }
})

export default AdminProfileScreen
