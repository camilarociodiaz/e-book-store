import { COLORS } from '../constants/Colors'
import OrderItemScreen from '../screens/OrderItemScreen';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}>
            <Stack.Screen 
                name="Orders"
                component={OrderItemScreen}
                options={{ title: 'Orders' }}
            />
        </Stack.Navigator>
    )   
}

export default OrdersNavigator;