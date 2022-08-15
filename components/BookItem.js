import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const BookItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.item}>
                <View style={styles.bookItem}>
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.details}>{item.description}</Text>
                        <Text style={styles.details}>${item.price}</Text>
                    </View>
                    <View>
                        <Image style={styles.tinyLogo} source={{ uri: item.cover }} />
                    </View>
                </View>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    bookItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: 'red',
        flex: 1,
    },
    name: {
        fontFamily: 'SansBold',
        fontSize: 20,
    },
    details: {
        fontSize: 18
    },
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tinyLogo: {
        width: 50,
        height: 80,
    },
})

export default BookItem