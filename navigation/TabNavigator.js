import { StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../constants/Colors';
import CartNavigator from './CartNavigator'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import OrdersNavigator from './OrdersNavigator';
import PlaceNavigator from './PlaceNavigator'
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
        name="shopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Entypo name="book" size={24} color={focused ? COLORS.black : COLORS.greyAccent} />
              <Text style={{ color: focused ? COLORS.black : COLORS.greyAccent }}>Shop</Text>
            </View>
          )
        }} />

      <BottomsTabs.Screen
        name="CartTab"
        component={CartNavigator}

        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Entypo name="shopping-cart" size={24} color={focused ? COLORS.black : COLORS.greyAccent} />
              <Text style={{ color: focused ? COLORS.black : COLORS.greyAccent }}>Cart</Text>
            </View>
          )
        }} />
     
      <BottomsTabs.Screen
            name="StoreTab"
            component={PlaceNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                      <Ionicons name="library" size={24} color={focused ? COLORS.black : COLORS.greyAccent} />
                        <Text style={{  color: focused ? COLORS.black : COLORS.greyAccent}}>Swap books</Text>
                    </View>
                )
            }}
        />

<BottomsTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Entypo name="shopping-bag" size={24} color={focused ? COLORS.black : COLORS.greyAccent} />
              <Text style={{ color: focused ? COLORS.black : COLORS.greyAccent }}>Orders</Text>
            </View>
          )
        }}
      />
    </BottomsTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: '11%',
    padding: 12,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
    opacity: 0.5,



  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
});

