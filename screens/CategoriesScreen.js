import { FlatList, Text } from 'react-native'

import { BOOKS } from '../data/books'
import BookItem from '../components/BookItem'
import React from 'react'

export const CategoriesScreen = ({ navigation, route }) => {
    const books = BOOKS.filter(book => book.category === route.params.categoryID);

    const handleSelected = (item) => {
        navigation.navigate('Detail', {
            productID: item.id,
            name: item.name,
        });
    }

    const renderItemBook = ({ item }) => (
        <BookItem item={item} onSelected={handleSelected} />
    )
    return (
        <>
            <FlatList data={books}
                keyExtractor={item => item.id}
                renderItem={renderItemBook} />
        </>
    );

}
