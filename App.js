import React , {useState} from 'react';
import {StyleSheet, View, Platform, StatusBar} from 'react-native';
import ImageComponent from "./src/components/image";
import List from "./src/principal/login";

export default function App() {
    return (

        <List style={styles.container}></List>
    
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },

});
