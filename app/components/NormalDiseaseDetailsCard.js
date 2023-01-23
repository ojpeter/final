import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

import { CheckBox } from 'react-native-elements'
import Text from './Text'
import colors from '../config/colors'
import { useTheme } from '@react-navigation/native'
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Switch,
} from 'react-native-paper'

function NormalDiseaseDetailsCard({
  name,
  description,
  prevention,
  cure,
  sign1,
  sign2,
  sign3,
  sign4,
  iconName,
  created,
  createdBy
}) {
  const { colors } = useTheme()
  return (

    <TouchableWithoutFeedback>
      <ScrollView >
        <View style={styles.card}>
          <View style={styles.detailsContainer}>
            <View
              style={{ alignItems: "center" }}
            >
              <FontAwesome5 name={iconName} size={50} color={colors.iconColor} backgroundColor={colors.background} />
              <Text
                style={[styles.title, { color: colors.textColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }]}
                numberOfLines={1}
              >
                {name}
              </Text>
            </View>

            <View style={styles.row1}>
              <MaterialCommunityIcons
                name="note"
                size={40}
                color={colors.iconColor}
              // style={styles.logo1}
              />
              <Text
                style={[styles.subTitle, { color: colors.textColor, }]}
              // numberOfLines={20}
              >
                Description:
              </Text>
            </View>
            <View style={styles.row1}>
              {/* <Caption> */}
              <Caption style={styles.caption}>{description}</Caption>
              {/* </Caption> */}
            </View>

            <View style={styles.row1}>
              <MaterialCommunityIcons
                name="note"
                size={40}
                color={colors.iconColor}
              // style={styles.logo1}
              />
              <Text
                style={[styles.subTitle, { color: colors.textColor, }]}
              // numberOfLines={20}
              >
                Prevention:
              </Text>
            </View>
            <View style={styles.row1}>
              {/* <Caption> */}
              <Caption style={styles.caption}>{prevention}</Caption>
              {/* </Caption> */}
            </View>
            <View style={styles.row1}>
              <MaterialCommunityIcons
                name="note"
                size={40}
                color={colors.iconColor}
              // style={styles.logo1}
              />
              <Text
                style={[styles.subTitle, { color: colors.textColor, }]}
              // numberOfLines={20}
              >
                Cure methods Available:
              </Text>
            </View>
            <View style={styles.row1}>
              {/* <Caption> */}
              <Caption style={styles.caption}>{cure}</Caption>
              {/* </Caption> */}
            </View>

            <View style={styles.row1}>
              <MaterialCommunityIcons
                name="note"
                size={40}
                color={colors.iconColor}
              // style={styles.logo1}
              />
              <Text
                style={[styles.subTitle, { color: colors.textColor, }]}
              // numberOfLines={20}
              >
                Sign and Symptoms:
              </Text>
            </View>
            <View style={styles.row1}>
              {/* <Caption> */}
              <Caption style={styles.caption}>{sign1}</Caption>
              {/* </Caption> */}
            </View>

            <View style={styles.row1}>
              {/* <Caption> */}
              <Caption style={styles.caption}>{sign2}</Caption>
              {/* </Caption> */}
            </View>

            <View style={styles.row1}>
              {/* <Caption> */}
              <Caption style={styles.caption}>{sign3}</Caption>
              {/* </Caption> */}
            </View>

            <View style={styles.row1}>
              {/* <Caption> */}
              <Caption style={styles.caption}>{sign4}</Caption>
              {/* </Caption> */}
            </View>

            <View style={styles.row1}>
              <MaterialCommunityIcons
                name="email"
                size={40}
                color={colors.iconColor}
              // style={styles.logo1}
              />
              <Text
                style={[styles.subTitle, { color: colors.textColor, }]}
              // numberOfLines={20}
              >
                Created on:
              </Text>
            </View>
            <View style={styles.row1}>
              {/* <Caption> */}
              <Caption style={styles.caption}>{created}</Caption>
              {/* </Caption> */}
            </View>

            <View style={styles.row1}>
              <MaterialCommunityIcons
                name="email"
                size={40}
                color={colors.iconColor}
              // style={styles.logo1}
              />
              <Text
                style={[styles.subTitle, { color: colors.textColor, }]}
              // numberOfLines={20}
              >
                Created By:
              </Text>
            </View>
            <View style={styles.row1}>
              {/* <Caption> */}
              <Caption style={styles.caption}>Health Official</Caption>
              {/* </Caption> */}
            </View>

          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 10,
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
  subTitle: {
    marginLeft: 5,
    fontFamily: 'Poppins_400Regular',
  },
  title: {
    marginBottom: 7,
    fontFamily: 'Poppins_400Regular',
    fontWeight: "600",
    fontSize: 18
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    paddingRight: 10,
    textAlign: 'justify',
    fontFamily: 'Poppins_400Regular',
  },
})

export default NormalDiseaseDetailsCard
