import { Text, View } from 'react-native'

import {Button} from 'react-native';
import React from 'react'

export const CategoriesScreen = ({navigation}) => {
    return (
        <View>
            <Text> CategoriesScreen</Text>
            <Button title='detail' onPress={() => {navigation.navigate('Detail')}}> </Button>
    </View>
    )
}
