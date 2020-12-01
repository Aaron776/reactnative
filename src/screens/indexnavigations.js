import React, {useState, useMemo} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import ContextNavigation from "./context";
import Login from "../principal/login";
import TabNavigationScreens from "./Tabs";

const RootStack = createStackNavigator();

function RootStackScreen({user}) {
    return (
        <RootStack.Navigator headerMode="none">
            {
                user === null ? (
                    <RootStack.Screen name="Auth" component={Login} headerMode="none"/>
                ) : (
                    <RootStack.Screen name="App" component={TabNavigationScreens} headerMode="none"/>
                )


            }
        </RootStack.Navigator>
    )
}

function IndexAppScreen() {
    const [user, setUser] = useState(null);
    const contextNavigation = useMemo(
        () => {
            return {
                login: () => {
                    setUser("1");
                }
            }
        }
    )

    return (
        <ContextNavigation.Provider value={contextNavigation}>
            <NavigationContainer>
                <RootStackScreen user={user}/>
            </NavigationContainer>
        </ContextNavigation.Provider>
    )
}

export default IndexAppScreen;
