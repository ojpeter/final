import React from 'react'
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import Text from './Text'
import colors from '../config/colors'
import { useTheme } from '@react-navigation/native'
import Icon from './Icon'

function UserDetailsCard({
  lname,
  fname,
  phone,
  group,
  onPress,
  created,
  createdBy,
  modified,
  modifiedBy
}) {
  const { colors } = useTheme()

  return (
    <TouchableWithoutFeedback onPress={onPress}>

      <View style={styles.card}>
        <View style={{
          alignItems: 'center',
        }}>
          <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
            <Icon name="account-outline" color={colors.iconColor} borderColor={colors.borderColor} />

          </TouchableOpacity>
          <Text style={{
            fontFamily: 'Poppins_400Regular',
            color: colors.textColor,
            fontSize: 20,
            fontWeight: '200'
          }}
            numberOfLines={1}> {fname} {lname} </Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{
            alignItems: 'center',
            flexDirection: 'row',

          }}>
            <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
              <Icon name="account-outline" color={colors.iconColor} borderColor={colors.borderColor} />

            </TouchableOpacity>
            <Text style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200'
            }}
              numberOfLines={1}> Name: {fname} {lname} </Text>
          </View>

          <View style={{
            alignItems: 'center',
            flexDirection: 'row',

          }}>
            <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
              <Icon name="phone" color={colors.iconColor} borderColor={colors.borderColor} />

            </TouchableOpacity>
            <Text style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200'
            }}
              numberOfLines={1}> Phone:  {phone} </Text>
          </View>

          <View style={{
            alignItems: 'center',
            flexDirection: 'row',

          }}>
            <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
              <Icon name="account-group-outline" color={colors.iconColor} borderColor={colors.borderColor} />

            </TouchableOpacity>
            <Text style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200'
            }}
              numberOfLines={1}> Group: {group} </Text>
          </View>

          <View style={{
            alignItems: 'center',
            flexDirection: 'row',

          }}>
            <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
              <Icon name="account-clock-outline" color={colors.iconColor} borderColor={colors.borderColor} />

            </TouchableOpacity>
            <Text style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200'
            }}
              numberOfLines={1}> Registered by: {createdBy} </Text>
          </View>

          <View style={{
            alignItems: 'center',
            flexDirection: 'row',

          }}>
            <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
              <Icon name="clock-check-outline" color={colors.iconColor} borderColor={colors.borderColor} />

            </TouchableOpacity>
            <Text style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200'
            }}
              numberOfLines={1}> Registered on: {created} </Text>
          </View>

          <View style={{
            alignItems: 'center',
            flexDirection: 'row',

          }}>
            <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
              <Icon name="account-clock-outline" color={colors.iconColor} borderColor={colors.borderColor} />

            </TouchableOpacity>
            <Text style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200'
            }}
              numberOfLines={1}> Modified by: {modifiedBy} </Text>
          </View>

          <View style={{
            alignItems: 'center',
            flexDirection: 'row',

          }}>
            <TouchableOpacity style={{ marginBottom: 5, paddingRight: 5 }}>
              <Icon name="clock-check-outline" color={colors.iconColor} borderColor={colors.borderColor} />

            </TouchableOpacity>
            <Text style={{
              fontFamily: 'Poppins_400Regular',
              color: colors.textColor,
              fontSize: 14,
              fontWeight: '200'
            }}
              numberOfLines={1}> Modified on: {modified} </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback >
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  row1: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subTitle: {
    marginLeft: 5,
  },
  title: {
    marginBottom: 7,
  },
})

export default UserDetailsCard
