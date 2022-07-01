import { StyleSheet, FlatList, ImageBackground, Modal, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from '../../Components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../Components/CustomButton';
const { height, width } = Dimensions.get("screen")

const DATA = [
    {
        image: ImagePath.GREM,
        status: "GREM",
    },
    {
        image: ImagePath.GREM,
        status: "GRET",
    },
    {
        image: ImagePath.GREM,
        status: "USDT",
    },
    {
        image: ImagePath.GREM,
        status: "ETH",
    },
    {
        image: ImagePath.GREM,
        status: "BTC",
    },
]

const UsdtAddress = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [token, setToken] = useState("GREM")

    const renderFlatListDetail = (item) => {
        return (
            <TouchableOpacity onPress={() => { setToken(item.status), setModalVisible(false) }} style={{ width: width * 0.7, height: height * 0.063, alignItems: "center", alignSelf: "center" }}>
                <View style={{ flexDirection: "row", height: height * 0.06, alignItems: "center", width: width * 0.7 }}>
                    <Text style={{
                        fontSize: height / 44, color: COLOR.TOKEN_COLOR, fontFamily: "Poppins-Regular",
                    }}>{item.status}</Text>
                </View>
                <View style={styles.border}></View>
            </TouchableOpacity>
        )
    }

    function renderModal() {
        return (
            <View style={styles.modalView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.modalParent}>
                        <View style={styles.modalView}>
                            <FlatList
                                data={DATA}
                                nestedScrollEnabled={true}
                                renderItem={({ item }) => renderFlatListDetail(item)}
                            />

                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.textView}>
                    <Text style={styles.lebelTxt}>Add {token} Address</Text>
                </View>
                <View style={styles.copyView}>
                    <View style={styles.rectangle}>
                        <View style={styles.txtRectangle}>
                            <TextInput style={{
                                height: height * 0.09,
                                width: width * 0.6,
                                color:"#141414",
                            // backgroundColor: "green"
                            }} />
                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.copyRectangle}>
                            <Text style={styles.getText}>{token}</Text>
                            <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <CustomButton
                        title={"Add"}
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
                    title={"Add Address"}
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    leftPress={() => props.navigation.goBack()}
                />
                <KeyboardAwareScrollView enableOnAndroid={true}>
                    {renderQr()}
                </KeyboardAwareScrollView>
            </ImageBackground>
            {renderModal()}
        </SafeAreaView>
    )
}

export default UsdtAddress

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    buttonView: {
        // backgroundColor: "lightpink",
        height: height * 0.17,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        height: height * 0.25,
        width: width * 0.9,
        borderRadius: height / 35,
        backgroundColor: "white",
    },
    border: {
        height: height * 0.001,
        width: width * 0.8,
        backgroundColor: COLOR.MAILTXT,
        alignSelf: "center",
    },
    textView: {
        height: height * 0.1,
        // backgroundColor: "red",
        marginTop: height * 0.04,
        width: width * 0.9,
        justifyContent: "flex-end",
        alignSelf: "center"
    },
    txtRectangle: {
        height: height * 0.07,
        width: width * 0.72,
        // backgroundColor: "red",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        justifyContent: "center",
        alignItems: "center",
    },
    copyTxt: {
        height: height * 0.09,
        width: width * 0.6,
        // backgroundColor: "green"
    },
    copyRectangle: {
        height: height * 0.07,
        width: width * 0.18,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "pink",
        borderWidth: height * 0.0001,
        borderColor: COLOR.RECTANGLE,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 7
    },
    getText: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 54,
        color: COLOR.TAG_COLOR
    },
    lebelTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 50,
        color: "black",
    },
    modalParent: {
        height: height * 1,
        width: width * 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: "center",
        alignItems: "center"
    },
    rectangle: {
        height: height * 0.07,
        width: width * 0.9,
        // backgroundColor: "pink",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        flexDirection: "row",
        alignItems: "center"
    },
    copyView: {
        // backgroundColor: "red",
        height: height * 0.1,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.001
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1.1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
})