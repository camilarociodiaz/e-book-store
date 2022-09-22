import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

import { COLORS } from '../constants/Colors'
import ImageSelector from '../components/ImageSelector';
import LocationSelector from '../components/LocationSelector';
import { addPlace } from '../store/actions/place.actions';
import { useDispatch } from 'react-redux';

const NewPlaceScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState(null);
    const handleTitleChange = text => setTitle(text)

    const handleSave = () => {
        dispatch(addPlace(title, image, location));
        navigation.navigate('Sell books');
    }

    return (
        <ScrollView 
        style={{ flex: 1 }} 
        scrollEnabled={true} >
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={handleTitleChange}
            />
            <ImageSelector onImage={image => setImage(image)} />
            <LocationSelector onLocation={setLocation} mapLocation={route?.params?.mapLocation} />
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.textButton}>Record Book </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
    label: {
        fontSize: 20,
        margin: 15,
        marginBottom: 0,
        fontFamily: 'SansBold',
    },
    input: {
        width: '80%',
        alignSelf: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingVertical: 4,
        fontSize: 16,
        fontFamily: 'SansItalic'
    },
    button: {
        marginTop: 3,
        backgroundColor: COLORS.greyPrimary,
        borderRadius: 15,
        padding: 5,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
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
    textButton: {
        fontSize: 14,
        fontFamily: 'SansSemiBold',
        padding: 3,
        alignSelf: 'center',
        color: COLORS.black,
    },
})

export default NewPlaceScreen

