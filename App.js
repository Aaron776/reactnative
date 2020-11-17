import React, {useState} from 'react';
import {StyleSheet, View, Platform, StatusBar, Dimensions} from 'react-native';
import ImageCarousel from "./src/components/imageCarousel";
import Login from "./src/principal/login";

const {height: screenHeigth} = Dimensions.get('window')


export default function App() {
    return (

        <Login style={styles.container}/>


    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }

});
