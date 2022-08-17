import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS } from '../constants/Colors';
import { EvilIcons } from '@expo/vector-icons';
import React from 'react'

export const CartItem = ({ item, onDelete }) => {




  return (
    <View style={styles.item}>
      <View style={styles.detail}>
        <View>
          <Image style={styles.tinyCover} source={{ uri: item.cover }} />
        </View>
        <View>
          <Text style={styles.header}>{item.name}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Text>Price: ${item.price}</Text>
        </View>
        <View>
          <Text style={styles.price}>${item.price * item.quantity}</Text>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <EvilIcons name="trash" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontFamily: 'SansBold'
  },
  detail: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.greyPrimary,
    padding: 8,
    borderColor:COLORS.greyAccent,
    borderRadius: 20,
    shadowColor: COLORS.greyAccent,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  price: {
    justifyContent: 'center',
    fontFamily: 'SansBold',
    fontSize: 20,
    marginBottom: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'SansBold'
  },
  tinyCover: {
    width: 60,
    height: 90,
  },
})
