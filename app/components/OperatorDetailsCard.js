import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import Text from './Text'
import colors from '../config/colors'
import { useTheme } from '@react-navigation/native'

function OperatorDetailsCard({
  vo_lname,
  vo_fname,
  vo_phone,
  vo_email,
  cname,
  onPress,
  vo_position,
  co_id,
  vo_created,
}) {
  const { colors } = useTheme()

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <View style={styles.row1}>
            <MaterialCommunityIcons
              name="account-outline"
              size={40}
              color={colors.iconColor}
              // style={styles.logo1}
            />
            <Text
              style={[styles.title, { color: colors.textColor }]}
              numberOfLines={1}
            >
              {vo_lname} {vo_fname}
            </Text>
          </View>
          <View style={styles.row1}>
            <MaterialCommunityIcons
              name="phone"
              size={40}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={[styles.subTitle, { color: colors.textColor }]}
              numberOfLines={2}
            >
              {vo_phone}
            </Text>
          </View>

          <View style={styles.row1}>
            <MaterialCommunityIcons
              name="email"
              size={40}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={[styles.subTitle, { color: colors.textColor }]}
              numberOfLines={2}
            >
              {vo_email}
            </Text>
          </View>

          <View style={styles.row1}>
            <MaterialCommunityIcons
              name="apps"
              size={40}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={[styles.subTitle, { color: colors.textColor }]}
              numberOfLines={2}
            >
              {cname}
            </Text>
          </View>

          <View style={styles.row1}>
            <MaterialIcons
              name="date-range"
              size={40}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={[styles.subTitle, { color: colors.textColor }]}
              numberOfLines={2}
            >
              {vo_created}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    fontFamily: 'Poppins_400Regular',
  },
  title: {
    marginBottom: 7,
    fontFamily: 'Poppins_400Regular',
  },
})

export default OperatorDetailsCard
