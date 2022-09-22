import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS } from '../constants/Colors';
import { EvilIcons } from '@expo/vector-icons';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import React from 'react'

const PlaceItem = ({id, title, image, address, onSelect, onDelete}) => {
    return (
        <TouchableOpacity 
            key={id}
            onPress={onSelect}
            style={styles.placeItem}
        >
        <Image style={styles.image} source={{ uri: image}} />
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(id)}>
            <EvilIcons name="trash" size={24} color={COLORS.greyAccent} />
          </TouchableOpacity>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 30
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.grey
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: COLORS.black,
        fontFamily: 'SansBold',
        fontSize: 18,
        marginBottom: 6,
    },
    address: {
        color: COLORS.greyAccent,
        fontFamily: 'SansRegular',
        fontSize: 15,
    }
})

export default PlaceItem