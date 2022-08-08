import { filteredBook, selectBook } from '../store/actions/book.actions'
import { useDispatch, useSelector } from 'react-redux'

import BookItem from '../components/BookItem'
import { FlatList } from 'react-native'
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
        <BookItem item={item} onSelected={handleSelected} />
    )
    return (
        <>
            <FlatList data={categoryBooks}
                keyExtractor={item => item.id}
                renderItem={renderItemBook} />
        </>
    );

}
