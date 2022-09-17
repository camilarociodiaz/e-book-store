import { Platform, TouchableOpacity } from 'react-native'

import { COLORS } from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import MapScreen from '../screens/MapScreen'
// import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
// screens
import PlaceListScreen from '../screens/PlaceListScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () => (
    <PlaceStack.Navigator
        initialRoute='Place'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.DARK_SIENNA : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.DARK_SIENNA,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <PlaceStack.Screen
            name="Direcciones"
            component={PlaceListScreen}
            options={({ navigation }) => ({
                title: 'Direcciones',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                        <Ionicons
                            name='md-add'
                            color={Platform.OS === 'android' ? 'white' : COLORS.DARK_SIENNA}
                            size={24}
                        />
                    </TouchableOpacity>
                )
            })} 
        />
        {/* <PlaceStack.Screen
            name="Detalle"
            component={PlaceDetailScreen}
            options={{title: 'Detalle direccion'}} 
        /> */}
        <PlaceStack.Screen
            name="Nuevo"
            component={NewPlaceScreen}
            options={{title: 'Nueva direccion'}} 
        />
         <PlaceStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Mapa'}} 
        />
    </PlaceStack.Navigator>
)


export default PlaceNavigator