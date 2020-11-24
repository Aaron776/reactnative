import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import ImageCarousel from "../components/imageCarousel";
import ImageComponent from "../components/image";

const Drawer = createDrawerNavigator();


export default function DrawerScreen() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="principal" component={ImageCarousel}/>
                <Drawer.Screen name="secundaria" component={ImageComponent}/>


            </Drawer.Navigator>
        </NavigationContainer>
    )
}
