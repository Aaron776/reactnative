import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Dimensions, Platform, StatusBar} from 'react-native';
import {Input} from 'react-native-elements';
import List from "../components/List";
import ImageCarousel from "../components/imageCarousel";

const {height, width} = Dimensions.get('window');
export default function Login() {
    const [user, setUser] = useState("-------");
    const [password, setPassword] = useState("------");

    return (
        <SafeAreaView style={styles.container}>

            <ImageCarousel/>


            <Text>Home Screen</Text>
            <View style={styles.textInput}>
                <Input
                    placeholder='User'
                    onChangeText={returnOnChangeText => setUser(returnOnChangeText)}
                />
            </View>
            <View style={styles.textInput}>
                <Input
                    placeholder='Password'
                    secureTextEntry={true}

                    onChangeText={returnOnChangeText => setPassword(returnOnChangeText)}/>
            </View>

            <View style={styles.textInput}>
                <TouchableOpacity style={styles.openButton}><Text
                    style={{textAlign: "center"}}>Login</Text></TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        margin: 10,
        textAlign: 'center'
    },
    textInput: {
        width: 150
    }
});
