import React , {useState} from 'react';
import {StyleSheet, View, Platform, StatusBar} from 'react-native';
import ListPage from "./src/Lista/lista";
import Login from "./src/principal/login";

export default function App() {
    return (
        <Login style={styles.container}></Login>
    
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },

});
