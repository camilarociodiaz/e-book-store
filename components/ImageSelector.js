import * as ImagePicker from 'expo-image-picker';

import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { COLORS } from '../constants/Colors';

const ImageSelector = props => {
    const [pickedUri, setPickedUri] = useState();

    const veryPermission = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'You do not have permissions to use the camera',
                'You need to give permissions to use the camera',
                [{ text: 'Ok' }]
            )
            return false
        }
        return true
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await veryPermission();
        if (!isCameraOk) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        });

        setPickedUri(image.uri)
        props.onImage(image.uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri ? (
                    <View>

                        <Text>No image selected</Text>
                        <Image
                            style={styles.imageContainer}
                            source={require('../assets/noImage.png')}
                        />
                    </View>
                ) : (<Image
                    style={styles.image}
                    source={{ uri: pickedUri }}
                />)}
            </View>
            <TouchableOpacity
                onPress={handlerTakeImage}
                style={styles.button}
            >
                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'SansBold' }}>Take picture</Text>
            </TouchableOpacity>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        width: '80%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        marginTop: 10,
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    button: {
        margin: 5,
        padding: 10,
        backgroundColor: COLORS.accent,
        borderRadius: 10,
    }
})

export default ImageSelector;