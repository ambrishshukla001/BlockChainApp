import { StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen")

const ConfirmTrans = (props) => {

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.qrView}>
                    <Image source={ImagePath.QRCODE} resizeMode="contain" style={styles.qrImg} />
                </View>
                <View style={styles.transView}>
                    <Text style={styles.scanTxt}>Scan QR Code</Text>
                </View>
                <View style={styles.transferView}>
                    <Text style={styles.transferTxt}>Transfer 0.00001 BTC To Below Address</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.rectangle}>
                        <View style={styles.txtRectangle}>
                            <Text style={styles.copyTxt}>0x24525sfds0xsse122554ded45s4d5s4</Text>
                        </View>
                        <TouchableOpacity style={styles.copyRectangle}>
                            <Image source={ImagePath.COPY} resizeMode="contain" style={styles.copyImg} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.warningView}>
                    <Text style={styles.warningTxt}>Once you transfer, please enter txn id and{'\n'}click on confirm button</Text>
                </View>
                <View style={styles.refView}>
                    <Text style={styles.refTxt}>Please Enter Refrence / Transaction ID</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput style={{ height: height * 0.08, width: width * 0.75 }} />
                </View>
                <View style={styles.buttonView}>
                    <CustomButton
                        title={"Confirm"}
                        ButtonPress={() => props.navigation.navigate("BuySell")}
                    />
                </View>
            </View >
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    title={"Confirm Transaction"}
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

export default ConfirmTrans

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    qrView: {
        height: height * 0.28,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.04,
        // backgroundColor: "yellow"
    },
    buttonView: {
        // backgroundColor: "pink",
        height: height * 0.15,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.13
    },
    transView: {
        height: height * 0.05,
        width: width * 1,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    transferView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "red",
        justifyContent: "center",
        // alignItems: "center",
        alignSelf: "center",
        marginTop: height * 0.025
    },
    inputView: {
        borderWidth: 1,
        // borderRadius: 5,
        borderColor: COLOR.RECTANGLE,
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
        justifyContent: "space-around",
        alignSelf: "center"
    },
    warningView: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "red",
        justifyContent: "center",
        // alignItems: "center",
        alignSelf: "center",
        marginTop: height * 0.04
    },
    refView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "red",
        justifyContent: "center",
        // alignItems: "center",
        alignSelf: "center",
        // marginTop: height * 0.015
    },
    qrImg: {
        height: height * 0.25,
        width: width * 0.5
    },
    copyRectangle: {
        height: height * 0.08,
        width: width * 0.15,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "pink",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        alignItems: "center",
        justifyContent: "center"
    },
    copyImg: {
        height: height * 0.06,
        width: width * 0.06
    },
    copyView: {
        // backgroundColor: "red",
        height: height * 0.08,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03
    },
    rectangle: {
        height: height * 0.08,
        width: width * 0.9,
        backgroundColor: "white",
        borderWidth: height * 0.002,
        borderColor: COLOR.RECTANGLE,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    txtRectangle: {
        height: height * 0.08,
        width: width * 0.75,
        // backgroundColor: "pink",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        justifyContent: "center",
        alignItems: "center",
    },
    copyTxt: {
        fontFamily: "Lato-Regular",
        fontSize: height / 80,
        color: COLOR.COPYTXT,
    },
    scanTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 46,
        color: COLOR.SCANTXT
    },
    transferTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 60,
        color: "black"
    },
    warningTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 59,
        color: "black"
    },
    refTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 65,
        color: "black"
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1.2,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
})