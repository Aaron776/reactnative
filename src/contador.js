import React, {useState} from 'react';
import {StyleSheet, Text, View,Button} from "react-native";

export default function Contador(props) {

    const [number, setNumber] = useState(props.cont);
    function substract(){
        setNumber(number-1);
    }
    function add(){
        setNumber(number+1);
    }
    return (
        <View style={styles.principal}>
            <View style={styles.button}>
                <Button
                    title="-"
                    onPress={()=>substract()}
                />
            </View>
            <View style={styles.container}>
                <Text>
                    {number}
                </Text>
            </View>
            <View style={styles.button}>
                <Button
                    title="+"
                    onPress={()=>add()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    principal:{
        flex:1,
        flexDirection: 'row'
    },
    container: {
        flex: 3,
        backgroundColor: '#efeeaa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        flex: 1,
        backgroundColor: '#3355A0',
        alignItems: 'center',
        justifyContent: 'center'
    }

})