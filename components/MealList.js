import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MealItem from './MealItem'
import { useNavigation } from '@react-navigation/native'

const MealList = ({ MealList }) => {
    const navigation = useNavigation()
    const renderMeal = (ItemData) => {
        return (
            <MealItem
                title={ItemData.item.title}
                onSelect={() => {
                    navigation.navigate({ name: "Meal Detail", params: { id: ItemData.item.id, mealTitle: ItemData.item.title } })
                }}
                complexity={ItemData.item.complexity}
                affordability={ItemData.item.affordability}
                duration={ItemData.item.duration}
                image={ItemData.item.imageUrl}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.mealList}
                data={MealList}
                keyExtractor={(item) => item.id}
                renderItem={renderMeal}
            />
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mealList: {
        padding: 10,
        width: "100%",
    }
})