import { MEALS } from "../../data/dummy-data"
import { SETFILTERS, TOGGLEFVRT } from "../actions/meals"
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLEFVRT:
            const mealIndex = state.favoriteMeals.findIndex((ml) => ml.id === action.mealID)
            console.log(mealIndex)
            if (mealIndex >= 0) {
                const updatedFvrtMeals = [...state.favoriteMeals]
                updatedFvrtMeals.splice(mealIndex, 1)
                return { ...state, favoriteMeals: updatedFvrtMeals }
            } else {
                const meal = state.meals.find((meal) => meal.id === action.mealID)
                const updatedF = state.favoriteMeals.concat(meal)
                return { ...state, favoriteMeals: updatedF }
            }

        case SETFILTERS:
            const appliedFilters = action.filters
            const updatedfilteredMeals = state.meals.filter((meal) => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                return true
            })

            return { ...state, filteredMeals: updatedfilteredMeals }
        default:
            return state;
    }
}

export default mealReducer