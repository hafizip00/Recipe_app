import {
    StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground
} from 'react-native'
import React from 'react'

import { useFonts } from 'expo-font'

const GridTile = (props) => {
    const [fontLoaded] = useFonts({
        "Roboto": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    })

    if (!fontLoaded) {
        return null
    }

    let Component = TouchableOpacity
    if (Platform.OS === "android" && Platform.Version >= 21) {
        Component = TouchableNativeFeedback
    }

    const { title, onSelect, color } = props
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/icon.png")} style={styles.image} />
            <Component onPress={onSelect}>
                <View style={{ ...styles.gridItemsStyle, ...{ backgroundColor: color } }} >
                    <Text style={styles.text} numberOfLines={2}>{title}</Text>
                </View>
            </Component>
        </View>
    )
}

export default GridTile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
        elevation: 3,
    },
    gridItemsStyle: {
        flex: 1,
        borderRadius: 10,
        shadowOpacity: .6,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    text: {
        fontFamily: "Roboto",
        fontSize: 22,
        fontWeight: "700",
        textAlign: "right"
    },
    image: {
        position: "absolute"
    }
})