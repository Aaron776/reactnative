import React from 'react';
import {StyleSheet, View,  Text, Image} from "react-native";

export default function ItemList(props) {
    return (
        <View style={styles.item}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{uri:props.element.photo}}/>
            </View>
            <View style={styles.containerInfo}>
                <View>
                    <Text>
                        {props.element.id}
                    </Text>
                </View>
                <View>
                    <Text>
                        {props.element.name}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    item: {
        backgroundColor:'#f9c2ff',
        padding: 20,
        marginVertical:8,
        marginHorizontal:5,
        flexDirection: 'row'
    },
    containerImage:{
        flex:1,
        margin:10
    },
    image:{
        width:30,
        height:30
    },
    containerInfo:{
        flex:5,
        margin: 10
    }

})