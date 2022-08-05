import { StyleSheet, Text, View } from 'react-native'

import CartNavigator from './CartNavigator'
import { Entypo } from '@expo/vector-icons';
import React from 'react'
import ShopNavigator from './ShopNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomsTabs = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <BottomsTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar
  }}>
      <BottomsTabs.Screen
        name="shop"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Entypo name="book" size={24} color={focused ? '#3B758C' : 'black'} />
              <Text style={{ color: focused ? '#3B758C' : 'black' }}>Shop</Text>
            </View>
          )
        }} />

      <BottomsTabs.Screen
        name="Cart"
        component={CartNavigator}

        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
               <Entypo name="shopping-cart" size={24}  color={focused ? '#3B758C' : 'black'} />
              <Text style={{ color: focused ? '#3B758C' : 'black' }}>Cart</Text>
            </View>
          )
        }} />
    </BottomsTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: '#cecece',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.50,
    shadowRadius: 0.50,
    elevation: 3,
    position: 'absolute',
    backgroundColor:'white',
    height: '10%',
    padding: 12,

 
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    
  }
});

