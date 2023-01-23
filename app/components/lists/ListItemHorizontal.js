import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { useTheme } from '@react-navigation/native'
import Icon from '../Icon'

import Text from '../Text'
import colors from '../../config/colors'

function ListItemHorizontal({
  title,
  subTitle,
  image,
  icon,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  const { colors } = useTheme()
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.background} onPress={onPress}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            // backgroundColor: colors.background,
            // borderRadius: 15,
            // borderWidth: 2,
            // borderColor: colors.primary,
          }}
        >
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          {icon && (
            <View style={{ size: 30, justifyContent: 'center' }}>
              {/* <UserAvatar size={50} name={name} /> */}
              <Icon name={icon} backgroundColor={colors.secondary} />
            </View>
          )}
          <View style={styles.detailsContainer}>
            <Text
              style={{
                fontFamily: 'Poppins_400Regular',
                color: colors.text,
              }}
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text
              style={{
                fontFamily: 'Poppins_400Regular',
                color: colors.text,
              }}
              numberOfLines={2}
            >
              {subTitle}
            </Text>
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
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.secondary,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
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
  title: {
    fontFamily: 'Poppins_400Regular',
  },
})

export default ListItemHorizontal
