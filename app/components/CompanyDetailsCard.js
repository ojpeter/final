import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import Text from './Text'
import colors from '../config/colors'
import { useTheme } from '@react-navigation/native'

function CompanyDetailsCard({
  co_id,
  co_name,
  co_address,
  co_phone,
  co_email,
  co_account,
  co_created,
  onPress,
}) {
  const { colors } = useTheme()

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <View style={styles.row1}>
            <Ionicons
              name="business-outline"
              size={25}
              color={colors.iconColor}
              style={styles.logo1}
            />
            <Text
              style={[styles.subTitle, { color: colors.text }]}
              numberOfLines={1}
            >
              {co_name}
            </Text>
          </View>
          <View style={styles.row1}>
            <MaterialCommunityIcons
              name="phone"
              size={25}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={[styles.subTitle, { color: colors.text }]}
              numberOfLines={2}
            >
              {co_phone}
            </Text>
          </View>

          <View style={styles.row1}>
            <MaterialCommunityIcons
              name="email"
              size={25}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={[styles.subTitle, { color: colors.text }]}
              numberOfLines={2}
            >
              {co_email}
            </Text>
          </View>

          <View style={styles.row1}>
            <MaterialCommunityIcons
              name="account-cash"
              size={25}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={[styles.subTitle, { color: colors.text }]}
              numberOfLines={2}
            >
              {co_account}
            </Text>
          </View>

          <View style={styles.row1}>
            <Ionicons
              name="locate-outline"
              size={25}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={[styles.subTitle, { color: colors.text }]}
              numberOfLines={2}
            >
              {co_address}
            </Text>
          </View>

          <View style={styles.row1}>
            <MaterialIcons
              name="date-range"
              size={25}
              color={colors.iconColor}
              // style={styles.logo1}
            />

            <Text
              style={[styles.subTitle, { color: colors.text }]}
              numberOfLines={2}
            >
              {co_created}
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
    marginLeft: 15,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
  title: {
    marginBottom: 7,
    fontFamily: 'Poppins_400Regular',
  },
})

export default CompanyDetailsCard
