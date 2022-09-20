import { URL_AUTH_SIGNIN, URL_AUTH_SIGNUP } from "../../constants/DataBase";

import { Alert } from "react-native";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGNUP, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            const errorID = errorResponse.error.message;

            let message = 'Failed to register';
            let messageError2 = '';
            if (errorID === 'EMAIL-EXISTS') messageError2 = 'This email is already registered';

            console.log(message, messageError2)
            Alert.alert(
                message,
                messageError2,
                [{ text: 'OK' }]
            )
        }

        const data = await response.json();

        dispatch({
            type: SIGNUP,
            token: data.idToken,
            userId: data.localId,
        })
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGNIN, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        });

        if (!response.ok) {
            const errorResponse = await response.json();

            const errorID = errorResponse.error.message;

            let message = 'Failed to login';
            let messageError = '';
            if (errorID === 'EMAIL_NOT_FOUND') messageError = 'The email doesnt exist';
            if (errorID === 'INVALID_PASSWORD') messageError = 'The password is incorrect';

            Alert.alert(
                message,
                messageError,
                [{ text: 'OK' }]
            )

            console.log(message, messageError)
        }

        const data = await response.json();

        dispatch({
            type: LOGIN,
            token: data.idToken,
            userId: data.localId,
        })
    }
}