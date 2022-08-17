import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import GridItem from '../components/GridItem'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import { TopAuthors } from '../components/TopAuthors'
import TrendingBooks from '../components/TrendingBooks'
import { selectBook } from '../store/actions/book.actions';
import { selectCategory } from '../store/actions/category.action'
import { useState } from 'react'

export const Home = ({ navigation }) => {

    const categories = useSelector(store => store.categories.categories)
    const books = useSelector(store => store.books.books)
    const dispatch = useDispatch()

    const handleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', {
            name: item.title
        });
    }

    const handleSelected = (item) => {
        dispatch(selectBook(item.id))
        navigation.navigate('Detail', {
            book: item.name
        })
    }

    const renderGridItem = ({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
    )

    const renderTrendingBooks = ({ item }) => (
        <TrendingBooks item={item} onSelected={handleSelected} />
    )

    const renderTopAuthors = ({ item }) => (
        <TopAuthors item={item} onSelected={handleSelected} />
    )

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);


    return (
        <SafeAreaView style={{backgroundColor: '#fafafa'}}>
            <ScrollView>
                <View >
                    <Searchbar
                        style={styles.search}
                        placeholder="Search your book"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        fontSize={15}
                    />
                    <Text style={styles.title}> Categories</Text>
                    <FlatList
                        data={categories}
                        renderItem={renderGridItem}
                        keyExtractor={item => item.id}
                        numColumns={1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}

                    />
                    <Text style={styles.title}> Trending books</Text>
                    <FlatList
                        horizontal={true}
                        data={books}
                        renderItem={renderTrendingBooks}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                    <Text style={styles.title}> Top authors</Text>
                    <FlatList
                        horizontal={true}
                        data={books}
                        renderItem={renderTopAuthors}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    search: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10,
        marginTop: 25,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 1,
        borderRadius: 20,
  

    },
    title: {
        textAlign: 'left',
        fontFamily: 'SansSemiBold',
        fontSize: 25,
        margin: 8,
    },
})