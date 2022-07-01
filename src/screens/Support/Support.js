import {
  StyleSheet,
  FlatList,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ImagePath } from "../../utils/ImagePath";
import { Image, Text } from "@rneui/themed";
import { COLOR } from "../../utils/Color";
import Header from "../../Components/Header";
import CustomButton from "../../Components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { height, width } = Dimensions.get("screen");

const DATA = [
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  {
    image: ImagePath.GREM,
    status: "GREM",
    xrp: "320",
    from: "0x4200c90",
    usd: "$208.856",
  },
  // {
  //     image: ImagePath.GREM,
  //     status: "GREM",
  //     xrp: "320",
  //     from: "0x4200c90",
  //     usd: "$208.856"
  // },
  // {
  //     image: ImagePath.GREM,
  //     status: "GREM",
  //     xrp: "320",
  //     from: "0x4200c90",
  //     usd: "$208.856"
  // },
];

const Support = (props) => {
  const [buy, setBuy] = useState("Open");

  const renderFlatListDetail = (item) => {
    return (
      <View style={styles.testView}>
        <View style={styles.border}></View>
        <View style={styles.testTxtView}>
          <Text style={styles.testTxt}>Test</Text>
        </View>
        <View style={styles.testDetailParent}>
          <View style={styles.titleView}>
            <Text style={styles.issueTxt}>Issue Type</Text>
            <Text style={styles.issueTxt}>Uploads</Text>
            <Text style={styles.issueTxt}>Description</Text>
            <Text style={styles.issueTxt}>Actions</Text>
          </View>
          <View style={styles.valueView}>
            <View style={styles.valueTxtView}>
              <Text style={styles.depositTxt}>USD Deposits</Text>
              <Text style={styles.depositTxt}>Download File</Text>
              <Text style={styles.depositTxt}>test</Text>
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.replyTxt}>Reply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.replyTxt}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.border}></View>
      </View>
    );
  };

  const renderFlatListCloseTicket = (item) => {
    return (
      <View style={styles.testView}>
        <View style={styles.border}></View>
        <View style={styles.testTxtView}>
          <Text style={styles.testTxt}>Test</Text>
        </View>
        <View style={styles.testDetailParent}>
          <View style={styles.titleView}>
            <Text style={styles.issueTxt}>Issue Type</Text>
            <Text style={styles.issueTxt}>Uploads</Text>
            <Text style={styles.issueTxt}>Description</Text>
            <Text style={styles.issueTxt}>Actions</Text>
          </View>
          <View style={styles.valueView}>
            <View style={styles.valueTxtView}>
              <Text style={styles.depositTxt}>USD Deposits</Text>
              <Text style={styles.depositTxt}>Download File</Text>
              <Text style={styles.depositTxt}>test</Text>
            </View>
            <View style={styles.btnView1}>
              {/* <TouchableOpacity style={styles.btn}>
                <Text style={styles.replyTxt}>Close</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.replyTxt}>close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.border}></View>
      </View>
    );
  };

  function renderQr() {
    return (
      <View style={styles.parentViewQr}>
        <View style={styles.tabParent}>
          {buy === "Open" ? (
            <View style={styles.tabView}>
              <TouchableOpacity
                onPress={() => setBuy("Open")}
                style={{
                  height: height * 0.08,
                  width: width * 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    buy === "Open" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Open Tickets</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBuy("Close")}
                style={{
                  height: height * 0.08,
                  width: width * 0.4,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    buy === "Open" ? COLOR.TABBACK : COLOR.BUTTONCOLOR,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Closed Tickets</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.tabView}>
              <TouchableOpacity
                onPress={() => setBuy("Open")}
                style={{
                  height: height * 0.08,
                  width: width * 0.4,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    buy === "Open" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Open Tickets</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBuy("Close")}
                style={{
                  height: height * 0.08,
                  width: width * 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    buy === "Close" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Closed Tickets</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {buy === "Open" ? (
          <View style={styles.flatlistView}>
            <FlatList
              data={DATA}
              nestedScrollEnabled={true}
              renderItem={({ item }) => renderFlatListDetail(item)}
            />
          </View>
        ) : (
          <View>
            <Text>i</Text>
          </View>
        )}
        {buy === "close" ? (
          <View style={styles.buttonView}>
            <CustomButton
              title={"Create Ticket"}
              ButtonPress={() => props.navigation.navigate("CreateTicket")}
            />
          </View>
        ) : (
          <View>
            <View style={styles.flatlistView}>
              <FlatList
                data={DATA}
                nestedScrollEnabled={true}
                renderItem={({ item }) => renderFlatListCloseTicket(item)}
              />
            </View>
          </View>
        )}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={ImagePath.SPLASHBACK}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <Header
          title={"Support"}
          LeftIcon={true}
          leftImg={ImagePath.BACKICON}
          leftPress={() => props.navigation.navigate("DashBoard")}
        />
        {/* <KeyboardAwareScrollView enableOnAndroid={true}> */}
        <ScrollView>{renderQr()}</ScrollView>
        {/* </KeyboardAwareScrollView> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Support;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  testView: {
    height: height * 0.3,
    width: width * 1,
    // backgroundColor: "lightblue"
  },
  flatlistView: {
    height: height * 0.5,
    width: width * 1,
    // backgroundColor: "lightblue"
  },
  buttonView: {
    height: height * 0.2,
    width: width * 1,
    // backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  parentViewQr: {
    backgroundColor: "white",
    width: width * 1,
    height: height * 0.95,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  border: {
    height: height * 0.002,
    width: width * 1,
    backgroundColor: COLOR.SUPPORT,
  },
  titleView: {
    height: height * 0.2,
    width: width * 0.25,
    // backgroundColor: "pink",
    justifyContent: "space-around",
  },
  valueView: {
    height: height * 0.25,
    width: width * 0.61,
    // backgroundColor: "red",
  },
  valueTxtView: {
    height: height * 0.15,
    width: width * 0.2,
    // backgroundColor: "pink",
    justifyContent: "space-around",
    alignSelf: "flex-end",
  },
  btnView: {
    height: height * 0.05,
    width: width * 0.5,
    // backgroundColor: "lightgreen",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  btnView1: {
    height: height * 0.05,
    width: width * 0.5,
    // backgroundColor: "lightgreen",
    // justifyContent: "space-between",
    alignSelf: "flex-end",
    // flexDirection: "row",
    alignItems: "flex-end",
  },
  testTxtView: {
    height: height * 0.05,
    width: width * 0.9,
    // backgroundColor: "pink",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  testDetailParent: {
    height: height * 0.22,
    width: width * 0.86,
    // backgroundColor: "yellow",
    alignSelf: "center",
    flexDirection: "row",
  },
  tabParent: {
    height: height * 0.15,
    width: width * 1,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  tabView: {
    height: height * 0.08,
    width: width * 0.9,
    backgroundColor: COLOR.TABBACK,
    borderRadius: height * 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buyText: {
    fontFamily: "Poppins-Medium",
    fontSize: height / 55,
    color: "white",
    // backgroundColor:'red'
  },
  testTxt: {
    fontFamily: "Poppins-SemiBold",
    fontSize: height / 50,
    color: "black",
    // backgroundColor: "red"
  },
  issueTxt: {
    fontFamily: "Poppins-Medium",
    fontSize: height / 75,
    color: "black",
  },
  depositTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 85,
    color: "black",
  },
  replyTxt: {
    fontFamily: "Poppins-Medium",
    fontSize: height / 75,
    color: "white",
  },
  btn: {
    height: height * 0.05,
    width: width * 0.23,
    borderRadius: height * 0.007,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.BUTTONCOLOR,
  },
});
