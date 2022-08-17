import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import React from 'react'
import { addItem } from '../store/actions/cart.actions'

const BookDetail = ({ navigation }) => {
    const dispatch = useDispatch();
    const book = useSelector(store => store.books.selected)
    const handlerAddItemCart = () => dispatch(addItem(book))

    const image = { uri: book.cover };

    return (
       
        <View style={styles.screen}>
            <ImageBackground source={image} resizeMode="contain" style={styles.image}>
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.99)']}
                    style={styles.backgroundDegrade}
                />
                <View style={styles.background}>
                    <View>
                        <Text style={styles.title}>{book.name}</Text>
                        <Text style={{ fontFamily: 'SansBoldItalic', fontSize: 22, color: 'white', marginBottom: 15, alignSelf: 'center', }}>By {book.author}</Text>
                    </View>
                    <View style={styles.rate}>
                        <View>
                            <Text style={{ fontFamily: 'SansRegular', fontSize: 15, color: 'white',textAlign: 'center', }}>Rate </Text>
                            <Text style={{ fontFamily: 'SansBold', fontSize: 20, color: 'white',textAlign: 'center', }}>{book.rate}</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'SansRegular', fontSize: 15, color: 'white', textAlign: 'center', }}>Lenguage </Text>
                            <Text style={{ fontFamily: 'SansBold', fontSize: 20, color: 'white',textAlign: 'center', }}>{book.language} </Text>

                        </View>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'SansRegular', fontSize: 26, marginTop: 10, color: 'white', }}>Introduction</Text>
                        <View style={{ height: 135, width: '90%' }}>
                            <Text style={{ fontFamily: 'SansLight', fontSize: 15, color: 'white', textAlign: 'justify', }}> {book.description}</Text>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.like}>
                            <FontAwesome name="heart" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlerAddItemCart} style={styles.confirm} >
                            <Text style={styles.text}>Add to cart</Text>
                            <Text style={styles.text}>${book.price}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View >
        
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
        bottom: 0,
    },
    title: {
        fontSize: 30,
        fontFamily: 'SansBlack',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    },
    confirm: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        textAlign: 'justify',
    },
    like: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 15,
        margin: 5,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: "#fafafa",


    },
    text: {
        flex: 1,
        color: 'black',
        fontSize: 17,
        fontFamily: 'SansBold',
        alignSelf: 'center',
        textAlign: 'center',
    },
    image: {
        marginTop:50,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '60%',

    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        top: '15%',
    },
    backgroundDegrade: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "60%",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "90%",
        margin: 15,

    },
    rate: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "90%",
    },
    rateDetail: {
        display: 'flex',
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    }
})

export default BookDetail;