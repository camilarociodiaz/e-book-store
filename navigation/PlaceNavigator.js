import { Platform, TouchableOpacity } from 'react-native'

import { COLORS } from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import MapScreen from '../screens/MapScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import PlaceListScreen from '../screens/PlaceListScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () => (
    <PlaceStack.Navigator
        initialRoute='Place'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.greyAccent : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.greyAccent,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <PlaceStack.Screen
            name="Sell books"
            component={PlaceListScreen}
            options={({ navigation }) => ({
                title: 'Sell your books',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('New')}>
                        <Ionicons
                            name='md-add'
                            color={Platform.OS === 'android' ? 'white' : COLORS.greyAccent}
                            size={24}
                        />
                    </TouchableOpacity>
                )
            })} 
        />
       <PlaceStack.Screen
            name="Detail"
            component={PlaceDetailScreen}
            options={{title: 'Book detail'}} 
        /> 
        <PlaceStack.Screen
            name="New"
            component={NewPlaceScreen}
            options={{title: 'New book'}} 
        />
         <PlaceStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Map'}} 
        />
    </PlaceStack.Navigator>
)


export default PlaceNavigator