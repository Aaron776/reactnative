import React from 'react';
import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";

export default function Principal() {
    return (
        <View style={styles.container}>
            <Text>
                Hola Munda! Soy Rafael Falconí
            </Text>
            <StatusBar style="auto"/>
        </View>
    )

}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#efeeaa',
        alignItems: 'center',
        justifyContent: 'center'
    }
})