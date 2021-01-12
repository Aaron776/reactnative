import React, {useEffect, useState} from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {useRoute} from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('window')
const {height: screenHeight} = Dimensions.get('window')
import firebase from "../firebase/firebase";
import "firebase/firestore";

export default function Item() {
    const framework = firebase.firestore().collection('framework');
    const [item, setItem] = useState({});
    const [isLoading, setLoading] = useState(true);
    let route = useRoute();
    let id = route.params.id;
    const synch = () => {
        framework.doc(id).get().then((snapshot) => {

            let frameworkFromFirebase = {
                id: snapshot.id,
                name: snapshot.data().name,
                photo: snapshot.data().photo
            }
            setItem(frameworkFromFirebase);
        }).finally(() => setLoading(false));
    }
    useEffect(() => {
        let isMounted = true;
        synch();

        return () => {
            isMounted = false
        };
    }, [])
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
        textAlign: 'center'
    },
    image: {

        width: screenWidth - 150,
        height: screenHeight - 150
    },
    containerInfo: {
        flex: 5,
        margin: 10
    }

})
