import { StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen")

const AddBank = (props) => {

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.personalView}>
                    <Text style={styles.personalTxt}>Add Bank Details</Text>
                </View>
                <View style={{ alignItems: "center", marginTop: height * 0.02, height: height * 0.8, width: width * 1 }}>
                    <CustomInput
                        placeholder={"Account Holder Name"}
                    />
                    <CustomInput
                        placeholder={"IBAN/IFSC/SWIFT Code"}
                    />
                    <CustomInput
                        placeholder={"Bank Name"}
                    />
                    <CustomInput
                        placeholder={"Bank Branch"}
                    />
                    <CustomInput
                        placeholder={"Account Number"}
                    />
                    <TouchableOpacity style={styles.issueCounty}>
                        <Text style={styles.titleTxt}>Account type</Text>
                        <Image source={ImagePath.SUPPORTDWON} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.03 }} />
                    </TouchableOpacity>
                    <View style={styles.remarkView}>
                        <TextInput multiline={true} placeholder='Remark' style={{
                            fontFamily: "Poppins-Regular",
                            fontSize: height / 65,
                            textAlign: "left", textAlignVertical: "top", height: height * 0.16, width: width * 0.8
                        }} />
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <CustomButton
                        title={"Submit"}
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
                    leftPress={() => props.navigation.navigate("DashBoard")}
                    title={"Bank Detail"}
                />
                <ScrollView>
                    <KeyboardAwareScrollView enableOnAndroid={true}>
                        {renderQr()}
                    </KeyboardAwareScrollView>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default AddBank

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
        height: height * 1.2,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    buttonView: {
        // backgroundColor: "pink",
        height: height * 0.15,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.08
    },
    issueCounty: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        // backgroundColor: "red",
        marginTop: height * 0.02,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.08,
        width: width * 0.9,
        justifyContent: "space-between",
        alignSelf: "center"
    },
    titleTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 65,
        color: COLOR.TITLETXT
    },
    remarkView: {
        borderWidth: 1,
        borderColor: COLOR.RECTANGLE,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        // backgroundColor: "pink",
        marginTop: height * 0.02,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        justifyContent: "center",
        flexDirection: "row",
        height: height * 0.2,
        width: width * 0.9,
    },
    personalView: {
        height: height * 0.05,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        marginTop: height * 0.04
    },
    personalTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 40,
        color: COLOR.REMEBERTEXT
    },
})