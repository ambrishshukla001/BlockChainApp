import { StyleSheet, FlatList, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import Header from '../../Components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen")

let colors = ['#C8D3E5', '#F7F7F8'];

const DATA = [
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "GREM",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "GREM",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "GREM",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "GREM",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
    {
        image: ImagePath.PEPSI,
        status: "PEPSI",

    },
]

const HISTORY = [
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"
    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
    {
        no: 1,
        name: "Pepsi",
        amount: "10",
        hash: "5241sdrd...",
        status: "Completed",
        date: "04 May"

    },
]

const Redemption = (props) => {
    const [vendors, setVendors] = useState("Vendors")

    const renderFlatListDetail = (item) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate("VendorsDetails")} style={styles.listParentView}>
                <ImageBackground source={ImagePath.IMAGEREC} style={styles.backImg}>
                    <Image source={item.image} resizeMode="contain" style={{ height: height * 0.1, width: width * 0.19 }}></Image>
                </ImageBackground>
                <View style={styles.titleView}>
                    <Text style={styles.titleTxt}>{item.status}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderHitsory = (item, index) => {
        return (
            <View style={{
                backgroundColor: colors[index % colors.length],
                height: height * 0.04,
                width: width * 1,
                flexDirection: "row"
            }}>
                <View style={styles.sno}>
                    <Text style={styles.dataTxt}>{item.no}</Text>
                </View>
                <View style={styles.vnendorName}>
                    <Text style={styles.dataTxt}>{item.name}</Text>
                </View>
                <View style={styles.gretView}>
                    <Text style={styles.dataTxt}>{item.amount}</Text>
                </View>
                <View style={styles.hashView}>
                    <Text style={styles.hashTxt}>{item.hash}</Text>
                </View>
                <View style={styles.statusView}>
                    <Text style={styles.statuTxt}>{item.status}</Text>
                </View>
                <View style={styles.dateView}>
                    <Text style={styles.dataTxt}>{item.date}</Text>
                </View>
            </View>
        )
    }

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.tabParent}>
                    {
                        vendors === "Vendors" ?
                            <View style={styles.tabView}>
                                <TouchableOpacity onPress={() => setVendors("Vendors")} style={{
                                    height: height * 0.08,
                                    width: width * 0.5,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: vendors === "Vendors" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                                    borderRadius: height * 0.2
                                }}>
                                    <Text style={styles.buyText}>Vendors</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setVendors("History")} style={{
                                        height: height * 0.08,
                                        width: width * 0.4,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: COLOR.TABBACK,
                                        borderRadius: height * 0.2
                                    }}>
                                    <Text style={styles.buyText}>History</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={styles.tabView}>
                                <TouchableOpacity onPress={() => setVendors("Vendors")} style={{
                                    height: height * 0.08,
                                    width: width * 0.4,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: vendors === "Vendors" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                                    borderRadius: height * 0.2
                                }}>
                                    <Text style={styles.buyText}>Vendors</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setVendors("History")} style={{
                                        height: height * 0.08,
                                        width: width * 0.5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: vendors === "Vendors" ? COLOR.TABBACK : COLOR.BUTTONCOLOR,
                                        borderRadius: height * 0.2
                                    }}>
                                    <Text style={styles.buyText}>History</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
                {vendors === "Vendors" ?
                    <View style={styles.vendorView}>
                        <View style={styles.searchView}>
                            <Text style={styles.vendorsTxt}>Vendors</Text>
                            <View style={styles.searchBar}>
                                <TextInput style={{
                                    height: height * 0.06,
                                    width: width * 0.5,
                                    color:"#141414",
                                    // backgroundColor: "pink",
                                    fontSize: height / 65,
                                }} />
                                <TouchableOpacity>
                                    <Image source={ImagePath.SEARCH} resizeMode="contain" style={styles.searchImg} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.listView}>
                            <FlatList
                                data={DATA}
                                numColumns={3}
                                contentContainerStyle={{ paddingBottom: height * 0.01, }}
                                nestedScrollEnabled={true}
                                renderItem={({ item }) => renderFlatListDetail(item)}
                            />
                        </View>
                    </View>
                    :
                    <View style={styles.vendorView}>
                        <View style={styles.searchView}>
                            <View style={styles.searchBar}>
                                <TextInput style={{
                                    height: height * 0.06,
                                    width: width * 0.5,
                                    color:"#141414",
                                    // backgroundColor: "pink",
                                    fontSize: height / 65,
                                }} />
                                <TouchableOpacity>
                                    <Image source={ImagePath.SEARCH} resizeMode="contain" style={styles.searchImg} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.exportView}>
                                <Image source={ImagePath.EXPORT} resizeMode="contain" style={{ height: height * 0.022, width: width * 0.16 }} />
                                <Text style={styles.exporttxt}>Export</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listHistoryView}>
                            <View style={styles.heading}>
                                <View style={styles.sno}>
                                    <Text style={styles.snoTxt}>S.No.</Text>
                                </View>
                                <View style={styles.vnendorName}>
                                    <Text style={styles.snoTxt}>Vendor Name</Text>
                                </View>
                                <View style={styles.gretView}>
                                    <Text style={styles.snoTxt}>   GRET{'\n'}Amount</Text>
                                </View>
                                <View style={styles.hashView}>
                                    <Text style={styles.snoTxt}>Tx Hash</Text>
                                </View>
                                <View style={styles.statusView}>
                                    <Text style={styles.snoTxt}>Status</Text>
                                </View>
                                <View style={styles.dateView}>
                                    <Text style={styles.snoTxt}>Date</Text>
                                </View>
                            </View>
                            <FlatList
                                data={HISTORY}
                                numColumns={0}
                                contentContainerStyle={{ paddingBottom: height * 0.22, }}
                                nestedScrollEnabled={true}
                                renderItem={({ item, index }) => renderHitsory(item, index)}
                            />
                        </View>
                    </View>
                }
            </View >
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    title={"Redemption"}
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    leftPress={() => props.navigation.goBack()}
                />
                {/* <KeyboardAwareScrollView enableOnAndroid={true}> */}
                <ScrollView>
                    {renderQr()}
                </ScrollView>
                {/* </KeyboardAwareScrollView> */}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Redemption

const styles = StyleSheet.create({
    sno: {
        height: height * 0.04,
        width: width * 0.11,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    gretView: {
        height: height * 0.04,
        width: width * 0.2,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    hashView: {
        height: height * 0.04,
        width: width * 0.15,
        // backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    statusView: {
        height: height * 0.04,
        width: width * 0.15,
        // backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    dateView: {
        height: height * 0.04,
        width: width * 0.15,
        // backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center"
    },
    vnendorName: {
        height: height * 0.04,
        width: width * 0.24,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    heading: {
        height: height * 0.04,
        width: width * 1,
        backgroundColor: COLOR.BUTTONCOLOR,
        flexDirection: "row"
    },
    titleTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 65,
        color: "white"
    },
    titleView: {
        height: height * 0.04,
        width: width * 0.3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLOR.BUTTONCOLOR
    },
    exporttxt: {
        fontFamily: "Poppins-Light",
        fontSize: height / 80,
        color: COLOR.lightGrey
    },
    snoTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 95,
        color: "white"
    },
    dataTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 70,
        color: COLOR.DATATXT
    },
    statuTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 100,
        color: COLOR.GREEN
    },
    hashTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 100,
        color: COLOR.DATATXT
    },
    backImg: {
        height: height * 0.13,
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.3
    },
    searchBar: {
        height: height * 0.05,
        width: width * 0.65,
        backgroundColor: "white",
        borderWidth: height * 0.001,
        borderColor: COLOR.BORDER,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 6
    },
    exportView: {
        height: height * 0.04,
        width: width * 0.18,
        // backgroundColor: "green",
        alignItems: "center",
        justifyContent: "space-between"
    },
    listView: {
        height: height * 0.77,
        width: width * 1,
        alignSelf: "center",
        // backgroundColor: "yellow",
        marginTop: height * 0.02
    },
    listHistoryView: {
        height: height * 1,
        width: width * 1,
        alignSelf: "center",
        // backgroundColor: "yellow",
        marginTop: height * 0.02
    },
    inputView: {
        height: height * 0.06,
        width: width * 0.5,
        // backgroundColor: "pink",
        fontSize: height / 65,
    },
    searchImg: {
        height: height * 0.02,
        width: width * 0.07,
        // backgroundColor: "red"
    },
    mainContainer: {
        flex: 1,
    },
    listParentView: {
        // backgroundColor: "red",
        height: height * 0.17,
        marginTop: height * 0.01,
        marginLeft: width * 0.03,
        width: width * 0.29,
    },
    vendorView: {
        height: height * 1,
        width: width * 1,
        // backgroundColor: "pink"
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    tabView: {
        height: height * 0.08,
        width: width * 0.9,
        backgroundColor: COLOR.TABBACK,
        borderRadius: height * 0.2,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buyText: {
        fontFamily: "Poppins-Medium",
        fontSize: height / 40,
        color: "white"
    },
    vendorsTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 48,
        color: "black"
    },
    searchView: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "yellow",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between"
    },
    tabParent: {
        height: height * 0.12,
        width: width * 1,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1.2,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
})