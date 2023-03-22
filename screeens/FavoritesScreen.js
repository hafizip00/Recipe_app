
import React from 'react'
import MealList from '../components/MealList'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import Colors from '../Constants/Colors'


const FavoritesScreen = () => {

    const fvrtMeals = useSelector(state => state.meals.favoriteMeals)

    const navigate = useNavigation()


    navigate.setOptions({
        headerTitle: "Your Favorites"
    })

    if (fvrtMeals.length === 0) {
        return <Text style={{
            fontSize: 50,
            color: Colors.accent
        }}>No Meals Found</Text>
    }

    return (
        <MealList MealList={fvrtMeals} />
    )
}

export default FavoritesScreen

