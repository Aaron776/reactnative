import * as React from "react";
import {StyleSheet, View, SafeAreaView, Platform, StatusBar, Image, Dimensions} from "react-native";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ItemList from "./Item";

const {width: screenWidth} = Dimensions.get('window')
const array = [
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
]
export default class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: array
        }
    }

    _renderItem({item, index}) {
        return (
            <ItemList element={item}/>
        )
    }

    get pagination() {
        const {entries, activeSlide} = this.state;

        return (
            <Pagination
                dotsLength={array.length}
                activeDotIndex={activeSlide}
                dotStyle={{
                    width: 10,
                    height: 9,
                    borderRadius: 5,
                    marginHorizontal: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, paddingTop: 50, maxHeight: 230}}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', textAlign: "center",}}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={screenWidth}
                        itemWidth={screenWidth}
                        renderItem={this._renderItem}
                        onSnapToItem={(index) => this.setState({activeSlide: index})}/>
                    {this.pagination}
                </View>

            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rebeccapurple',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 300
    }
})
