import * as Location from 'expo-location';

import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { COLORS } from '../constants/Colors';
import MapPreview from '../components/MapPreview';
import { useNavigation } from '@react-navigation/native';

const LocationSelector = ({ onLocation, mapLocation }) => {
    const [pickedLocation, setPickedLocation] = useState();
    const navigation = useNavigation();

    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) {
            return
        }

        const location = await Location.getCurrentPositionAsync({
            timeout: 2000,
        });

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });
        onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
    }

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Insufficient permissions',
                'You need permissions to use location',
                [{ text: 'OK' }]
            )
            return false;

        }
        return true
    }

    const handlePickOnMap = async () => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) {
            return
        }
        navigation.navigate('Map')
    }

    useEffect(() => {
        if (mapLocation) {
            setPickedLocation(mapLocation)
            onLocation(mapLocation)
        }
    }, [mapLocation])

    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <View>

                    <Text>No location selected</Text>
                    <Image
                        style={styles.imageContainer}
                        source={require('../assets/noLocation.png')}
                    />
                </View>
            </MapPreview>
            <View style={styles.actions}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleGetLocation}
                >
                    <Text style={{color: 'white', fontSize: 15, fontFamily: 'SansBold'}}>Get location</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handlePickOnMap}
                >
                    <Text style={{color: 'white', fontSize: 15, fontFamily: 'SansBold'}}>Choose from map</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        width: '80%',
        height: 150,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: 5,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    actions: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        marginTop: 10,
        width: 100,
        height: 100,
        alignSelf: 'center'
    }
    ,
    button: {
        margin: 5,
        padding: 10,
        backgroundColor: COLORS.accent,
        borderRadius: 10,
    }
})

export default LocationSelector;