import { StyleSheet, ImageBackground, Alert, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { androidCameraPermission } from '../../utils/Permissions';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../../Components/Header';
const { height, width } = Dimensions.get("screen")

const progressStepsStyle = {
    activeStepIconBorderColor: '#0a0d64',
    activeLabelColor: '#0a0d64',
    activeStepNumColor: 'white',
    activeStepIconColor: '#0a0d64',
    completedStepIconColor: '#0a0d64',
    completedProgressBarColor: '#0a0d64',
    completedCheckColor: 'white'
};

const Kyc = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [address, setAddress] = useState("Residential");
    const [Newdate, setNewDate] = useState("");

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setNewDate(date)
        hideDatePicker();
    };

    // ************* On Select Image Picker *************
    const onSelectImage = async () => {
        const permissionStatus = await androidCameraPermission();
        if (permissionStatus || Platform.OS == "ios") {
            Alert.alert("Upload Post", "Choose an options", [
                { text: "Camera", onPress: onCamera },
                { text: "Gallary", onPress: onGallary },
                { text: "Cancel", onPress: () => { } },
            ]);
        }
    };

    // ************* On Camera Picker *************
    const onCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            console.log("===== Open Camera =====", image);
            setImageUrlPath(image.path);
            UploadFileApi(image.path);
        });
    };

    // ************* On Gallary Picker *************
    const onGallary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            quality: "low",
        }).then((image) => {
            console.log("selected image", image);
            // setImageUrlPath(image.path);
            UploadFileApi(image.path);
        });
    };

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <ProgressSteps {...progressStepsStyle}>
                    <ProgressStep nextBtnText={"Save & Next"} nextBtnStyle={{ bottom: height * 0.04, borderRadius: 10, backgroundColor: COLOR.BUTTONCOLOR, height: height * 0.09, width: width * 0.65, justifyContent: "center", alignItems: "center", alignSelf: "center" }} nextBtnTextStyle={{ color: 'white', fontSize: 18 }}>
                        <View style={styles.personalView}>
                            <Text style={styles.personalTxt}>Personal Information</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput placeholder='Full Name' style={{
                                fontFamily: "Lato-Regular",
                                fontSize: height / 65,
                                color: "#141414", height: height * 0.1, width: width * 0.75
                            }} />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput placeholder='Mobile Number' style={{
                                fontFamily: "Lato-Regular",
                                fontSize: height / 65,
                                color: "#141414", height: height * 0.1, width: width * 0.75
                            }} />
                        </View>
                        <View style={styles.dateView}>
                            <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.dobView}>
                                <Text style={styles.titleTxt}>DOB</Text>
                             
                                <Image source={ImagePath.DATE} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                date={new Date()}
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <View style={styles.dobView}>
                                <TextInput placeholder='POB' style={{
                                    fontFamily: "Lato-Regular",
                                    fontSize: height / 65,
                                    color: "black", height: height * 0.08, width: width * 0.35
                                }} />
                            </View>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput placeholder='Gender' style={{
                                fontFamily: "Lato-Regular",
                                fontSize: height / 65,
                                color: "black", height: height * 0.1, width: width * 0.75
                            }} />
                        </View>
                        <TouchableOpacity onPress={() => onSelectImage()} style={styles.uploadView}>
                            <Text style={styles.titleTxt}>Upload Photo</Text>
                        </TouchableOpacity>
                    </ProgressStep>
                    <ProgressStep previousBtnStyle={{ bottom: height * 0.04, borderRadius: 10, backgroundColor: COLOR.BUTTONCOLOR, height: height * 0.08, width: width * 0.3, justifyContent: "center", alignItems: "center", alignSelf: "center" }} previousBtnTextStyle={{ color: 'white', fontSize: height / 50 }} nextBtnText={"Save & Next"} nextBtnStyle={{ bottom: height * 0.04, borderRadius: 10, backgroundColor: COLOR.BUTTONCOLOR, height: height * 0.08, width: width * 0.3, justifyContent: "center", alignItems: "center", alignSelf: "center" }} nextBtnTextStyle={{ color: 'white', fontSize: height / 50 }}>
                        <View style={styles.personalView}>
                            <Text style={styles.personalTxt}>Identification</Text>
                        </View>
                        <TouchableOpacity style={styles.issueCounty}>
                            <Text style={styles.titleTxt}>Issuing county</Text>
                            <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.issueCounty}>
                            <Text style={styles.titleTxt}>Select ID Type</Text>
                            <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                        </TouchableOpacity>
                        <View style={styles.dateView}>
                            <View style={styles.dobView}>
                                <TextInput placeholder='ID Number' style={{
                                    fontFamily: "Lato-Regular",
                                    fontSize: height / 65,
                                    color: "black", height: height * 0.09, width: width * 0.35
                                }} />
                            </View>
                            <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.dobView}>
                                <Text style={styles.titleTxt}>Exp Date</Text>
                                <Image source={ImagePath.DATE} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                        <TouchableOpacity style={styles.issueCounty}>
                            <Text style={styles.browseTxt}>Browse</Text>
                            <Text style={styles.titleTxt}>Upload ID Proof - Front</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.issueCounty}>
                            <Text style={styles.browseTxt}>Browse</Text>
                            <Text style={styles.titleTxt}>Upload ID Proof - Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.uploadId}>
                            <Text style={styles.browseTxt}>Browse</Text>
                            <Text style={styles.titleTxt}>Upload Selfie with ID Proof</Text>
                        </TouchableOpacity>
                    </ProgressStep>
                    <ProgressStep previousBtnStyle={{ bottom: height * 0.04, borderRadius: 10, backgroundColor: COLOR.BUTTONCOLOR, height: height * 0.08, width: width * 0.3, justifyContent: "center", alignItems: "center", alignSelf: "center" }} previousBtnTextStyle={{ color: 'white', fontSize: height / 50 }} nextBtnText={"Save & Next"} nextBtnStyle={{ bottom: height * 0.04, borderRadius: 10, backgroundColor: COLOR.BUTTONCOLOR, height: height * 0.08, width: width * 0.3, justifyContent: "center", alignItems: "center", alignSelf: "center" }} nextBtnTextStyle={{ color: 'white', fontSize: height / 50 }}>
                        <View style={styles.personalView}>
                            <Text style={styles.personalTxt}>Contact Information</Text>
                        </View>
                        <View style={styles.addressView}>
                            <TouchableOpacity onPress={() => setAddress("Residential")}>
                                <Text style={{
                                    fontFamily: "Poppins-SemiBold",
                                    fontSize: height / 70,
                                    textDecorationLine: 'underline',
                                    color: address === "Residential" ? COLOR.REMEBERTEXT : COLOR.ADDRESS
                                }}>Residential Address</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setAddress("Permanent")}>
                                <Text style={{
                                    fontFamily: "Poppins-SemiBold",
                                    fontSize: height / 70,
                                    textDecorationLine: 'underline',
                                    color: address === "Permanent" ? COLOR.REMEBERTEXT : COLOR.ADDRESS
                                }}>Permanet Address</Text>
                            </TouchableOpacity>
                        </View>
                        {address === "Residential" ?
                            <View>
                                <TouchableOpacity style={styles.issueCounty}>
                                    <Text style={styles.titleTxt}>Select country</Text>
                                    <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                </TouchableOpacity>
                                <View style={styles.dateView}>
                                    <View style={styles.dobView}>
                                        <TextInput placeholder='ZIP' style={{
                                            fontFamily: "Lato-Regular",
                                            fontSize: height / 65,
                                            color: "black", height: height * 0.09, width: width * 0.35
                                        }} />
                                    </View>
                                    <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.dobView}>
                                        <Text style={styles.titleTxt}>City</Text>
                                        <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.issueCounty}>
                                    <Text style={styles.titleTxt}>Select State</Text>
                                    <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.issueCounty}>
                                    <Text style={styles.titleTxt}>Address proof type</Text>
                                    <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.issueCounty}>
                                    <Text style={styles.browseTxt}>Browse</Text>
                                    <Text style={styles.titleTxt}>Upload Address Proof - Front</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.uploadId}>
                                    <Text style={styles.browseTxt}>Browse</Text>
                                    <Text style={styles.titleTxt}>Upload Address Proof - back</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <TouchableOpacity style={styles.issueCounty}>
                                    <Text style={styles.titleTxt}>Select country</Text>
                                    <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                </TouchableOpacity>
                                <View style={styles.dateView}>
                                    <View style={styles.dobView}>
                                        <TextInput placeholder='ZIP' style={{
                                            fontFamily: "Lato-Regular",
                                            fontSize: height / 65,
                                            color: "black", height: height * 0.09, width: width * 0.35
                                        }} />
                                    </View>
                                    <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.dobView}>
                                        <Text style={styles.titleTxt}>City</Text>
                                        <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.issueCounty}>
                                    <Text style={styles.titleTxt}>Select State</Text>
                                    <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.issueCounty}>
                                    <Text style={styles.titleTxt}>Address proof type</Text>
                                    <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.05 }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.issueCounty}>
                                    <Text style={styles.browseTxt}>Browse</Text>
                                    <Text style={styles.titleTxt}>Upload Address Proof - Front</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.uploadId}>
                                    <Text style={styles.browseTxt}>Browse</Text>
                                    <Text style={styles.titleTxt}>Upload Address Proof - back</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </ProgressStep>
                </ProgressSteps>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    title={"KYC"}
                    leftPress={() => props.navigation.navigate("DashBoard")}
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

export default Kyc

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
        height: height * 1.15,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    personalTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 55,
        color: COLOR.REMEBERTEXT
    },
    titleTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 65,
        color: COLOR.TITLETXT
    },
    browseTxt: {
        textDecorationLine: 'underline',
        fontFamily: "Lato-Regular",
        fontSize: height / 55,
        color: COLOR.LABETEXT
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
    uploadId: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        marginTop: height * 0.02,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.08,
        width: width * 0.9,
        marginBottom: height * 0.04,
        justifyContent: "space-between",
        alignSelf: "center"
    },
    personalView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    addressView: {
        height: height * 0.035,
        width: width * 0.9,
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "red",
        alignSelf: "center",
        marginTop: height * 0.03
    },
    dobView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
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
        width: width * 0.43,
        // alignSelf: "center",
        justifyContent: "space-around"
    },
    uploadView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
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
        height: height * 0.2,
        width: width * 0.9,
        alignSelf: "center",
        justifyContent: "space-around",
        marginBottom: height * 0.09
    },
    dateView: {
        height: height * 0.1,
        width: width * 0.9,
        flexDirection: "row",
        // backgroundColor: "red",
        alignSelf: "center",
        alignItems: "flex-end",
        justifyContent: "space-between"
    }
})