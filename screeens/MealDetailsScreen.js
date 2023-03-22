import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import DefaultText from '../components/DefaultText'

import { tooggleFvrt } from '../Store/actions/meals'

import { useSelector, useDispatch } from 'react-redux'



const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailsScreen = () => {
    const mealsAvailable = useSelector(state => state.meals.meals)
    const FavMeals = useSelector(state => state.meals.favoriteMeals)
    const disptach = useDispatch()
    const route = useRoute();
    const navigation = useNavigation()
    const mealId = route.params.id
    const meal = mealsAvailable.find(meal => meal.id === mealId);

    const index = FavMeals.some(meal => meal.id === mealId)


    const toggleFvrtHandler = useCallback(() => {
        disptach(tooggleFvrt(mealId))
    }, [mealId])

    useEffect(() => {
        navigation.setParams({ toggleFVRT: toggleFvrtHandler })
    }, [toggleFvrtHandler])

    navigation.setOptions({
        headerTitle: route.params.mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Favorite' color='white' iconName={index ? 'ios-star' : "ios-star-outline"} onPress={route.params.toggleFVRT
            } />
        </HeaderButtons>
    })
    return (
        <ScrollView>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{meal.duration}m</DefaultText>
                <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
            </View>
            <View style={styles.listWrapper}>
                <Text style={styles.title}>Ingredients</Text>
                {meal.ingredients.map((ing) => {
                    return (
                        <ListItem key={ing}>{ing}</ListItem>
                    )
                })}
                <Text style={styles.title}>Steps</Text>
                {meal.steps.map((step) => {
                    return (
                        <ListItem key={step}>{step}</ListItem>
                    )
                })}
                <Text style={styles.title}>😋</Text>
            </View>
        </ScrollView>
    )

}



export default MealDetailsScreen


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around",

    },
    title: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold"
    },
    listItem: {
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
    },
    listWrapper: {
        marginBottom: 140
    }
})