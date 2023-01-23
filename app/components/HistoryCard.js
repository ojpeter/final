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

function HistoryCard({
  bid,
  co_id,
  co_name,
  bcreated,
  num_plate,
  rid,
  route_name,
  seat_no,
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
          flexDirection: 'row',
          borderRadius: 15,
          backgroundColor: colors.text,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            padding: 0,
            color: colors.primary,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginHorizontal: 0,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                marginBottom: 5,
                fontWeight: 'bold',
                color: colors.card,
              }}
              numberOfLines={1}
            >
              {bcreated}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginHorizontal: 0,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: colors.card,
                fontFamily: 'Poppins_500Medium',
                marginLeft: 5,
              }}
            >
              {route_name}
            </Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
          <MaterialCommunityIcons
            name="details"
            size={30}
            color={colors.card}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})

export default HistoryCard
