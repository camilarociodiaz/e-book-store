import {StyleSheet, Text, View} from 'react-native'

import React from 'react'
import { useSelector } from 'react-redux'

const BookDetail = () => {

    const  book = useSelector(store => store.books.selected)

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{book.name}</Text>
            <Text>{book.description} </Text>
            <Text> ${book.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontFamily: 'SansBold',
        marginBottom: 10
    }
})

export default BookDetail;