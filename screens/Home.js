import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import GridItem from '../components/GridItem'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import { selectCategory } from '../store/actions/category.action'
import { useState } from 'react'

export const Home = ({ navigation }) => {

    const categories = useSelector(store => store.categories.categories)
    const dispatch = useDispatch()

    const handleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', {
            name: item.title
        });
    }

    const renderGridItem = ({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
    )

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);


    return (
        <View>
            <Text style={styles.title}> Welcome to the e-book store</Text>
            <Searchbar
                style={styles.search}
                placeholder="Search your book"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Text style={styles.title}> Categories</Text>
            <FlatList
                data={categories}
                renderItem={renderGridItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        width: '80%',
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 15,
    },
    title: {
        alignSelf: 'center',
        fontFamily: 'SansBold',
        fontSize: 25,
        margin: 15,

    },
})