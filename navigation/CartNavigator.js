import CartScreen from '../screens/CartScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
              }}>
            <Stack.Screen 
                name="Cart"
                component={CartScreen}
            />
        </Stack.Navigator>
    )   
}

export default CartNavigator;