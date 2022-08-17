import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { deleteOrder, getOrders } from '../store/actions/order.actions';
import { useDispatch, useSelector } from 'react-redux';

import OrderItem from '../components/OrderItem'

const OrderItemScreen = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.list)
    useEffect(() => {
        dispatch(getOrders());
    }, []);

    const onHandlerDeleteItem = (id) => dispatch(deleteOrder(id));

    const renderCartItem = ({ item }) => (
        <OrderItem item={item} onDelete={onHandlerDeleteItem} />
    )

    return (
       
            <View style={styles.container}>
                <Text style={styles.title}>  Check your orders </Text>
                <FlatList
                    data={orders}
                    renderItem={renderCartItem}
                    keyExtractor={(item) => item.id}
                    numColumns={1}
                    onRefresh={() => dispatch(getOrders())}
                    refreshing={false}
                />
            </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10,
        marginTop: 50,
    },
    title: {
        alignSelf: 'center',
        fontFamily: 'SansBold',
        fontSize: 20,
        margin: 15,

    },
})

export default OrderItemScreen