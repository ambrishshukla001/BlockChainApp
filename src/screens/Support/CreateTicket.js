import { StyleSheet, FlatList, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen")

const CreateTicket = (props) => {

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.inputView}>
                    <Text style={styles.lebelTxt}>Issue below which suits best to your query</Text>
                </View>
                <TouchableOpacity style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        <Text style={styles.titleTxt}>Select Issue</Text>
                        <Image source={ImagePath.SUPPORTDWON} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.03 }} />
                    </View>
                </TouchableOpacity>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Your email address</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        <TextInput style={styles.input} placeholder="de-pramod@123gmal.com" />
                    </View>
                </View>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Subject</Text>
                </View>
                <TouchableOpacity style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        <TextInput style={styles.input} placeholder="Subject" />
                    </View>
                </TouchableOpacity>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Descriptions</Text>
                </View>
                <TouchableOpacity style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        <TextInput style={styles.input} placeholder="C-27" />
                    </View>
                </TouchableOpacity>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Upload Image</Text>
                </View>
                <TouchableOpacity style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        <Text style={styles.titleTxt}>Browse</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.buttonView}>
                    <CustomButton
                        title={"Submit"}
                        ButtonPress={() => props.navigation.navigate("CreateTicket")}
                    />
                </View>
            </View >
        )
    }


    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    title={"Support"}
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    leftPress={() => props.navigation.goBack()}
                />
                <KeyboardAwareScrollView enableOnAndroid={true}>
                    <ScrollView>
                        {renderQr()}
                    </ScrollView>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default CreateTicket

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 0.9,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    inputView: {
        height: height * 0.03,
        width: width * 1,
        // backgroundColor: "yellow",
        marginTop: height * 0.06,
        alignItems: "center",
        justifyContent: "space-between"
    },
    copyView: {
        // backgroundColor: "red",
        height: height * 0.06,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.005
    },
    inputRectangle: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "pink",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    buttonView: {
        height: height * 0.2,
        width: width * 1,
        // backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: height * 0.1,
        width: width * 0.8,
        // backgroundColor: "red",
        alignSelf: "center",
        color: "black",
        fontSize: height / 65
    },
    txtView: {
        height: height * 0.03,
        // backgroundColor: "red",
        marginTop: height * 0.02,
        width: width * 0.9,
        alignSelf: "center"
    },
    lebelTxt: {
        fontFamily: "Montserrat-Medium",
        fontSize: height / 60,
        color: "black"
    },
    titleTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 65,
        color: COLOR.TITLETXT
    },
})