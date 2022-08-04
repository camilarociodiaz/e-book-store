import { Button, Text, View } from 'react-native'

import React from 'react'

export const Home = ({navigation}) => {
    return (
        <View>
            <Text> homeeee </Text>
            <Button title='categories' onPress={() => {navigation.navigate('Categories')}}> </Button>

        </View>
    )
}
