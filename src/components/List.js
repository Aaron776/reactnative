import React from 'react';
import {StyleSheet, View, FlatList} from "react-native";
import ItemList from './Item'
const information = [
    {
        id: "1",
        name: "reacjs",
        photo: "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
    },
    {
        id: "2",
        name: "react native",
        photo: "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
    },
    {
        id: "3",
        name: "angular",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
    },
    {
        id: "4",
        name: "angularjs",
        photo: 'https://cdn.slidesharecdn.com/ss_thumbnails/angularjs-161213223326-thumbnail-4.jpg'
    }
];


export default function List() {

    return (
        <View style={styles.container}>
            <FlatList
                data={information}
                renderItem={({item}) => <ItemList element={item}/>}
            />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20

    }
})