import { StyleSheet, View, Dimensions, TouchableOpacity, KeyboardAvoidingView, FlatList, TextInput, Modal, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Image, Text, Input } from '@rneui/themed';
import { ImagePath } from "../utils/ImagePath"
import { COLOR } from "../utils/Color"
const { height, width } = Dimensions.get("screen")

const CustomInput = (props) => {
    const {
        keyboardType,
        maxLength,
        // styles,
        placeholderColor,
        value,
        multiline,
        secureTextEntry,
        onChangeText,
        placeholderTextColor,
        RightIcon,
        separator,
        placeholder,
        containerStyle,
        editable,
        rightImg,
        LeftIcon,
        leftImg,
        leftIconPress,
        rightPress
    } = props;

    return (
        <View style={styles.inputView}>
            <TextInput keyboardType={keyboardType} placeholder={placeholder} secureTextEntry={secureTextEntry} style={{
                fontFamily: "Poppins-Regular",
                fontSize: height / 65,
                color: "#141414", height: height * 0.08, width: RightIcon ? width * 0.75 : width * 0.8
            }} />
            {
                RightIcon ?
                    <TouchableOpacity onPress={rightPress}>
                        <Image source={rightImg} style={{ height: height * 0.05, width: width * 0.05, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    :
                    null
            }
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        marginTop: height * 0.02,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.08,
        width: width * 0.9,
        justifyContent: "space-around"
    },
})