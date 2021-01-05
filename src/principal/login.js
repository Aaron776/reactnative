import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Dimensions, Platform, StatusBar } from 'react-native';
import { Input } from 'react-native-elements';
import ContextNavigation from "../screens/context";
import firebase from "../firebase/firebase";
import "firebase/firestore";
const { height, width } = Dimensions.get('window');
export default function Login({ navigation }) {
    const [user, setUser] = useState("-------");
    const [password, setPassword] = useState("------");
    const { login } = React.useContext(ContextNavigation);
    const users = firebase.firestore().collection('user');
    function ingresar() {
        users.where('userUsuario', '==', user).get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    if (doc.data().passwordUsuario == password) {
                        console.log(doc.id);
                        login()
                    }
                })
            }).catch((err) => {
                console.log('Error getting documents', err);
            })
    }

    return (
        <SafeAreaView style={styles.container}>


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

                    onChangeText={returnOnChangeText => setPassword(returnOnChangeText)} />
            </View>

            <View style={styles.textInput}>
                <TouchableOpacity style={styles.openButton} onPress={() => { navigation.navigate('registro') }}><Text
                    style={{ textAlign: "center" }}>Registro</Text></TouchableOpacity>
            </View>
            <View style={styles.textInput}>
                <TouchableOpacity style={styles.openButton} onPress={ingresar}><Text
                    style={{ textAlign: "center" }}>Login</Text></TouchableOpacity>
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
