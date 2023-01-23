import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

import { useTheme } from '@react-navigation/native'

function RouteCard({
  route_name,
  route_via,
  route_start,
  routeStart_lat,
  routeStart_long,
  route_ends,
  routeEnd_lat,
  routeEnd_long,
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
                fontFamily: 'Poppins_400Regular',
                color: colors.card,
              }}
              numberOfLines={1}
            >
              {route_name}
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
                fontFamily: 'Poppins_400Regular',
                marginLeft: 5,
              }}
            >
              Via {route_via}
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

export default RouteCard
