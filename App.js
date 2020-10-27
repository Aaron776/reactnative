import React , {useState} from 'react';
import {StyleSheet, View, Platform, StatusBar} from 'react-native';
import ListPage from "./src/Lista/lista";

export default function App() {
    return (
        <ListPage style={styles.container}></ListPage>
    
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },

});
