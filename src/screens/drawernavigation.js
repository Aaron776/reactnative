import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ImageComponent from "../components/image";

const Drawer = createDrawerNavigator();


export default function DrawerScreen() {
    return (

        <Drawer.Navigator>
            <Drawer.Screen name="secundaria" component={ImageComponent}/>
        </Drawer.Navigator>

    )
}
