import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import ListPage from '../Lista/lista';
import Item from "../Lista/item";

const Stack = createStackNavigator();


export default function Principal() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={ListPage} options={{
                title: 'My home',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>
            <Stack.Screen name="item" component={Item}/>

        </Stack.Navigator>

    )
}
