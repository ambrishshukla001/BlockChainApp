import { StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, Dimensions, View } from 'react-native'
import React from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import Header from '../../Components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen")

const TransactionDetails = (props) => {

    function renderMiddle() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.iconView}>
                    <View style={styles.iconInsideView}>
                        <Image source={ImagePath.GREM} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.12 }} />
                    </View>
                    <View style={styles.balnceView}>
                        <Text style={styles.balanceTxt}>Amount</Text>
                        <Text style={styles.amtTxt}>32</Text>
                    </View>
                </View>
                <View style={styles.amountView}>
                    <Image source={ImagePath.COMPLETED} resizeMode="contain" style={styles.completedImg} />
                    <Text style={styles.gremTxt}>COMPLETED</Text>
                </View>
                <View style={styles.border}></View>
                <View style={styles.currencyViewOne}>
                    <View style={styles.currencyText}>
                        <Text style={styles.currency}>Currency</Text>
                    </View>
                    <View style={styles.tokenText}>
                        <Text style={styles.token}>GREM</Text>
                    </View>
                </View>
                <View style={styles.amuntView}>
                    <View style={styles.currencyText}>
                        <Text style={styles.currency}>Amount</Text>
                    </View>
                    <View style={styles.tokenText}>
                        <Text style={styles.token}>32</Text>
                    </View>
                </View>
                <View style={styles.trashView}>
                    <View style={styles.currencyText}>
                        <Text style={styles.currency}>Trax,hash</Text>
                    </View>
                    <View style={styles.codeTxt}>
                        <Text style={styles.code}>0x24525sfds0xsse122 554ded45s4d5s4</Text>
                        <TouchableOpacity style={styles.copyImgView}>
                            <Image source={ImagePath.COPY} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.recieverView}>
                    <View style={styles.currencyText}>
                        <Text style={styles.currency}>Reciever Address</Text>
                    </View>
                    <View style={styles.codeTxt}>
                        <Text style={styles.code}>0x24525sfds0xsse122 554ded45s4d5s4</Text>
                        <TouchableOpacity style={styles.copyImgView}>
                            <Image source={ImagePath.COPY} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.currencyViewTwo}>
                    <View style={styles.currencyText}>
                        <Text style={styles.currency}>Date</Text>
                    </View>
                    <View style={styles.dateTxt}>
                        <Text style={styles.code}>2022-04-09 23:18:36</Text>
                    </View>
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
                    title={"Transaction Details"}
                    leftPress={() => props.navigation.goBack()}
                />
                <KeyboardAwareScrollView enableOnAndroid={true}>
                    {renderMiddle()}
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default TransactionDetails

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
        height: height * 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    currencyText: {
        // backgroundColor: "pink",
        height: height * 0.06,
        width: width * 0.4,
        justifyContent: "center"
    },
    tokenText: {
        // backgroundColor: "yellow",
        height: height * 0.06,
        width: width * 0.4,
        justifyContent: "center"
    },
    codeTxt: {
        // backgroundColor: "pink",
        height: height * 0.06,
        width: width * 0.4,
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    dateTxt: {
        // backgroundColor: "pink",
        height: height * 0.075,
        width: width * 0.4,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconView: {
        // backgroundColor: "pink",
        height: height * 0.1,
        marginTop: height * 0.06,
        width: width * 0.7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    currencyView: {
        // backgroundColor: "red",
        height: height * 0.06,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    currencyViewOne: {
        // backgroundColor: "green",
        height: height * 0.03,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: height * 0.03
    },
    amuntView: {
        // backgroundColor: "green",
        height: height * 0.03,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: height * 0.02
    },
    trashView: {
        // backgroundColor: "green",
        height: height * 0.09,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: height * 0.01
    },
    recieverView: {
        // backgroundColor: "pink",
        height: height * 0.09,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    currencyViewTwo: {
        // backgroundColor: "red",
        height: height * 0.08,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconInsideView: {
        // backgroundColor: "yellow",
        height: height * 0.1,
        width: width * 0.2,
        alignItems: "center",
    },
    copyImgView: {
        height: height * 0.03,
        width: width * 0.05,
        justifyContent: "flex-end",
        // backgroundColor: "green"
    },
    border: {
        height: height * 0.001,
        width: width * 0.85,
        backgroundColor: COLOR.RECTANGLE,
        alignSelf: "center",
        marginTop: height * 0.015
    },
    balnceView: {
        // backgroundColor: "green",
        height: height * 0.1,
        width: width * 0.35,
        alignItems: "center",
        justifyContent: "space-between"
    },
    balanceTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 50,
        color: COLOR.LABETEXT,
    },
    currency: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 53,
        color: COLOR.LABETEXT,
    },
    token: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 55,
        color: "black",
    },
    code: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 75,
        color: "black",
    },
    amtTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 25,
        color: "black",
    },
    amountView: {
        // backgroundColor: "blue",
        height: height * 0.06,
        width: width * 0.8,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    completedImg: {
        height: height * 0.05,
        width: width * 0.05
    },
    gremTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 54,
        color: COLOR.LIGHTGREEN,
        marginLeft: width * 0.02
    },
})