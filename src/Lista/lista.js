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
    let uri = 'http://rafaelfalconi.biz:8080/angular/news'
    const synch = () => {
        fetch(uri, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYmYiOjE2MTA0Njg1OTAsImlzcyI6InJhZmFlbCIsIm5hbWUiOiJzdHJpbmciLCJleHAiOjE2MTA0NzIxOTAsImlhdCI6MTYxMDQ2ODU5MH0.1_W_h4RoXSjMr7jHtUF70togs6_vKUZ9coruiVYijx8'
                }
            }
        ).then((response)=>response.json())
            .then((response)=>setData(response))
            .catch((error)=>console.log(error))
            .finally(()=>setLoading(false));
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
