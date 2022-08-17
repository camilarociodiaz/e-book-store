import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const TrendingBooks = ({ item, onSelected }) => {
    return (
        <View style={styles.trendingItem}>
            <TouchableOpacity
                onPress={() => onSelected(item)}
                style={{ ...styles.container }}
            >
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{ uri: item.cover }} />
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={{ fontFamily: 'SansRegular', fontSize: 17 }}>${item.price}</Text>
                </View>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    trendingItem: {
        flex: 1,
        margin: 5,
        height: 265,

    },
    container: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 2,


    },
    title: {
        fontFamily: 'SansBold',
        fontSize: 16,
        marginTop: 3,
        width: 120,
    },

    tinyLogo: {
        width: 120,
        height: 180,
    },
})

export default TrendingBooks