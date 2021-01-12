import React, {useEffect, useState} from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Platform,
    StatusBar,
    SafeAreaView,
    ScrollView,
    ActivityIndicator
} from "react-native";
import ItemList from '../components/Item'
import firebase from "../firebase/firebase";
import "firebase/firestore";


export default function ListPage({navigation}) {
    const framework = firebase.firestore().collection('framework');
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const synch = () => {
        let frameworks = [];
        framework.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                    let frameworkFromFirebase = {
                        id: doc.id,
                        name: doc.data().name,
                        photo: doc.data().photo
                    }
                    frameworks.push(frameworkFromFirebase)
                }
            )
            setData(frameworks);
        }).finally(() => setLoading(false));
    }

    useEffect(() => {
        let isMounted = true;
        synch();
        return () => {
            isMounted = false
        }
    })

    return (
        <View>
            {
                isLoading ? (<ActivityIndicator/>)
                    : (
                        <SafeAreaView style={styles.container}>

                            <FlatList
                                data={data}
                                keyExtractor={item => item.id}
                                renderItem={({item}) => (
                                    <ItemList element={item} navigation={navigation}/>
                                )}
                            />

                        </SafeAreaView>
                    )
            }
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    item: {
        backgroundColor: '#f9c2ff'
    }

})
