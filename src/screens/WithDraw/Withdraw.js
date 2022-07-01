import { StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import CustomButton from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from '../../Components/Header';
const { height, width } = Dimensions.get("screen")

const WithDraw = (props) => {

    function renderHeader() {
        return (
            <View style={styles.headerParent}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image source={ImagePath.BACKICON} style={styles.headerImage} />
                </TouchableOpacity>
                <Text style={styles.walletText}>Withdraw GREM</Text>
            </View>
        )
    }

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.parentMiddle}>
                    <View style={styles.iconView}>
                        <Text style={styles.balanceTxt}>Total Balance</Text>
                        <Text style={styles.amtTxt}>15,526</Text>
                    </View>
                    <View style={styles.amountView}>
                        <Text style={styles.gremTxt}>GREM</Text>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.lebelTxt}>Enter Wallet Address *</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.rectangle}>
                        <View style={styles.txtRectangle}>
                            <Text style={styles.copyTxt}>0x24525sfds0xsse122554ded45s4d5s4</Text>
                        </View>
                        <TouchableOpacity style={styles.copyRectangle}>
                            <Text style={styles.getText}>Get</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Enter Amount *</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        {/* <View style={styles.txtRectangle}> */}
                        <TextInput style={styles.input} placeholder="0.0000000" />
                        {/* </View> */}
                    </View>
                </View>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Transaction Password *</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.rectangle}>
                        <View style={styles.lockRectangle}>
                            <Image source={ImagePath.LOCK} resizeMode="contain" style={styles.copyImg} />
                        </View>
                        <TextInput style={styles.inputPass} />
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <CustomButton
                        title={"Send"}
                        ButtonPress={() => props.navigation.navigate("DashBoard")}
                    />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    leftPress={() => props.navigation.goBack()}
                    title={"Withdraw GREM"}
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

export default WithDraw

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    headerImage: {
        height: height * 0.10,
        width: width * 0.10,
        resizeMode: "contain"
    },
    headerParent: {
        height: height * 0.1,
        width: width * 0.8,
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.04
    },
    getText: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 54,
        color: COLOR.REMEBERTEXT
    },
    buttonView: {
        // backgroundColor: "lightpink",
        height: height * 0.2,
        width: width * 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    copyImg: {
        height: height * 0.06,
        width: width * 0.07,
        // backgroundColor: "red"
    },
    parentMiddle: {
        height: height * 0.15,
        // backgroundColor: "red",
        marginTop: height * 0.04,
        width: width * 1
    },
    textView: {
        height: height * 0.04,
        // backgroundColor: "red",
        marginTop: height * 0.06,
        width: width * 0.9,
        alignSelf: "center"
    },
    txtView: {
        height: height * 0.04,
        // backgroundColor: "red",
        marginTop: height * 0.03,
        width: width * 0.9,
        alignSelf: "center"
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    iconView: {
        // backgroundColor: "pink",
        height: height * 0.11,
        width: width * 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    balanceTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 48,
        color: COLOR.LABETEXT,
    },
    lebelTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 53,
        color: COLOR.REMEBERTEXT,
    },
    amtTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 26,
        color: "black",
    },
    amountView: {
        // backgroundColor: "blue",
        height: height * 0.065,
        width: width * 0.8,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    gremTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 45,
        color: COLOR.LABETEXT,
    },
    copyView: {
        // backgroundColor: "red",
        height: height * 0.08,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.01
    },
    rectangle: {
        height: height * 0.08,
        width: width * 0.9,
        // backgroundColor: "pink",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        flexDirection: "row",
        alignItems: "center"
    },
    inputRectangle: {
        height: height * 0.08,
        width: width * 0.9,
        // backgroundColor: "pink",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    txtRectangle: {
        height: height * 0.08,
        width: width * 0.7,
        // backgroundColor: "red",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        justifyContent: "center",
        alignItems: "center",
    },
    lockRectangle: {
        height: height * 0.1,
        width: width * 0.15,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    copyTxt: {
        fontFamily: "Lato-Regular",
        fontSize: height / 65,
        color: COLOR.COPYTXT,
    },
    input: {
        height: height * 0.1,
        width: width * 0.8,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    inputPass: {
        height: height * 0.1,
        width: width * 0.7,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    copyRectangle: {
        height: height * 0.1,
        width: width * 0.2,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "pink",
        borderWidth: height * 0.0001,
        borderColor: COLOR.RECTANGLE,
        alignItems: "center",
        justifyContent: "center"
    },
})