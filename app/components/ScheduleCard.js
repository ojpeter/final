import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'

import { useTheme } from '@react-navigation/native'

function ScheduleCard({
  co_name,
  route_name,
  takeoff_time,
  travel_duration,
  onPress,
}) {
  const { colors } = useTheme()
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={[styles.detailsContainer]}>
          <View style={styles.row1}>
            <Text
              style={[styles.title, { color: colors.text }]}
              numberOfLines={1}
            >
              {takeoff_time}
            </Text>
          </View>
          <View style={styles.row1}>
            <Text
              style={[styles.title, { color: colors.text }]}
              numberOfLines={1}
            >
              {route_name}
            </Text>
          </View>
          <View style={styles.row1}>
            <Text
              style={[styles.title, { color: colors.text }]}
              numberOfLines={1}
            >
              {co_name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 50,
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
    fontFamily: 'Poppins_400Regular',
    marginLeft: 5,
  },
  title: {
    marginBottom: 5,
    fontFamily: 'Poppins_400Regular',
  },
})

export default ScheduleCard
