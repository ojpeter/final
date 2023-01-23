import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {
  Feather,
  Fontisto,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons'

import Text from './Text'
//import colors from '../config/colors'
import { useTheme } from '@react-navigation/native'
import { CnumberFormat } from './CnumberFormat'

function PaymentsCard({
  co_name,
  num_plate,
  seat,
  rname,
  startPoint,
  endPoint,
  fares,
  onPress,
}) {
  const { colors } = useTheme()

  // const fare = currencyFormatter(fares);
  // console.log(fare);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          overflow: 'hidden',
        }}
      >
        <View style={styles.row1}>
          <Ionicons
            name="business-outline"
            size={40}
            color={colors.iconColor}
          />
          <Text
            style={{
              fontWeight: '500',
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
            numberOfLines={2}
          >
            {co_name}
          </Text>
        </View>

        <View style={styles.row1}>
          <Ionicons name="bus-outline" size={40} color={colors.iconColor} />
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
            numberOfLines={2}
          >
            {num_plate}
          </Text>
        </View>

        <View style={styles.row1}>
          <MaterialCommunityIcons
            name="seat"
            size={40}
            color={colors.iconColor}
          />
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Seat:
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={1}
          >
            {seat}
          </Text>
        </View>

        <View style={styles.row1}>
          <FontAwesome5
            name="route"
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
            Vehicle Route:
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={1}
          >
            {rname}
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
            Pick-up Point:
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={1}
          >
            {startPoint}
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
            numberOfLines={1}
          >
            {endPoint}
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
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={2}
          >
            Travel cost:
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginLeft: 5,
              color: colors.text,
            }}
            numberOfLines={1}
          >
            <CnumberFormat value={fares} />
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

export default PaymentsCard
