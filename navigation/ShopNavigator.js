import BookDetail from '../screens/BookDetailScreen'
import { COLORS } from '../constants/Colors'
import { CategoriesScreen } from '../screens/CategoriesScreen'
import { Home } from '../screens/Home'
import { Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Stack.Screen name='Welcome to the e-book store' component={Home} />
      <Stack.Screen name='Products' component={CategoriesScreen} options={({ route }) => ({ title: route.params.name })} />
      <Stack.Screen name='Detail' component={BookDetail} />
    </Stack.Navigator>

  )
}

export default ShopNavigator;