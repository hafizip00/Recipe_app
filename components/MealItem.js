import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import DefaultText from './DefaultText'

const MealItem = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.mealItem}>
                <TouchableOpacity onPress={props.onSelect}>
                    <View>
                        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                            <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                            <DefaultText>{props.duration}m</DefaultText>
                            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        overflow: "hidden"
    },
    mealItem: {
        height: 200,
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        overflow: "hidden",
        marginTop: 10,
        elevation: 5,
    },
    mealRow: {
        flexDirection: "row",
    },
    mealHeader: {
        height: "90%",
    },
    title: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        paddingVertical: 5,
        paddingHorizontal: 8,
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    mealDetails: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: 10
    }
})