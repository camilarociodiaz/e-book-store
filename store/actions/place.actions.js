import * as FileSystem from 'expo-file-system';

import { API_MAPS_KEY } from '../../constants/DataBase';

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image, location) => {
    return async dispatch => {

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_MAPS_KEY}`);

        if (!response.ok) throw new Error('No se ha podido comunicar con Google Maps API')

        const resData = await response.json();
        if (!resData.results) throw new Error('No se ha podido obtener la dirección')

        const address = resData.results[0].formatted_address;
        console.log(address)

        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }

        dispatch({
            type: ADD_PLACE, payload: {
                title,
                image: Path,
                address,
                lat: location.lat,
                lng: location.lng
            }
        })
    }
}