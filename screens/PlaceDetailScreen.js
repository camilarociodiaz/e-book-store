import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../constants/Colors';
import MapPreview from '../components/MapPreview';
import React from 'react';
import { useSelector } from 'react-redux';

const PlaceDetailScreen = ({ route }) => {
    const { placeID } = route.params;
    const place = useSelector(state => state.places.places.find(item => item.id === placeID));

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.title}> Book's name: {place.title}</Text>

            <Image source={{ uri: place.image }} style={styles.image} />
            <View style={styles.location}>
               
                <MapPreview style={styles.map} location={{ lat: place.lat, lng: place.lng }}>
                    <Text>Location not available</Text>
                </MapPreview>
                <View>
                    <Text style={styles.address}> Location: {place.address}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontFamily: 'SansSemiBold',
        fontSize: 18,
        padding: 10,
    },
    image: {
        height: '30%',
        minHeight: 200,
        margin: 10,
        width: '80%',
    },
    location: {
        width: '80%',
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10
    },
    address: {
        color: COLORS.greyAccent,
        textAlign: 'center',
        padding: 10,
        fontFamily: 'SansRegular',
    },
    map: {
        height: 250,
    }
})

export default PlaceDetailScreen;