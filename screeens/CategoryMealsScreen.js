import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { CATEGORIES, MEALS } from '../data/dummy-data'

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import MealItem from '../components/MealItem'
import MealList from '../components/MealList'

const CategoryMealsScreen = (props) => {

    const mealsAvailable = useSelector(state => state.meals.filteredMeals)


    const navigation = useNavigation()
    const route = useRoute()
    const catId = route.params.categoryId
    const SelectedCategory = CATEGORIES.find((cat) => cat.id === catId)
    const SelectedMeals = mealsAvailable.filter(meal => meal.categoryIds.includes(SelectedCategory.id));
    navigation.setOptions({
        headerTitle: SelectedCategory.title,
    })

    const navigate = () => {
        navigation.navigate({ name: "Meal Detail", params: { id: ItemData.item.id } })
    }


    return (
        <MealList MealList={SelectedMeals} />
    )
}

export default CategoryMealsScreen
