import React from "react";
import {
    Image,
    ImageBackGround
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import { Settings, ChatRoom, Articles } from "../screens";
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: COLORS.black
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.dashboard_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Articles":
                            return (
                                <Image
                                    source={icons.search_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Chats":
                            return (
                                <Image
                                    source={icons.notification_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Setting":
                            return (
                                <Image
                                    source={icons.menu_icon}
                                    resizeMode="contain"  
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />                              
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home" 
                tabBarLabel= 'Home'              
                component={Home}
            />
            <Tab.Screen
                name="Articles"
                component={Articles}
            />
            <Tab.Screen
                name="Chats"
                component={ChatRoom}                  
                tabBarLabel= "Chats"
            />
            <Tab.Screen
                name="Setting"
                component={Settings}                  
                tabBarLabel= "Setting"
            />
        </Tab.Navigator>
    )
}

export default Tabs;