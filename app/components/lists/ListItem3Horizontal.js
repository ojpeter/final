import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { useTheme } from '@react-navigation/native'
import Icon from '../Icon'

import Text from '../Text'
import colors from '../../config/colors'

function ListItem3Horizontal({
  title,
  subTitle,
  subTitle2,
  image,
  IconComponent,
  icon,
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
            // padding: 10,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: colors.background,
            borderRadius: 15,
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
          <View style={styles.detailsContainer2}>
            <Text
              style={{
                fontFamily: 'Poppins_400Regular',
                color: colors.text,
              }}
              // numberOfLines={1}
            >
              {title}
            </Text>
          </View>
          <View style={styles.detailsContainer3}>
            <Text
              style={{
                fontFamily: 'Poppins_400Regular',
                color: colors.text,
              }}
              numberOfLines={1}
            >
              {subTitle}
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text
              style={{
                fontFamily: 'Poppins_400Regular',
                color: colors.text,
              }}
              numberOfLines={1}
            >
              {subTitle2}
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
    padding: 5,
    // backgroundColor: colors.secondary,
  },
  detailsContainer: {
    flex: 1.6,
    marginLeft: 10,
    justifyContent: 'center',
  },
  detailsContainer2: {
    flex: 1.0,
    marginLeft: 5,
    justifyContent: 'center',
  },
  detailsContainer3: {
    flex: 1.6,
    // marginLeft: 10,
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

export default ListItem3Horizontal
