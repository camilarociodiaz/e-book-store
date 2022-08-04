import {BookDetail} from '../screens/BookDetailScreen'
import {CategoriesScreen} from '../screens/CategoriesScreen'
import {Home} from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const ShopNavigator = () => {
  return (
 <NavigationContainer initialRouteName="Detail">
<Stack.Navigator>
<Stack.Screen name='Home' component={Home} />
<Stack.Screen name='Categories' component={CategoriesScreen} />
<Stack.Screen name='Detail' component={BookDetail} />
</Stack.Navigator>
 </NavigationContainer>
  )
}