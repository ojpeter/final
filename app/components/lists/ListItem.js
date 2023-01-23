import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { useTheme } from '@react-navigation/native'

import Text from '../Text'
import colors from '../../config/colors'

function ListItem({
  title,
  title2,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  const { colors } = useTheme()
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight  underlayColor={colors.background} onPress={onPress}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 15,
            backgroundColor: colors.background,
            // borderColor: colors.iconColor,
            // borderWidth: 1.5
          }}
        >
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={[styles.detailsContainer, {}]}>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins_400Regular',
                  color: colors.text,
                }}
                numberOfLines={1}
              >
                {title}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins_400Regular',
                  color: colors.text,
                }}
                numberOfLines={1}
              >
                {title2}
              </Text>
            </View>
            {subTitle && (
              <Text
                style={{
                  color: colors.text,
                  fontFamily: 'Poppins_400Regular',
                }}
                numberOfLines={2}
              >
                {subTitle}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.iconColor}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
     
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  // title: {
  //   fontWeight: '500',
  // },
})

export default ListItem
