import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Text from './Text'
import defaultStyles from '../config/styles'
import PickerItem from './PickerItem'
import NormalButton from './forms/NormalButton'
import Screen from './Screen'
import { useTheme } from '@react-navigation/native'

function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = '100%',
}) {
  const [modalVisible, setModalVisible] = useState(false)
  const { colors } = useTheme()
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width , borderColor: colors.borderColor}]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.iconInIcon}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.iconInIcon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <NormalButton title="Close" color={colors.buttonBackground} onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                iconName="disease"
                onPress={() => {
                  setModalVisible(false)
                  onSelectItem(item)
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    borderWidth: 1,
    // borderColor: defaultStyles.colors.secondary,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
    fontFamily: 'Poppins_400Regular',
  },
})

export default AppPicker
