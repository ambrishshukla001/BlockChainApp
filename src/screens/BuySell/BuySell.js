import {
  StyleSheet,
  FlatList,
  Modal,
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
];

const BuySell = (props) => {
  const [buy, setBuy] = useState("Buy");
  const [buyToken, setBuyToken] = useState("GREM");
  const [buyTokenExchange, setBuyTokenExchange] = useState("GREM");
  const [sellToken, setSellToken] = useState("GREM");
  const [sellTokenChange, setSellTokenChange] = useState("GREM");
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalSell, setModalSell] = useState(false);
  const [modalSellChange, setModalSellChange] = useState(false);

  const renderFlatListDetail = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setBuyToken(item.status), setModalVisible(false);
        }}
        style={{
          width: width * 0.7,
          height: height * 0.063,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: height * 0.06,
            alignItems: "center",
            width: width * 0.7,
          }}
        >
          <Text
            style={{
              fontSize: height / 44,
              color: COLOR.TOKEN_COLOR,
              fontFamily: "Poppins-Regular",
            }}
          >
            {item.status}
          </Text>
        </View>
        <View style={styles.border}></View>
      </TouchableOpacity>
    );
  };
  const renderBuydetails = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setBuyTokenExchange(item.status), setModal(false);
        }}
        style={{
          width: width * 0.7,
          height: height * 0.063,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: height * 0.06,
            alignItems: "center",
            width: width * 0.7,
          }}
        >
          <Text
            style={{
              fontSize: height / 44,
              color: COLOR.TOKEN_COLOR,
              fontFamily: "Poppins-Regular",
            }}
          >
            {item.status}
          </Text>
        </View>
        <View style={styles.border}></View>
      </TouchableOpacity>
    );
  };
  const renderSellDetail = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSellToken(item.status), setModalSell(false);
        }}
        style={{
          width: width * 0.7,
          height: height * 0.063,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: height * 0.06,
            alignItems: "center",
            width: width * 0.7,
          }}
        >
          <Text
            style={{
              fontSize: height / 44,
              color: COLOR.TOKEN_COLOR,
              fontFamily: "Poppins-Regular",
            }}
          >
            {item.status}
          </Text>
        </View>
        <View style={styles.border}></View>
      </TouchableOpacity>
    );
  };
  const renderSellExchnage = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSellTokenChange(item.status), setModalSellChange(false);
        }}
        style={{
          width: width * 0.7,
          height: height * 0.063,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: height * 0.06,
            alignItems: "center",
            width: width * 0.7,
          }}
        >
          <Text
            style={{
              fontSize: height / 44,
              color: COLOR.TOKEN_COLOR,
              fontFamily: "Poppins-Regular",
            }}
          >
            {item.status}
          </Text>
        </View>
        <View style={styles.border}></View>
      </TouchableOpacity>
    );
  };

  function renderModal() {
    return (
      <View style={styles.modalView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
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
    );
  }

  function renderModalChange() {
    return (
      <View style={styles.modalView}>
        <Modal animationType="slide" transparent={true} visible={modal}>
          <View style={styles.modalParent}>
            <View style={styles.modalView}>
              <FlatList
                data={DATA}
                nestedScrollEnabled={true}
                renderItem={({ item }) => renderBuydetails(item)}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  function renderModalSell() {
    return (
      <View style={styles.modalView}>
        <Modal animationType="slide" transparent={true} visible={modalSell}>
          <View style={styles.modalParent}>
            <View style={styles.modalView}>
              <FlatList
                data={DATA}
                nestedScrollEnabled={true}
                renderItem={({ item }) => renderSellDetail(item)}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  function renderModalSellChange() {
    return (
      <View style={styles.modalView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalSellChange}
        >
          <View style={styles.modalParent}>
            <View style={styles.modalView}>
              <FlatList
                data={DATA}
                nestedScrollEnabled={true}
                renderItem={({ item }) => renderSellExchnage(item)}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  function renderQr() {
    return (
      <View style={styles.parentViewQr}>
        <View style={styles.tabParent}>
          {buy === "Buy" ? (
            <View style={styles.tabView}>
              <TouchableOpacity
                onPress={() => setBuy("Buy")}
                style={{
                  height: height * 0.08,
                  width: width * 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    buy === "Buy" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBuy("Sell")}
                style={{
                  height: height * 0.08,
                  width: width * 0.4,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: COLOR.TABBACK,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Sell</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.tabView}>
              <TouchableOpacity
                onPress={() => setBuy("Buy")}
                style={{
                  height: height * 0.08,
                  width: width * 0.4,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    buy === "Buy" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setBuy("Sell")}
                style={{
                  height: height * 0.08,
                  width: width * 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    buy === "Buy" ? COLOR.TABBACK : COLOR.BUTTONCOLOR,
                  borderRadius: height * 0.2,
                }}
              >
                <Text style={styles.buyText}>Sell</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {buy === "Buy" ? (
          <View>
            <View style={styles.personalView}>
              <Text style={styles.personalTxt}>Buy</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.issueCounty}
            >
              <Text style={styles.gremtxt}>{buyToken}</Text>
              <Image
                source={ImagePath.DOWN}
                resizeMode="contain"
                style={{ height: height * 0.05, width: width * 0.05 }}
              />
            </TouchableOpacity>
            <View style={styles.forView}>
              <Text style={styles.forTxt}>For</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModal(true)}
              style={styles.btcDropdown}
            >
              <Text style={styles.gremtxt}>{buyTokenExchange}</Text>
              <Image
                source={ImagePath.DOWN}
                resizeMode="contain"
                style={{ height: height * 0.05, width: width * 0.05 }}
              />
            </TouchableOpacity>
            <ImageBackground
              source={ImagePath.GREMRECT}
              resizeMode="contain"
              style={styles.gremRect}
            >
              <Text style={styles.getText}>
                0.00001 {buyToken} Get 1 {buyTokenExchange}
              </Text>
            </ImageBackground>
            <View style={styles.inuputView}>
              <TextInput
                placeholder="Min : 10 Max : 200"
                style={{
                  height: height * 0.08,
                  width: width * 0.65,
                  color:"#141414"
                 // backgroundColor: "red"
                }}
              />
              <Text style={styles.inputGremtxt}>{buyToken}</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Min : 10 Max : 200"
                style={{
                  height: height * 0.08,
                  width: width * 0.65,
                  color:"#141414"
                 // backgroundColor: "red"
                }}
              />
              <Text style={styles.inputGremtxt}>{buyTokenExchange}</Text>
            </View>
            <View
              style={{
                height: height * 0.08,
                width: width * 0.9,
                alignSelf: "center",
                // backgroundColor:"green",
                justifyContent: "flex-end",

              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: height / 55,
                  marginVertical: 8,
                }}
              >
                You will be receive:
              </Text>
              <Text style={{ color: "gray", fontSize: height / 55, }}>
                You will be pay:
              </Text>
            </View>
            <View style={styles.buttonView}>
              <CustomButton
                title={"Buy"}
                ButtonPress={() => props.navigation.navigate("ConfirmTrans")}
              />
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.personalView}>
              <Text style={styles.personalTxt}>Sell</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalSell(true)}
              style={styles.issueCounty}
            >
              <Text style={styles.gremtxt}>{sellToken}</Text>
              <Image
                source={ImagePath.DOWN}
                resizeMode="contain"
                style={{ height: height * 0.05, width: width * 0.05 }}
              />
            </TouchableOpacity>
            <View style={styles.forView}>
              <Text style={styles.forTxt}>For</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalSellChange(true)}
              style={styles.btcDropdown}
            >
              <Text style={styles.gremtxt}>{sellTokenChange}</Text>
              <Image
                source={ImagePath.DOWN}
                resizeMode="contain"
                style={{ height: height * 0.05, width: width * 0.05 }}
              />
            </TouchableOpacity>
            <ImageBackground
              source={ImagePath.GREMRECT}
              resizeMode="contain"
              style={styles.gremRect}
            >
              <Text style={styles.getText}>
                0.00001 {sellToken} Get 1 {sellTokenChange}
              </Text>
            </ImageBackground>
            <View style={styles.inuputView}>
              <TextInput
                placeholder="Min : 10 Max : 200"
                style={{
                  height: height * 0.08,
                  width: width * 0.65,
                  color:"#141414"
                 // backgroundColor: "red"
                }}
              />
              <Text style={styles.inputGremtxt}>{sellToken}</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Min : 10 Max : 200"
                style={{
                  height: height * 0.08,
                  width: width * 0.65,
                  color:"#141414"
                 // backgroundColor: "red"
                }}
              />
              <Text style={styles.inputGremtxt}>{sellTokenChange}</Text>
            </View>




            <View
              style={{
                height: height * 0.08,
                width: width * 0.9,
                alignSelf: "center",
                // backgroundColor:"green",
                justifyContent: "flex-end",

              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: height / 55,
                  marginVertical: 8,
                }}
              >
                You will be sell:
              </Text>
              <Text style={{ color: "gray", fontSize: height / 55, }}>
                You will be receive:
              </Text>
            </View>
            <View style={styles.buttonView}>
              <CustomButton
                title={"Sell"}
                ButtonPress={() => props.navigation.navigate("ConfirmTrans")}
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
          title={"Buy & Sell"}
          LeftIcon={true}
          leftImg={ImagePath.BACKICON}
          leftPress={() => props.navigation.navigate("DashBoard")}
        />
        <KeyboardAwareScrollView enableOnAndroid={true}>
          {renderQr()}
        </KeyboardAwareScrollView>
      </ImageBackground>
      {renderModal()}
      {renderModalChange()}
      {renderModalSell()}
      {renderModalSellChange()}
    </SafeAreaView>
  );
};

export default BuySell;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  inputAmt: {
    height: height * 0.08,
    width: width * 0.65,
    // backgroundColor: "red"
  },
  gremtxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 65,
    color: "black",
  },
  inputGremtxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 65,
    color: "black",
  },
  modalView: {
    height: height * 0.25,
    width: width * 0.9,
    borderRadius: height / 35,
    backgroundColor: "white",
  },
  buttonView: {
    // backgroundColor: "pink",
    height: height * 0.15,
    width: width * 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.02,
  },
  modalParent: {
    height: height * 1,
    width: width * 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    height: height * 0.001,
    width: width * 0.8,
    backgroundColor: COLOR.MAILTXT,
    alignSelf: "center",
  },
  modalView: {
    height: height * 0.25,
    width: width * 0.9,
    borderRadius: height / 35,
    backgroundColor: "white",
  },
  getText: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 45,
    color: "black",
  },
  gremRect: {
    height: height * 0.2,
    width: width * 0.8,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },
  buyText: {
    fontFamily: "Poppins-Medium",
    fontSize: height / 40,
    color: "white",
  },
  tabView: {
    // backgroundColor: "red",
    height: height * 0.08,
    width: width * 0.9,
    backgroundColor: COLOR.TABBACK,
    borderRadius: height * 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  personalView: {
    height: height * 0.05,
    width: width * 0.9,
    // backgroundColor: "red",
    alignSelf: "center",
  },
  forView: {
    height: height * 0.065,
    width: width * 0.9,
    // backgroundColor: "red",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  personalTxt: {
    fontFamily: "Poppins-SemiBold",
    fontSize: height / 44,
    color: COLOR.REMEBERTEXT,
  },
  forTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 52,
    color: COLOR.lightGrey,
  },
  issueCounty: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    marginTop: height * 0.01,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.08,
    width: width * 0.9,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  btcDropdown: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    marginTop: height * 0.001,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.08,
    width: width * 0.9,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  inuputView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.08,
    width: width * 0.9,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  inputView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    marginTop: height * 0.025,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.08,
    width: width * 0.9,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  tabParent: {
    height: height * 0.12,
    width: width * 1,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  parentViewQr: {
    backgroundColor: "white",
    width: width * 1,
    height: height * 1.2,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
