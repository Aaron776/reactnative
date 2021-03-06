import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from "react-native";

const {width: screenWidth} = Dimensions.get('window')
export default function ItemList(props) {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('item',
                        {
                            id: props.element.id
                        }
                    )
                }}

                style={styles.item}>
                <View style={styles.containerImage}>
                    <Image style={styles.image} source={{uri: props.element.photo}}/>
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
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 5,
        flexDirection: 'row',
        width: screenWidth - 10
    },
    containerImage: {
        flex: 1,
        margin: 10
    },
    image: {
        width: 30,
        height: 30
    },
    containerInfo: {
        flex: 5,
        margin: 10
    }

})
