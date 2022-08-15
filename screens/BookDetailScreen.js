import {StyleSheet, Text, View} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import {Button} from 'react-native';
import React from 'react'
import { addItem } from '../store/actions/cart.actions'

const BookDetail = ({navigation }) => {
const dispatch = useDispatch();
    const  book = useSelector(store => store.books.selected)
    const handlerAddItemCart = () => dispatch(addItem(book))

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{book.name}</Text>
            <Text>{book.description} </Text>
            <Text> ${book.price}</Text>
            <Button title='Add to cart' onPress={handlerAddItemCart}/>
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