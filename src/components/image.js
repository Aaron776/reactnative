import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default function ImageComponent() {
    return (
        <View>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    },

});
