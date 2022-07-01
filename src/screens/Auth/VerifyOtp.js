import { StyleSheet, Modal, KeyboardAvoidingView, FlatList, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import { CountryCode } from "../../utils/CountryCode"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthInput from '../../Components/AuthInput';
import CodeInput from 'react-native-code-input';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import CountDown from 'react-native-countdown-component';
import Header from '../../Components/Header';
const { height, width } = Dimensions.get("screen")

const VerifyOtp = (props) => {
    const [count, setCount] = useState(true);

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.inputView}>
                    <Text style={{ fontFamily: "Poppins-Regular", fontSize: height / 65, color: "black" }} >Always Make Sure That you Are Visiting</Text>
                    <Text style={{ fontFamily: "Poppins-Regular", fontSize: height / 65, color: "black" }} >The Current URL</Text>
                </View>
                <View style={styles.codeInputView}>
                    <CodeInput
                        secureTextEntry
                        space={20}
                        codeInputStyle={{
                            backgroundColor: COLOR.TXT_INPUT,
                            color: COLOR.BUTTONCOLOR,
                            fontSize: Platform.OS === "ios" ? height / 20 : height / 28,
                            height: Platform.OS === "ios" ? height * 0.08 : height * 0.09,
                            borderRadius: height / 75,
                            width: width * 0.16,
                            // height: height * 0.04,
                            alignItems: 'center',
                            fontWeight: "bold"
                        }}
                        // ref="codeInputRef2"
                        keyboardType="numeric"
                        codeLength={4}
                        borderType='border-circle'
                        autoFocus={false}
                        containerStyle={{ marginTop: height * 0.15, }}
                        onFulfill={() => { props.navigation.navigate("ResetPassword"), setCount(false) }}
                    />
                </View>
                <View style={styles.countView}>
                    {count ? (
                        <CountDown
                            until={60}
                            size={20}
                            onFinish={() => {
                                setCount(false)
                            }}
                            digitStyle={{ backgroundColor: COLOR.BACKGROUND_THEME }}
                            digitTxtStyle={{ color: COLOR.GREY, fontSize: height / 50 }}
                            separatorStyle={{ color: COLOR.GREY, fontSize: height / 50 }}
                            timeToShow={["M", "S"]}
                            timeLabels={{ m: "", s: "" }}
                            showSeparator
                        />
                    ) : (
                        <Text style={{ alignSelf: "center", color: "white" }}>00 : 00</Text>
                    )}
                </View>
                <View style={styles.recieveTxtView}>
                    <Text style={{ fontFamily: "Montserrat-Medium", fontSize: height / 52, color: COLOR.RECIEVETXT }}>Didn't recieve the code?</Text>
                </View>
                <TouchableOpacity onPress={() => setCount(true)} style={styles.sendTxtView}>
                    <Text style={{ fontFamily: "Montserrat-Medium", fontSize: height / 50, color: COLOR.BUTTONCOLOR }}>Send OTP again</Text>
                </TouchableOpacity>
            </View >
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    title={"Verify OTP"}
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    leftPress={() => props.navigation.goBack()}
                />
                <KeyboardAwareScrollView enableOnAndroid={true}>
                    {/* <ScrollView> */}
                    {renderQr()}
                    {/* </ScrollView> */}
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default VerifyOtp

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
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    inputView: {
        height: height * 0.07,
        width: width * 1,
        // backgroundColor: "yellow",
        marginTop: height * 0.06,
        alignItems: "center",
        justifyContent: "space-between"
    },
    codeInputView: {
        height: height * 0.25,
        width: width * 1,
        // backgroundColor: "pink",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    recieveTxtView: {
        height: height * 0.1,
        width: width * 1,
        // backgroundColor: "pink",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    sendTxtView: {
        height: height * 0.06,
        width: width * 1,
        // backgroundColor: "lightblue",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    countView: {
        height: height * 0.08,
        width: width * 1,
        // backgroundColor: "pink",
        justifyContent: "flex-end",
        alignItems: "center"
    }
})