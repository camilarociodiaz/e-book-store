import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import React from 'react'

const GridItem = ({ item, onSelected}) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
                onPress={() => onSelected(item)}
                style={{...styles.container, backgroundColor: item.color}}
            >
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 8,
        height: 35,
    },
    container: {
        flex: 1,
        borderRadius: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 1,
        elevation: 1,
    },
    title: {
        fontFamily: 'SansBold',
        fontSize: 15,
        color: '#fafafa',
        paddingLeft: 8,
        paddingRight: 8,
    }
})

export default GridItem