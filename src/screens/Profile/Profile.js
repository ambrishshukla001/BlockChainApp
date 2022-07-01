import { StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen")

const Profile = (props) => {

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.profileView}>
                    <Image source={ImagePath.PROFILE} resizeMode="contain" style={styles.profileImg} />
                    <TouchableOpacity style={styles.editCircle}>
                        <Image source={ImagePath.EDIT} resizeMode="contain" style={styles.editImg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.nameView}>
                    <Text style={styles.nameTxt}>Mohd Waseem</Text>
                    <Text style={styles.mailTxt}>Muhammad2837@gmail.com</Text>
                </View>
                <View style={styles.border}></View>
                <View style={styles.detailView}>
                    <Text style={styles.upperTxt}>Full Name</Text>
                    <Text style={styles.lowerTxt}>Mohd Umair Siddiqui</Text>
                </View>
                <View style={styles.numberView}>
                    <Text style={styles.upperTxt}>Mobile Number</Text>
                    <Text style={styles.lowerTxt}>9936595085</Text>
                </View>
                <View style={styles.numberView}>
                    <Text style={styles.upperTxt}>Address</Text>
                    <Text style={styles.addressTxt}>C-27, Shaheenbagh New Delhi, 110025</Text>
                </View>
                <View style={styles.numberView}>
                    <Text style={styles.upperTxt}>Parmanant Address</Text>
                    <Text style={styles.addressTxt}>C-27, Shaheenbagh New Delhi, 110025</Text>
                </View>
                <View style={styles.buttonView}>
                    <CustomButton
                        title={"Edit Profile"}
                        ButtonPress={() => props.navigation.navigate("EditProfile")}
                    />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    title={"My Profile"}
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

export default Profile

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    nameTxt: {
        fontFamily: "Poppins-Bold",
        fontSize: height / 48,
        color: COLOR.BUTTONCOLOR
    },
    upperTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 55,
        color: "black"
    },
    lowerTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 55,
        color: COLOR.COPYTXT
    },
    addressTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 56,
        color: COLOR.COPYTXT
    },
    buttonView: {
        // backgroundColor: "lightpink",
        height: height * 0.2,
        width: width * 1,
        marginTop: height * 0.04,
        justifyContent: "center",
        alignItems: "center"
    },
    border: {
        height: height * 0.001,
        width: width * 0.9,
        backgroundColor: COLOR.RECTANGLE,
        alignSelf: "center",
        marginTop: height * 0.04
    },
    detailView: {
        height: height * 0.06,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "lightblue",
        marginTop: height * 0.035,
        justifyContent: "space-between",
    },
    numberView: {
        height: height * 0.07,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "lightblue",
        marginTop: height * 0.025,
        justifyContent: "space-between",
    },
    profileView: {
        height: height * 0.27,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "pink"
    },
    editCircle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "white",
        position: "absolute",
        bottom: height * 0.04,
        left: width * 0.6,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.11,
        shadowRadius: 5,
        elevation: 5,
    },
    profileImg: {
        height: height * 0.25,
        width: width * 0.4,
        // backgroundColor: "lightblue"
    },
    editImg: {
        height: height * 0.02,
        width: width * 0.05,
        alignSelf: "center"
        // backgroundColor: "red"
    },
    nameView: {
        height: height * 0.065,
        width: width * 1,
        // backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "space-between"
    },
    mailTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 65,
        color: COLOR.MAILTXT
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1.1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
})