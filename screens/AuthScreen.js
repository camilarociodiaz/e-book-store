import { Alert, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { login, signup } from '../store/actions/auth.actions';
import { useCallback, useReducer, useState } from 'react'

import { COLORS } from '../constants/Colors';
import { useDispatch } from 'react-redux';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

export const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value,
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        }
        let formIsValid = true;

        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }

        return {
            formIsValid,
            inputValues,
            inputValidities,
        }
    }
    return state;
};


const AuthScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    });


    const title = 'Create your ebook store account',
        messageAction = 'Sign up',
        messageTarget = 'Login';

    const handleSignUp = () => {
        if (formState.formIsValid) {
            dispatch(signup(formState.inputValues.email,formState.inputValues.password));
        } else {
            Alert.alert(
                'Invalid form',
                'Enter email and valid username',
                [{ text: 'OK' }]
            );
        }
    }

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
        });
    }, [formDispatch])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.screen}
        >

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/authIcon.png')}
                />
            </View>
            <View style={styles.container}>

                <Text style={styles.title}>{title}</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        autoCapitalize='none'
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <View style={styles.prompt}>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={styles.promptButton}>{messageTarget}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(login(email, password))}>
                        <Text style={styles.promptButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'SansBold',
        marginBottom: 18,
        textAlign: 'center'
    },
    container: {
        width: '80%',
        height: '40%',
        maxWidth: 400,
        padding: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgrounColor: 'white',
    },

    prompt: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        margin: 30,
    },
    promptButton: {
        fontSize: 18,
        fontFamily: 'SansBold',
        color: COLORS.accent,


    },
    inputContainer: {
        justifyContent: 'space-around',
        height: '50%'
    },
    input: {
        width: '100%',
        borderBottomWidth: 1.5,
        borderColor: 'grey',
        paddingTop: 20,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 250,
        height: 250,

    },
    label: {
        paddingTop: 20,
     
    }
})

export default AuthScreen