import { StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import CustomInput from '../../Components/CustomInput';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen")

const ChangePassword = (props) => {
    const [visiblePassword, setVisiblePassword] = useState(false);

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.mainView}>
                    <View style={styles.txtView}>
                        <Text style={styles.currntTxt}>Current Password</Text>
                    </View>
                    <CustomInput
                        placeholder={"Password"}
                        RightIcon={true}
                        rightImg={ImagePath.PASSEYE}
                        keyboardType={"numeric"}
                        secureTextEntry={false}
                    />
                    <View style={styles.newPassView}>
                        <Text style={styles.newPassTxt}>New Password</Text>
                    </View>
                    <CustomInput
                        placeholder={"New Password"}
                        RightIcon={true}
                        rightImg={ImagePath.PASSEYE}
                        keyboardType={"numeric"}
                        secureTextEntry={false}
                    />
                </View>
                <View style={styles.buttonView}>
                    <CustomButton
                        title={"Change Password"}
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
                    title={"Change password"}
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    leftPress={() => props.navigation.navigate("DashBoard")}
                />
                <KeyboardAwareScrollView enableOnAndroid={true}>
                    {renderQr()}
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    mainView: {
        alignItems: "center",
        top: height * 0.1,
        height: height * 0.4,
        width: width * 1
    },
    currntTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 64,
        color: COLOR.REMEBERTEXT,
        alignSelf: "flex-start"
    },
    newPassView: {
        marginTop: height * 0.03,
        width: width * 0.44,
        paddingLeft: width * 0.07,
        alignItems: "center",
        alignSelf: "flex-start"
    },
    txtView: {
        width: width * 0.44,
        paddingLeft: width * 0.07,
        alignItems: "center",
        alignSelf: "flex-start"
    },
    newPassTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 64,
        color: COLOR.REMEBERTEXT,
        alignSelf: "flex-start"
    },
    rectangle: {
        height: height * 0.12,
        width: width * 0.9,
        backgroundColor: "white",
        borderWidth: height * 0.002,
        borderColor: COLOR.RECTANGLE,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonView: {
        height: height * 0.2,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center"
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    copyTxt: {
        fontFamily: "Lato-Regular",
        fontSize: height / 85,
        color: COLOR.COPYTXT,
    },
})