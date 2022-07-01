import { StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen")

const VendorsDetails = (props) => {

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.qrView}>
                    <Image source={ImagePath.PEPSI} resizeMode="contain" style={styles.qrImg} />
                </View>
                <View style={styles.border}></View>
                <View style={styles.detailView}>
                    <View style={styles.nameView}>
                        <View style={styles.name}>
                            <Text style={styles.nameTxt}>Name :</Text>
                        </View>
                        <View style={styles.product}>
                            <Text style={styles.productTxt}>Pepsi</Text>
                        </View>
                    </View>
                    <View style={styles.addressView}>
                        <View style={styles.address}>
                            <Text style={styles.nameTxt}>Address :</Text>
                        </View>
                        <View style={styles.product}>
                            <Text style={styles.productTxt}>New Delhi</Text>
                        </View>
                    </View>
                    <View style={styles.nameView}>
                        <View style={styles.name}>
                            <Text style={styles.nameTxt}>Phone Number :</Text>
                        </View>
                        <View style={styles.product}>
                            <Text style={styles.productTxt}>9584937352</Text>
                        </View>
                    </View>
                    <View style={styles.nameView}>
                        <View style={styles.name}>
                            <Text style={styles.nameTxt}>Email :</Text>
                        </View>
                        <View style={styles.product}>
                            <Text style={styles.productTxt}>de-umair@mobiloitte.com</Text>
                        </View>
                    </View>
                    <View style={styles.lableView}>
                        <Text style={styles.labelTxt}>Vendor GRET Address:</Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput placeholder='Amount' style={{ height: height * 0.1, width: width * 0.75 }} />
                    </View>
                    <View style={styles.lableView}>
                        <Text style={styles.labelTxt}>Enter GRET Amount to Redeem:</Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput placeholder='Amount' style={{ height: height * 0.1, width: width * 0.75 }} />
                    </View>
                    <View style={styles.balanceView}>
                        <Text style={styles.balaceTxt}>Available Balance :</Text>
                        <Text style={styles.gretTxt}>123 GRET</Text>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <CustomButton
                        title={"Redeem"}
                        ButtonPress={() => props.navigation.navigate("DashBoard")}
                    />
                </View>
            </View >
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    title={"Vendor Detail"}
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

export default VendorsDetails

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    detailView: {
        height: height * 0.68,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center"
    },
    nameView: {
        height: height * 0.03,
        width: width * 0.9,
        marginTop: height * 0.03,
        // backgroundColor: "red",
        flexDirection: "row"
    },
    addressView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "red",
        marginTop: height * 0.03,
        flexDirection: "row"
    },
    lableView: {
        width: width * 0.9,
        height: height * 0.09,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    balanceView: {
        width: width * 0.9,
        height: height * 0.08,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        // backgroundColor: "red",
        flexDirection: "row"
    },
    buttonView: {
        // backgroundColor: "pink",
        height: height * 0.15,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.02
    },
    labelTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 53,
        color: COLOR.REMEBERTEXT,
        alignSelf: "flex-start"
    },
    balaceTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 53,
        color: COLOR.REMEBERTEXT,
        // alignSelf: "flex-start"
    },
    gretTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 53,
        color: COLOR.BUTTONCOLOR,
        // alignSelf: "flex-start"
    },
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
        marginTop: height * 0.01,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.08,
        width: width * 0.9,
        justifyContent: "space-around"
    },
    name: {
        height: height * 0.03,
        width: width * 0.4,
        // backgroundColor: "pink",
        justifyContent: "center"
    },
    address: {
        height: height * 0.03,
        width: width * 0.4,
        // backgroundColor: "pink",
        justifyContent: "center"
    },
    product: {
        height: height * 0.03,
        width: width * 0.5,
        // backgroundColor: "blue",
        justifyContent: "center"
    },
    nameTxt: {
        fontFamily: "Poppins-Medium",
        fontSize: height / 56,
        color: "black"
    },
    productTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 56,
        color: COLOR.lightGrey
    },
    qrImg: {
        height: height * 0.15,
        width: width * 0.5
    },
    qrView: {
        height: height * 0.19,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.01,
        // backgroundColor: "yellow"
    },
    border: {
        height: height * 0.001,
        width: width * 0.9,
        backgroundColor: COLOR.RECTANGLE,
        alignSelf: "center",
        marginTop: height * 0.027
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1.2,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
})