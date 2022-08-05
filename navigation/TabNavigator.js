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
    shadowColor: '#7f5df0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
