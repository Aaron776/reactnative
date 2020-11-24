import React from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {useRoute} from '@react-navigation/native';
const {width: screenWidth} = Dimensions.get('window')
const {height: screenHeight} = Dimensions.get('window')
export default function Item() {

    let route = useRoute();
    let item = route.params.texto;

    return (
        <View style={styles.item}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{uri: item.photo}}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 5,
        flexDirection: 'row-reverse',
        width: screenWidth - 10
    },
    containerImage: {
        flex: 1,
        margin: 10,
        textAlign:'center'
    },
    image: {

        width: screenWidth-150,
        height: screenHeight-150
    },
    containerInfo: {
        flex: 5,
        margin: 10
    }

})
