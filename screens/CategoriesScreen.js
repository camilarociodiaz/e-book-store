import { FlatList, StyleSheet, View } from 'react-native'
import { filteredBook, selectBook } from '../store/actions/book.actions'
import { useDispatch, useSelector } from 'react-redux'

import BookItem from '../components/BookItem'
import React from 'react'
import { useEffect } from 'react'

export const CategoriesScreen = ({ navigation, route }) => {

    // redux
    const dispatch = useDispatch()
    const categoryBooks = useSelector(store => store.books.filteredBook)
    const category = useSelector(store => store.categories.selected)

    useEffect(() => {
        dispatch(filteredBook(category.id))
    },[])

    const handleSelected = (item) => {
        dispatch(selectBook(item.id))
        navigation.navigate('Detail', {
            book: item.name
        })
    }

    const renderItemBook = ({ item }) => (
        <>
        <BookItem item={item} onSelected={handleSelected} />
        <View style={styles.footer} />
        </>
    )
    return (
        <>
            <FlatList data={categoryBooks}
                keyExtractor={item => item.id}
                renderItem={renderItemBook}
                style={{marginTop:50}} />
        </>
    );

}

const styles = StyleSheet.create({
    footer: {
        padding: 6,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
      },

})
