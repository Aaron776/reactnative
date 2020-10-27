import React from 'react';
import {View} from "react-native";
import { ListItem, Avatar } from 'react-native-elements'
import ItemList from '../components/Item'
const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
]

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

export default function ListPage() {
    return (
        <View>
            {
                list.map((user, i) => (
                    <ListItem key={i} bottomDivider>
                        <Avatar source={{uri: user.avatar_url}} />
                        <ListItem.Content>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <ListItem.Subtitle>{user.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
            }

            {
                information.map((item) => (
                    <ItemList element={item}/>
                ))
            }
        </View>
    )
}