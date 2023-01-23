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

function OperatorCard({
  vo_lname,
  vo_fname,
  vo_phone,
  vo_email,
  initials,
  onPress,
  cname,
  vo_created,
}) {
  const { colors } = useTheme()
  const name = vo_lname + ' ' + vo_fname
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ size: 25 }}>
              <UserAvatar size={50} name={name} />
            </View>

            {/* <Avatar.Image source={require('../assets/peter.jpg')} size={60} /> */}
            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
              <Title style={styles.title}>
                {vo_lname} {vo_fname}
              </Title>
              <Caption style={styles.caption}>{vo_phone}</Caption>
            </View>

            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
              <Title style={styles.title}>{cname}</Title>
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

export default OperatorCard
