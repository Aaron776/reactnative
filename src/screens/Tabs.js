import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DrawerScreen from "./drawernavigation";
import Principal from "./stacknavigation";
const Tab = createMaterialTopTabNavigator();


export default function TabNavigationScreens() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="principal" component={Principal}/>
                <Tab.Screen name="secundaria" component={DrawerScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
