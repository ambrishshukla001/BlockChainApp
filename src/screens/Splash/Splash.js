import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image } from '@rneui/themed';
const { height, width } = Dimensions.get("screen")

const Splash = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("Login")
        }, 3000)
    }, []);

    return (
        <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
            <Image source={ImagePath.APP_LOGO} style={styles.appLogo} resizeMode="contain" />
            <Image source={ImagePath.APP_NAME} style={styles.appName} resizeMode="contain" />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    appLogo: {
        height: height * 0.25,
        width: width * 0.6
    },
    appName: {
        height: height * 0.07,
        width: width * 0.6
    }
})