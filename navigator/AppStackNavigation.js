import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppStackNavigation = () => {
    return (

        <Stack.Navigator initialRouteName="DSARecipes">
            <Stack.Screen name="DSARecipes" component={LandingScreen} options={{
                headerStyle: {
                    backgroundColor: 'black',
                    opacity: 0.8,
                    borderBottomWidth: 2,
                    borderColor: 'white'
                },
                headerTitleStyle: {
                    color: 'white'
                }
            }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerStyle: {
                    backgroundColor: 'black',
                    opacity: 0.8,
                    borderBottomWidth: 2,
                    borderColor: 'white'
                },
                headerTitleStyle: {
                    color: 'white'
                }
            }} />
        </Stack.Navigator>

    )
}

export default AppStackNavigation;