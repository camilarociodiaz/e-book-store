import { COLORS } from '../constants/Colors';
import CartScreen from '../screens/CartScreen';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.accent : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.accent,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen 
                name="Cart"
                component={CartScreen}
                options={{ title: 'Carrito' }}
            />
        </Stack.Navigator>
    )   
}

export default CartNavigator;