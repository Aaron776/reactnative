import React, {useEffect, useState} from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {useRoute} from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('window')
const {height: screenHeight} = Dimensions.get('window')

export default function Item() {
    const [item, setItem] = useState({});
    const [isLoading, setLoading] = useState(true);
    let route = useRoute();
    let id = route.params.id;
    let uri = 'http://rafaelfalconi.biz:8080/angular/news/' + id;
    const synch = () => {
        fetch(uri, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYmYiOjE2MTA0Njg1OTAsImlzcyI6InJhZmFlbCIsIm5hbWUiOiJzdHJpbmciLCJleHAiOjE2MTA0NzIxOTAsImlhdCI6MTYxMDQ2ODU5MH0.1_W_h4RoXSjMr7jHtUF70togs6_vKUZ9coruiVYijx8'
                }
            }
        ).then((response) => response.json())
            .then((response) => setItem(response))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
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
