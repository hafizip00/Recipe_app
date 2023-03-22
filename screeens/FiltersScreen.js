import { StyleSheet, Text, View, Switch, Platform } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import Colors from '../Constants/Colors'

import { useDispatch } from 'react-redux'
import { SETFILTERS, FilterSettings } from '../Store/actions/meals'


const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
                value={props.value}
                onValueChange={(newValue) => props.setValue(newValue)} />
        </View>
    )
}


const FiltersScreen = () => {

    const navigation = useNavigation()
    const route = useRoute()
    const [isGlutenFree, setGlutenFree] = useState(false)
    const [isLactoseFree, setLactoseFree] = useState(false)
    const [isVegan, setVegan] = useState(false)
    const [isVegetarian, setVegetarian] = useState(false)
    const [filters, setFilters] = useState({})

    const dispatch = useDispatch()

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        dispatch(FilterSettings(appliedFilters))
    }, [isGlutenFree, isVegan, isLactoseFree, isVegetarian, dispatch])


    useEffect(() => {
        navigation.setParams({ save: saveFilters })
    }, [])


    navigation.setOptions({
        headerTitle: "Filtered Meals",
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Favorite' color={"black"} iconName='ios-menu-outline' onPress={() => {
                navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Save' color='white' iconName='ios-save-outline' onPress={saveFilters} />
            </HeaderButtons>
    })


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters/Restrictions</Text>
            <FilterSwitch label={"Gluten-Free"} value={isGlutenFree} setValue={setGlutenFree} />
            <FilterSwitch label={"Lactose-Free"} value={isLactoseFree} setValue={setLactoseFree} />
            <FilterSwitch label={"Vegan"} value={isVegan} setValue={setVegan} />
            <FilterSwitch label={"Vegetarian"} value={isVegetarian} setValue={setVegetarian} />
        </View>
    )
}

export default FiltersScreen


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: "center"
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginVertical: 15
    }

})