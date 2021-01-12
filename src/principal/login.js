import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Platform,
    StatusBar,
    Modal,
    Alert,
    TouchableHighlight
} from 'react-native';
import {Input} from 'react-native-elements';
import ContextNavigation from "../screens/context";

export default function Login({navigation}) {
    const [user, setUser] = useState("-------");
    const [password, setPassword] = useState("------");
    const {login} = React.useContext(ContextNavigation);
    const [modalVisible, setModalVisible] = useState(false);

    function ingresar() {
        let userJson={
            id: "",
            name: user,
            password: password
        }
        try {
            fetch('http://rafaelfalconi.biz:8080/angular/auth/sigin', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userJson)
            }).then((response) => response.json())
                .then((response) => {
                    if (response.error === undefined) {
                        login()
                    } else {
                        console.log(response);
                        setModalVisible(true);
                    }
                })

        } catch (error) {
            setModalVisible(true);
        }
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Datos incorrectos</Text>

                        <TouchableHighlight
                            style={{...styles.openButton, backgroundColor: "#2196F3"}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>ok</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

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
                <TouchableOpacity style={styles.openButton} onPress={() => {
                    navigation.navigate('registro')
                }}><Text
                    style={{textAlign: "center"}}>Registro</Text></TouchableOpacity>
            </View>
            <View style={styles.textInput}>
                <TouchableOpacity style={styles.openButton} onPress={ingresar}><Text
                    style={{textAlign: "center"}}>Login</Text></TouchableOpacity>
            </View>

        </View>
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
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }


});
