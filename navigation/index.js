import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { TabNavigator } from './TabNavigator';

const MainNavigator = () => {
    return (
        <NavigationContainer initialRouteName="Detail">
            <TabNavigator />
        </NavigationContainer>
    )
}

export default MainNavigator