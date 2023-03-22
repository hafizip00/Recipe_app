import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CATEGORIES } from '../data/dummy-data'
import GridTile from '../components/GridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

const CategoriesScreens = (props) => {

    const navigation = useNavigation()
    const renderItem = (renderItem) => {
        return (
            <GridTile title={renderItem.item.title}
                id={renderItem.item.id}
                color={renderItem.item.color}
                onSelect={() => navigation.navigate({
                    name: "Meal Category", params: {
                        categoryId: renderItem.item.id
                    }
                })}
            >
            </GridTile>

        )
    }
    navigation.setOptions({
        headerTitle: "Delicious",
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Favorite' color='red' iconName='ios-menu-outline' onPress={() => {
                navigation.toggleDrawer()
            }} />
        </HeaderButtons>

    })
    return (
        <View>
            <FlatList data={CATEGORIES} numColumns={2} renderItem={renderItem}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    )
}

export default CategoriesScreens

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    gridItemsStyle: {
        flex: 1,
        margin: 15,
        height: 150
    }
})