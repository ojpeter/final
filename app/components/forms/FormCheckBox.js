import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import defaultStyles from '../config/styles'
import { Checkbox } from 'react-native-paper'
import AppText from './Text'

function FormCheckBox({ name, value, ...otherProps }) {
    const { colors } = useTheme()
    const [checked, setChecked] = React.useState(false);
    return (
        <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
                setChecked(!checked);
            }}
        />

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        borderWidth: 1,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontFamily: 'Poppins_400Regular',
    },
})

export default FormCheckBox
