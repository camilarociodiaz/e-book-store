import * as Location from 'expo-location';

import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { COLORS } from '../constants/Colors';
import MapPreview from '../components/MapPreview';
import { useNavigation } from '@react-navigation/native';

const LocationSelector = ({onLocation, mapLocation}) => {
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

    const handlePickOnMap = async() => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) {
            return
        }
        navigation.navigate('Map')
    }

    useEffect(() => {
        if(mapLocation) {
            setPickedLocation(mapLocation)
            onLocation(mapLocation)
        }
    }, [mapLocation])

    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <Text>Location not selected.</Text>
            </MapPreview>
            <View style={styles.actions}>
                <Button 
                    title='Get location'
                    color={COLORS.accent}
                    onPress={handleGetLocation}
                />
                <Button
                    title='Choose from map'
                    color={COLORS.accent}
                    onPress={handlePickOnMap}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        width: '90%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default LocationSelector;