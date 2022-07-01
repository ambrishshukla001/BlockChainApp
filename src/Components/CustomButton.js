import { StyleSheet, TouchableOpacity, Dimensions, Text, View } from 'react-native'
import React from 'react'
import { ImagePath } from "../utils/ImagePath"
import { COLOR } from "../utils/Color"
const { height, width } = Dimensions.get("screen")

const CustomButton = (props) => {
    const { ButtonPress, Disabled, title } = props

    return (
        <TouchableOpacity
            onPress={ButtonPress}
            disabled={Disabled}
            style={[styles.btnStyle, props.btnStyling]}>
            <Text style={styles.titleTxt}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btnStyle: {
        borderRadius: 10,
        backgroundColor: COLOR.BUTTONCOLOR,
        height: height * 0.08,
        width: width * 0.9,
        justifyContent: "center",
        alignItems: "center"
    },
    titleTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 45,
        color: "white"
    }
})