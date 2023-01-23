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
import { FontAwesome5 } from '@expo/vector-icons'
import IconM from './IconM'

function UserCard({ lname, fname, phone, report_status, iconName, onPress }) {
  const { colors } = useTheme()
  const name = lname + ' ' + fname
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ size: 25 }}>
              {/* <UserAvatar size={50} name={name} /> */}

              <IconM
                name="disease"
                color={colors.iconColor}
                borderColor={colors.borderColor}
              />
            </View>

            {/* <Avatar.Image source={require('../assets/peter.jpg')} size={60} /> */}
            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <Title style={[styles.title, { color: colors.textColor }]}>
                  {lname} {fname}
                </Title>
                {report_status === "New" ? (
                  <Title style={[styles.title, { color: "blue", marginLeft: 5, textAlign: 'center' }]}>
                    {report_status}
                  </Title>
                ) : (report_status === "Approved" ? (
                  <Title style={[styles.title, { color: "green", marginLeft: 5, textAlign: 'center' }]}>
                    {report_status}
                  </Title>
                ) : (
                  <Title style={[styles.title, { color: "red", marginLeft: 5 }]}>
                    {report_status}
                  </Title>
                )
                )
                }
              </View>
              <Caption style={styles.caption}>{phone}</Caption>
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
    marginBottom: 0,
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
    fontSize: 16,
    fontWeight: '200',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
})

export default UserCard
