import * as addressAction from '../store/actions/place.actions'

import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PlaceItem from '../components/PlaceItems'

const PlaceListScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places)

    const renderItem = (data) => (
        <PlaceItem
            id={data.item.id}
            title={data?.item.title}
            image={data?.item.image}
            address={data?.item.address}
            onSelect={() => navigation.navigate('Detail', {
                placeID: data.item.id
            })}
        />
    )

    useEffect(() => {
        dispatch(addressAction.loadAddress())
    }, [])

    return (
        <>
            {places?.length > 0 ? (
                <FlatList
                    data={places}
                    renderItem={renderItem}
                />
            ) : (
                <View style={styles.container}>
                    <Text style={styles.text}>This section was created for you can sell your used books.</Text>
                    <Image
                        style={styles.imageContainer}
                        source={require('../assets/book1.png')}
                    />
                    <Text style={styles.text}>Take a picture of them and put the location of where to look for the book!</Text>
                </View>

            )
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50

    },
    text: {
        fontSize: 18,
        fontFamily: 'SansBold',
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    imageContainer: {
        width: "80%",
    }
})

export default PlaceListScreen