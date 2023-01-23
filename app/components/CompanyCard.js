import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import UserAvatar from 'react-native-user-avatar'
import Icon from '../components/Icon'
import IconC from './IconC'

function CompanyCard({
  co_name,
  co_id,
  co_address,
  co_phone,
  iconName,
  co_email,
  co_account,
  co_created,
  onPress,
}) {
  const { colors } = useTheme()
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ size: 30, justifyContent: 'center' }}>
              {iconName === 'business-outline' || iconName === 'bus-outline' ? (
                <IconC name={iconName} backgroundColor={colors.secondary} />
              ) : (
                <Icon name={iconName} backgroundColor={colors.secondary} />
              )}

              {/* <Ionicons name="business-outline" size={24} color="black" /> */}
            </View>

            {/* <Avatar.Image source={require('../assets/peter.jpg')} size={60} /> */}
            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
              <Title style={styles.title}>{co_name}</Title>
              <Caption style={styles.caption}>{co_phone}</Caption>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection2}>
          <MaterialCommunityIcons
            color={colors.iconColor}
            name="chevron-right"
            size={25}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 15,
    marginBottom: 10,
    overflow: 'hidden',
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  userInfoSection2: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 20,
  },
  title: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    fontFamily: 'Poppins_400Regular',
  },
})

export default CompanyCard
