import { FlatList, StyleSheet, View } from 'react-native'

import { CATEGORIES } from '../data/categories'
import GridItem from '../components/GridItem'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import { useState } from 'react'

export const Home = ({ navigation }) => {
    const handleSelectedCategory = (item) => {
        navigation.navigate('Products', {
            categoryID: item.id,
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
            <Searchbar
            style={styles.search}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <FlatList
                data={CATEGORIES}
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
      margin: 20,
    },
})