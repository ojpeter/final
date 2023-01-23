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
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import UserAvatar from 'react-native-user-avatar'
import Icon from './Icon'
import IconC from './IconC'

function DiseaseReport({
  id,
  name,
  signs,
  reportedDate,
  numOfCases,
  iconName,
  onPress,
}) {
  const { colors } = useTheme()
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ size: 30, justifyContent: 'center' }}>
              <FontAwesome5
                name={iconName}
                size={24}
                color={colors.iconColor}
                backgroundColor={colors.background}
              />
            </View>

            {/* <Avatar.Image source={require('../assets/peter.jpg')} size={60} /> */}
            <View style={{ marginLeft: 15, flexDirection: 'row' }}>
              <Title style={[styles.title, { color: colors.textColor }]}>
                {name}
              </Title>
              <Title
                style={[
                  styles.title,
                  { color: colors.textColor, marginLeft: 7 },
                ]}
              >
                Cases:{' '}
              </Title>
              <Title
                style={[
                  styles.title,
                  { color: colors.textColor, marginLeft: 7 },
                ]}
              >
                {numOfCases}{' '}
              </Title>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Caption style={styles.caption}>
              First reported: {reportedDate}
            </Caption>
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
    paddingRight: 10,
    paddingLeft: 40,
    textAlign: 'justify',
    fontFamily: 'Poppins_400Regular',
  },
})

export default DiseaseReport
