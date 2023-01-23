import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function VehicleCard({
  co_name,
  num_plate,
  vcat_capacity,
  onPress,
  vl_lat,
  vl_long,
  vcreated,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text
            style={[styles.title, { color: colors.textColor }]}
            numberOfLines={1}
          >
            {co_name} {num_plate}
          </Text>
          <View style={styles.row1}>
            <MaterialCommunityIcons
              name="bus"
              size={40}
              color={colors.secondary}
              // style={styles.logo1}
            />
            <MaterialCommunityIcons
              name="seat-outline"
              size={40}
              color={colors.secondary}
              // style={styles.logo1}
            />

            <MaterialIcons
              name="my-location"
              size={40}
              color={colors.secondary}
              // style={styles.logo1}
            />

            <MaterialIcons
              name="date-range"
              size={40}
              color={colors.secondary}
              // style={styles.logo1}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: 'hidden',
    marginLeft: 20,
    marginRight: 20,
  },
  detailsContainer: {
    paddingBottom: 20,
    color: colors.primary,
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
  vertic: {
    marginRight: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  title: {
    marginBottom: 7,
    color: colors.black,
  },
})

export default VehicleCard
