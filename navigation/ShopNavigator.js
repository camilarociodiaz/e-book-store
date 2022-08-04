import BookDetail from '../screens/BookDetailScreen'
import { COLORS } from '../constants/Colors'
import {CategoriesScreen} from '../screens/CategoriesScreen'
import {Home} from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const ShopNavigator = () => {
  return (
 <NavigationContainer initialRouteName="Detail">
<Stack.Navigator
screenOptions={{
  headerStyle: {
      backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
  headerTitleStyle: {
      fontWeight: 'bold'
  }
}}>
<Stack.Screen name='Home' component={Home} />
<Stack.Screen name='Products' component={CategoriesScreen} options={({route}) => ({ title: route.params.name})} />
<Stack.Screen name='Detail' component={BookDetail}  />
</Stack.Navigator>
 </NavigationContainer>
  )
}