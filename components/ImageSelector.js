import * as ImagePicker from 'expo-image-picker';

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
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
            aspect: [5, 4],
            quality: 0.8
        });

        setPickedUri(image.uri)
        props.onImage(image.uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri ? (<Text>No image selected</Text>) : (<Image 
                    style={styles.image}
                    source={{ uri: pickedUri }}
                    />)}
            </View>
            <Button 
                title='Take picture'
                color={COLORS.accent}
                onPress={handlerTakeImage}
            />
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
        width: '90%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ImageSelector;