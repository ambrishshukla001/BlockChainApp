import { StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import CustomButton from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from '../../Components/Header';
const { height, width } = Dimensions.get("screen")


const EditProfile = (props) => {

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.profileView}>
                    <Image source={ImagePath.PROFILE} resizeMode="contain" style={styles.profileImg} />
                    <TouchableOpacity style={styles.editCircle}>
                        <Image source={ImagePath.EDIT} resizeMode="contain" style={styles.editImg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Full Name</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        <TextInput style={{
                            height: height * 0.08,
                            width: width * 0.85,
                            // backgroundColor: "red",
                            alignSelf: "center",
                            fontFamily: "Poppins-Regular",
                            fontSize: height / 65,
                            color: "#141414",
                        }} placeholder="Mohd Umair Siddiqui" />
                    </View>
                </View>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Mobile Number</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        <TextInput style={{
                            height: height * 0.08,
                            width: width * 0.85,
                            // backgroundColor: "red",
                            alignSelf: "center",
                            fontFamily: "Poppins-Regular",
                            fontSize: height / 65,
                            color: "#141414",
                        }} placeholder="9584937352" />
                    </View>
                </View>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Address</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        <TextInput style={{
                            height: height * 0.08,
                            width: width * 0.85,
                            // backgroundColor: "red",
                            alignSelf: "center",
                            fontFamily: "Poppins-Regular",
                            fontSize: height / 65,
                            color: "#141414",
                        }} placeholder="C-27, Shaheenbagh New Delhi, 110025" />
                    </View>
                </View>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Permanent Address</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        <TextInput style={{
                            height: height * 0.08,
                            width: width * 0.85,
                            // backgroundColor: "red",
                            alignSelf: "center",
                            fontFamily: "Poppins-Regular",
                            fontSize: height / 65,
                            color: "#141414",
                        }} placeholder="C-27, Shaheenbagh New Delhi, 110025" />
                    </View>
                </View>
                <View style={styles.txtView}>
                    <Text style={styles.lebelTxt}>Postal Code</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.inputRectangle}>
                        <TextInput style={{
                            height: height * 0.08,
                            width: width * 0.85,
                            // backgroundColor: "red",
                            alignSelf: "center",
                            fontFamily: "Poppins-Regular",
                            fontSize: height / 65,
                            color: "#141414",
                        }} placeholder="C-27, Shaheenbagh New Delhi, 110025" />
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <CustomButton
                        title={"Update"}
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

export default EditProfile

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
    copyView: {
        // backgroundColor: "red",
        height: height * 0.07,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.005
    },
    buttonView: {
        // backgroundColor: "lightpink",
        height: height * 0.2,
        width: width * 1,
        marginTop: height * 0.06,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    inputRectangle: {
        height: height * 0.07,
        width: width * 0.9,
        // backgroundColor: "pink",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: height * 0.08,
        width: width * 0.85,
        // backgroundColor: "red",
        alignSelf: "center",
        fontFamily: "Poppins-Regular",
        fontSize: height / 65,
        color: "black",
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    txtView: {
        height: height * 0.03,
        // backgroundColor: "red",
        marginTop: height * 0.02,
        width: width * 0.9,
        alignSelf: "center"
    },
    lebelTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 56,
        color: "black",
    },
    profileView: {
        height: height * 0.27,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "pink"
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
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1.2,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
})