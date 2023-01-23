import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {
  Feather,
  Fontisto,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { CnumberFormat } from './CnumberFormat'

import Text from './Text'
//import colors from '../config/colors'
import { useTheme } from '@react-navigation/native'

function HistoryDetailsCard({
  bid,
  co_id,
  co_name,
  bcreated,
  num_plate,
  rid,
  route_name,
  seat_no,
  path,
  tc_cost,
  tc_destination,
  tc_id,
  tc_startingPoint,
  vid,
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
            color={colors.iconColor}
            // style={styles.logo1}
          />
          <Text
            style={{
              // fontWeight: '500',
              fontFamily: 'Poppins_400Regular',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Schedule:
          </Text>
          <Text
            style={{
              // fontWeight: '500',
              fontFamily: 'Poppins_400Regular',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            {bcreated}
          </Text>
        </View>

        <View style={styles.row1}>
          <Feather name="activity" color={colors.iconColor} size={40} />
          <Text
            style={{
              // fontWeight: '500',
              fontFamily: 'Poppins_400Regular',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Bus Route:
          </Text>
          <Text
            style={{
              fontWeight: '500',
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
            color={colors.iconColor}
            // style={styles.logo1}
          />
          <Text
            style={{
              // fontWeight: '500',
              fontFamily: 'Poppins_400Regular',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Company:
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={1}
          >
            {co_name}
          </Text>
        </View>

        <View style={styles.row1}>
          <MaterialCommunityIcons
            name="bus"
            size={40}
            color={colors.iconColor}
            // style={styles.logo1}
          />
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Number Plate:
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={1}
          >
            {num_plate}
          </Text>
        </View>

        <View style={styles.row1}>
          <MaterialCommunityIcons
            name="bus"
            size={40}
            color={colors.iconColor}
            // style={styles.logo1}
          />
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Seat number:
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={1}
          >
            {seat_no}
          </Text>
        </View>

        <View style={styles.row1}>
          <Fontisto
            name="hourglass-start"
            size={40}
            color={colors.iconColor}
            // style={styles.logo1}
          />
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Start:
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            {tc_startingPoint}
          </Text>
        </View>

        <View style={styles.row1}>
          <Fontisto
            name="hourglass-end"
            size={40}
            color={colors.iconColor}
            // style={styles.logo1}
          />
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Destination:
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            {tc_destination}
          </Text>
        </View>

        <View style={styles.row1}>
          <MaterialCommunityIcons
            name="cash-usd-outline"
            size={40}
            color={colors.iconColor}
            // style={styles.logo1}
          />
          <Text
            style={{
              // fontWeight: '500',
              fontFamily: 'Poppins_400Regular',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Travel Fare:
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={1}
          >
            <CnumberFormat value={tc_cost} />
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
  },
  title: {
    marginBottom: 7,
  },
})

export default HistoryDetailsCard
