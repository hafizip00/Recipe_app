import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
const DefaultText = (props) => {
    return (

        <Text style={styles.text}>{props.children}</Text>
    )
}

export default DefaultText

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: "bold"
    }
})