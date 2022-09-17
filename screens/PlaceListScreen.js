import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PlaceItem from '../components/PlaceItems'

const PlaceListScreen = ({ navigation }) => {
    const places = useSelector(state => state.places.places)

    const renderItem = (data) => (
        <PlaceItem
            id={data.item.id}
            title={data?.item.title}
            image={data?.item.image}
            address={data?.item.address}
            onSelect={() => navigation.navigate('Detalle',
        {placeID: data.item.id,
        })}
        />
    )


    return (
        <FlatList
            data={places}
            renderItem={renderItem}
            keyExtractor={(item) => Date.now()}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default PlaceListScreen