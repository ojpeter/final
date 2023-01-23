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
import Icons from '../components/Icons'
import IconC from './IconC'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '../config/colors'

function ListCard({
  id,
  name,
  description,
  iconName,
  onPress,
}) {
  const { colors } = useTheme()
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.infoSection}>
        <View style={[styles.userInfoSection, {}]}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ size: 30, justifyContent: 'center', backgroundColor: colors.iconColor }}>
              
                <FontAwesome5 name={iconName} size={24} color="white" backgroundColor={colors.iconColor} />
            </View>

            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
              <Title style={styles.title}>{name}</Title>
              <Caption style={styles.caption}>{description}</Caption>
            </View>
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
    paddingLeft: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  infoSection: {
    flexDirection: 'column'
  },
  userInfoSection2: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10,
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

export default ListCard
