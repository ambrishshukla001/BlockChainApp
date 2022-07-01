import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Text } from '@rneui/themed';
import DashBoard from '../screens/Dashboard/Dashboard';
import Wallet from '../screens/Wallet/Wallet';
import BuySell from '../screens/BuySell/BuySell';
import { ImagePath } from "../utils/ImagePath"
import Redemption from '../screens/Redemption/Redemption';
import { COLOR } from '../utils/Color';
import { BackgroundImage } from '@rneui/base';
const { height, width } = Dimensions.get("screen")

const Tab = createBottomTabNavigator();


export default function App() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                tabBarShowLabel: false
            }}
            initialRouteName="Portfolio"
            // activeColor="#244273"
            // inactiveColor="#3e2465"
            barStyle={{
                paddingBottom: 48, shadowColor: '#000000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 3,
            }}
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    position: "absolute",
                    // backgroundColor: '#0D1541',
                    height: height * 0.10,
                    borderTopWidth: 0,
                    shadowColor: '#000000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.9,
                    shadowRadius: 3,
                    elevation: 20,
                },
                tabBarLabel: {
                    fontSize: height / 65,
                    color: COLOR.BUTTONCOLOR
                },
            })}>
            <Tab.Screen
                name="DashBoard"
                component={DashBoard}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabel: 'DashBoard',
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ?
                            <View style={{ height: height * 0.06, justifyContent: "space-between", alignItems: "center", width: width * 0.2 }}>

                                <Image
                                    source={ImagePath.DASHBOARD}
                                    style={{
                                        height: height * 0.04,
                                        width: width * 0.05,
                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={{
                                    fontFamily: "Lato-Regular",
                                    fontSize: height / 75,
                                    color: COLOR.BUTTONCOLOR
                                }}>DashBoard</Text>
                            </View>
                            :
                            <View style={{ height: height * 0.06, justifyContent: "space-between", alignItems: "center", width: width * 0.2 }}>
                                <Image
                                    source={ImagePath.DASHBOARDOFF}
                                    style={{
                                        height: height * 0.04,
                                        width: width * 0.05,
                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={{
                                    fontFamily: "Lato-Regular",
                                    fontSize: height / 75,
                                    color: "grey"
                                }}>DashBoard</Text>
                            </View>
                        // <Image
                        //     source={
                        //         focused
                        //             ? ImagePath.DASHBOARD
                        //             : ImagePath.DASHBOARDOFF
                        //     }
                        //     style={{
                        //         height: size,
                        //         width: size,
                        //     }}
                        //     resizeMode="contain"
                        // />
                    ),
                }}
            />
            <Tab.Screen
                name="BuySell"
                component={BuySell}
                options={{
                    headerShown: false,
                    tabBarLabel: "Buy & Sell",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ?
                            <View style={{ height: height * 0.06, justifyContent: "space-between", alignItems: "center", width: width * 0.2 }}>

                                <Image
                                    source={ImagePath.BUYSELL}
                                    style={{
                                        height: height * 0.04,
                                        width: width * 0.07,
                                        resizeMode: "contain",
                                        // backgroundColor: "red"
                                    }}
                                />
                                <Text style={{
                                    fontFamily: "Lato-Regular",
                                    fontSize: height / 75,
                                    color: COLOR.BUTTONCOLOR
                                }}>Buy & Sell</Text>
                            </View>
                            :
                            <View style={{ height: height * 0.06, justifyContent: "space-between", alignItems: "center", width: width * 0.2 }}>
                                <Image
                                    source={ImagePath.BUYSELLOFF}
                                    style={{
                                        height: height * 0.04,
                                        width: width * 0.07,
                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={{
                                    fontFamily: "Lato-Regular",
                                    fontSize: height / 75,
                                    color: "grey"
                                }}>Buy & Sell</Text>
                            </View>

                    ),
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={Wallet}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Wallet',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ?
                            <View style={{ height: height * 0.06, justifyContent: "space-between", alignItems: "center", width: width * 0.2 }}>

                                <Image
                                    source={ImagePath.WALLET}
                                    style={{
                                        height: height * 0.04,
                                        width: width * 0.07,
                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={{
                                    fontFamily: "Lato-Regular",
                                    fontSize: height / 75,
                                    color: COLOR.BUTTONCOLOR
                                }}>Wallet</Text>
                            </View>
                            :
                            <View style={{ height: height * 0.06, justifyContent: "space-between", alignItems: "center", width: width * 0.2 }}>
                                <Image
                                    source={ImagePath.WALLETOFF}
                                    style={{
                                        height: height * 0.04,
                                        width: width * 0.07,
                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={{
                                    fontFamily: "Lato-Regular",
                                    fontSize: height / 75,
                                    color: "grey"
                                }}>Wallet</Text>
                            </View>

                    ),
                }}
            />
            <Tab.Screen
                name="Redemption"
                component={Redemption}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Redemptions',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ?
                            <View style={{ height: height * 0.06, justifyContent: "space-between", alignItems: "center", width: width * 0.2 }}>

                                <Image
                                    source={ImagePath.REDEMPTION}
                                    style={{
                                        height: height * 0.04,
                                        width: width * 0.05,
                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={{
                                    fontFamily: "Lato-Regular",
                                    fontSize: height / 75,
                                    color: COLOR.BUTTONCOLOR
                                }}>Redemptions</Text>
                            </View>
                            :
                            <View style={{ height: height * 0.06, justifyContent: "space-between", alignItems: "center", width: width * 0.2 }}>
                                <Image
                                    source={ImagePath.REDEMPTIONOFF}
                                    style={{
                                        height: height * 0.04,
                                        width: width * 0.05,

                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={{
                                    fontFamily: "Lato-Regular",
                                    fontSize: height / 75,
                                    color: "grey"
                                }}>Redemptions</Text>
                            </View>

                    ),
                }}
            />

        </Tab.Navigator>
    );
}

