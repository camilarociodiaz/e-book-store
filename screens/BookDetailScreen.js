import {StyleSheet, Text, View} from 'react-native'

import React from 'react'

const BookDetail = ({ route }) => {

    const  book = route.params

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