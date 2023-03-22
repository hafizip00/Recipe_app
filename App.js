import 'react-native-gesture-handler'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler"
import Colors from "./Constants/Colors";
import { Ionicons } from "@expo/vector-icons";



import CategoriesScreens from './screeens/CategoriesScreens'
import CategoryMealScreen from "./screeens/CategoryMealsScreen"
import MealDetail from './screeens/MealDetailsScreen'

import FavoritesScreeen from "./screeens/FavoritesScreen"
import FiltersScreen from "./screeens/FiltersScreen"

import { createStore, combineReducers } from 'redux';
import mealReducer from './Store/reducer/meals';

import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  meals: mealReducer
})

const store = createStore(rootReducer)


const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: Colors.primaryColor },
      headerTintColor: "white",
    }}>
      <Stack.Screen name="Categories" component={CategoriesScreens} />
      <Stack.Screen name="Meal Category" component={CategoryMealScreen} />
      <Stack.Screen name="Meal Detail" component={MealDetail} />
    </Stack.Navigator>
  )
}



const FvrtStack = createNativeStackNavigator()
const Fvrts = () => {
  return (
    <FvrtStack.Navigator screenOptions={
      {
        headerStyle: { backgroundColor: Colors.accent },
        headerTintColor: "white",
      }
    }>
      <Stack.Screen name="Favorites" component={FavoritesScreeen} />
      <Stack.Screen name="Meal Detail" component={MealDetail} />
    </FvrtStack.Navigator>
  )
}


const bottomTab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <bottomTab.Navigator screenOptions={{
      headerStyle: { backgroundColor: Colors.primaryColor },
      tabBarActiveTintColor: Colors.accent,
      tabBarInactiveTintColor: Colors.primaryColor,
      tabBarStyle: {
        position: "absolute",
        paddingBottom: 10,
        height: 70,
        bottom: 20,
        right: 30,
        left: 30,
        borderRadius: 16,
        elevation: 3
      },
    }}>
      <bottomTab.Screen name="Meals" component={StackNav}

        options={{
          tabBarActiveTintColor: Colors.accent,
          tabBarInactiveTintColor: Colors.primaryColor,
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name={focused === true ? "ios-restaurant" : "ios-restaurant-outline"}
              size={focused ? 25 : 20}
              color={color} />
          },
        }
        }
      />
      <bottomTab.Screen name="Favorites" component={Fvrts} options={{
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.primaryColor,
        headerShown: false,
        tabBarIcon: ({ color, focused }) => {
          return <Ionicons name={focused ? "ios-star" : "ios-star-outline"}
            size={focused ? 25 : 20}
            color={color} />
        },
      }} />
    </bottomTab.Navigator>
  )
}
const Fltr = createNativeStackNavigator()

const Filter = () => {
  return (
    <Fltr.Navigator screenOptions={{
      headerStyle: { backgroundColor: Colors.primaryColor },
      headerTintColor: "white",
    }}>
      <Fltr.Screen name='Filtered Meals' component={FiltersScreen} />
    </Fltr.Navigator>
  )
}

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false
    }}>
      <Drawer.Screen name="All Meals" component={BottomTab} options={{
        drawerLabel: "Meals",
        drawerLabelStyle: {
          color: Colors.primaryColor
        }
      }} />
      <Drawer.Screen name="Filtered" component={Filter} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
        {/* <BottomTab /> */}
      </NavigationContainer>
    </Provider>
  );
}

