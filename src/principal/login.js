import React, {useState} from 'react';
import {StyleSheet, View,TouchableOpacity,Text } from 'react-native';
import {Input} from 'react-native-elements';

export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <View>
                <Input
                    placeholder='User'
                    onChangeText={returnOnChangeText => setUser(returnOnChangeText)}
                />
            </View>
            <View>
                <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={returnOnChangeText => setPassword(returnOnChangeText)}/>
            </View>

            <View>
                <TouchableOpacity style={styles.openButton}><Text>Login</Text></TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        margin:10
    },
});