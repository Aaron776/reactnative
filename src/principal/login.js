import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {Input} from 'react-native-elements';

const {height, width} = Dimensions.get('window');
export default function Login() {
    const [user, setUser] = useState("-------");
    const [password, setPassword] = useState("------");

    return (
        <View style={styles.container}>

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
                <TouchableOpacity style={styles.openButton}><Text style={{textAlign:"center"}}>Login</Text></TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
