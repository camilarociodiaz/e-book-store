import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { confirmCart, removeItem } from '../store/actions/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../constants/Colors'
import { CartItem } from '../components/CartItem';
import React from 'react'

const CartScreen = () => {
  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total));
  }
  const handlerDeleteItem = (id) => {
    dispatch(removeItem(id))
  }

  const renderItems = ({ item }) => {
    return (
      <CartItem item={item} onDelete={handlerDeleteItem} />
    )
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderItems}
          keyExtractor={item => item.id}

        />
      </View>
      <View style={styles.footer} />
      <View style={styles.total}>
        <Text style={styles.text}>Total: ${total}</Text>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text style={styles.text}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 12,
    paddingBottom: 120,
    backgroundColor: '#fafafa',
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },

  total: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginTop: 0,
    margin: 30,
    alignSelf: 'stretch',
  },
  confirm: {
    backgroundColor: COLORS.greyPrimary,
    borderRadius: 20,
    padding: 5,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    shadowColor: COLORS.black,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,

  },
  text: {
    fontSize: 18,
    fontFamily: 'SansSemiBold',
    padding: 8,
    alignSelf: 'center',
    color: COLORS.black,
  }
})


export default CartScreen