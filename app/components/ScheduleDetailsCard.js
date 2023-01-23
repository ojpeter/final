import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {
  Feather,
  Fontisto,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import Text from './Text'
//import colors from '../config/colors'
import { useTheme } from '@react-navigation/native'

function ScheduleDetailsCard({
  co_name,
  route_name,
  takeoff_time,
  travel_duration,
  onPress,
}) {
  const { colors } = useTheme()
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          overflow: 'hidden',
        }}
      >
        <View style={styles.row1}>
          <MaterialCommunityIcons
            name="bus-clock"
            size={40}
            color={colors.primary}
            // style={styles.logo1}
          />

          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            {takeoff_time}
          </Text>
        </View>

        <View style={styles.row1}>
          <Feather name="activity" color={colors.primary} size={40} />
          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={1}
          >
            {route_name}
          </Text>
        </View>

        <View style={styles.row1}>
          <MaterialIcons
            name="business"
            size={40}
            color={colors.primary}
            // style={styles.logo1}
          />
          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={1}
          >
            {co_name}
          </Text>
        </View>

        <View style={styles.row1}>
          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Travel Duration:
          </Text>

          <Text
            style={{
              fontFamily: 'Poppins_400Regular',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Approx. {travel_duration}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  // image: {
  //   width: '100%',
  //   height: 200,
  // },
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

export default ScheduleDetailsCard
