import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import SeeMore from 'react-native-see-more-inline';

const BookItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.bookItem}>
                <View>
                    <Image style={styles.tinyCover} source={{ uri: item.cover }} />
                </View>
                <View style={styles.description}>
                    <Text style={styles.name}>{item.name}</Text>
                    <SeeMore numberOfLines={3} style={styles.details}> {item.description}
                    </SeeMore>
                    <Text style={styles.price}>${item.price}</Text>
                </View>

            </View>

        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    bookItem: {
        padding: 10,
        margin: 10,
        borderRadius: 3,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
    },
    description: {
        width: '70%',
    },
    name: {
        fontFamily: 'SansBold',
        fontSize: 20,
    },
    details: {
        fontSize: 15
    },
    tinyCover: {
        width: 80,
        height: 120,
    },
    price: {
        fontFamily: 'SansBold',
        fontSize: 17,
        marginTop: 5,

    },
})

export default BookItem