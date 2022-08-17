import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

export const TopAuthors = ({ item, onSelected }) => {

    return (
        <View style={styles.topAuthors}>
            <TouchableOpacity
                onPress={() => onSelected(item)}
                style={{ ...styles.container }}
            >
                <View>
                    <Image
                        style={styles.photo}
                        source={{ uri: item.photo }} />
                    <Text style={styles.title}>{item.author}</Text>
                </View>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    topAuthors: {
        flex: 1,
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
        fontFamily: 'SansItalic',
        fontSize: 16,
        marginTop: 6,
        width: 100,
        textAlign: 'center',
    },

    photo: {
        width: 80,
        height: 80,
        borderRadius: 50,
        alignSelf: 'center',
    },
})
