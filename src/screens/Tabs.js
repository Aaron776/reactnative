import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ImageCarousel from "../components/imageCarousel";
import ImageComponent from "../components/image";

const Tab = createMaterialTopTabNavigator();


export default function TabNavigationScreens() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="principal" component={ImageCarousel}/>
                <Tab.Screen name="secundaria" component={ImageComponent}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
