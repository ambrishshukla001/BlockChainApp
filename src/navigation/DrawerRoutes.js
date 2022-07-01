import {
  StyleSheet,
  Modal,
  View,
  Dimensions,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab from "../navigation/BottomTab";
import { Image, Text, Input } from "@rneui/themed";
import { ImagePath } from "../utils/ImagePath";
import { COLOR } from "../utils/Color";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("screen");

const Drawer = createDrawerNavigator();

const DrawerRoutes = (props) => {
  const [isEnabled, setEnabled] = useState(false);
  const [toogle, setToggle] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  function toggleSwitch() {
    if (isEnabled) {
      setEnabled(false);
      setToggle(true);
    } else if (!isEnabled) {
      setEnabled(true);

      setToggle(false);
    }
  }

  function renderModal() {
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalParent}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible),
                  props.navigation.navigate("DashBoard");
              }}
              style={styles.crossView}
            >
              <Image
                source={ImagePath.MODALCROSS}
                resizeMode="contain"
                style={{
                  alignSelf: "flex-end",
                  height: height * 0.03,
                  width: width * 0.03,
                }}
              />
            </TouchableOpacity>
            <Text style={styles.modalText}>
              Are you sure, you want to Logout?
            </Text>
            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible),
                    props.navigation.navigate("DashBoard");
                }}
                style={{
                  borderRadius: height * 0.01,
                  backgroundColor: COLOR.BUTTONCOLOR,
                  height: height * 0.05,
                  width: width * 0.23,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.textStyle}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible),
                    props.navigation.navigate("Login");
                }}
                style={{
                  borderRadius: height * 0.01,
                  backgroundColor: COLOR.BUTTONCOLOR,
                  height: height * 0.05,
                  width: width * 0.23,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  function customerDrawerContent(props) {
    return (
      <ScrollView style={styles.tabContaner}>
        {renderModal()}
        <View style={styles.profileView}>
          <View style={styles.profile}>
            <Image
              source={ImagePath.PROFILE}
              resizeMode="contain"
              style={{ height: height * 0.2, width: width * 0.2 }}
            />
          </View>
          <View style={styles.nameView}>
            <Text style={styles.nameTxt}>Mohd Waseem</Text>
            <Text style={styles.usernameTxt}>Muhammad2837</Text>
            <Text style={styles.usernameTxt}>7272727282838%$%</Text>
          </View>
        </View>
        <View style={styles.border}></View>
        <View style={styles.emailView}>
          <View style={styles.email}>
            <Image
              source={ImagePath.EMAILVERIFY}
              resizeMode="contain"
              style={{ height: height * 0.08, width: width * 0.1 }}
            />
          </View>
          <View style={styles.emailTxtView}>
            <Text style={styles.emailVerifyTxt}>Email Verification</Text>
            <Text style={styles.emaiUnderTxt}>Muhammad2837</Text>
            <View style={styles.emailConfirmView}>
              <Text style={styles.usernameTxt}>waseem2666@gmail.com</Text>
              <Image
                source={ImagePath.COMPLETED}
                resizeMode="contain"
                style={styles.completedImg}
              />
            </View>
          </View>
        </View>
        <View style={styles.borderDrawer}></View>
        <View style={styles.chagePassView}>
          <View style={styles.email}>
            <Image
              source={ImagePath.LOCKING}
              resizeMode="contain"
              style={{ height: height * 0.1, width: width * 0.08 }}
            />
          </View>
          <View style={styles.passTxtView}>
            <Text style={styles.emailVerifyTxt}>Change Password</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ChangePassword")}
              style={styles.changeBtn}
            >
              <Text style={styles.changeTxt}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.borderDrawer}></View>
        <View style={styles.kycView}>
          <View style={styles.email}>
            <Image
              source={ImagePath.ID}
              resizeMode="contain"
              style={{ height: height * 0.08, width: width * 0.08 }}
            />
          </View>
          <View style={styles.kycVerifyView}>
            <Text style={styles.emailVerifyTxt}>KYC Verification</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Kyc")}
              style={styles.updateBtn}
            >
              <Text style={styles.changeTxt}>Update</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.approveView}>
            <Text style={styles.approveTxt}>Approved</Text>
          </View>
        </View>

        {/* <View style={styles.borderDrawer}></View> */}

        {/* <View style={styles.kycView}>
          <View style={styles.email}>
            <Image
              source={ImagePath.BANK}
              resizeMode="contain"
              style={{ height: height * 0.1, width: width * 0.09 }}
            />
          </View>
          <View style={styles.kycVerifyView}>
            <Text style={styles.emailVerifyTxt}>Bank Details</Text>
            <TouchableOpacity
            //   onPress={() => props.navigation.navigate("AddBank")}
              style={styles.addBtn}
            >
              <Text style={styles.changeTxt}>+Add bank detail</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.approveView}>
            <Text style={styles.incompTxt}>Incomplete</Text>
          </View>
        </View>
         */}
        <View style={styles.borderDrawer}></View>
        <View style={styles.kycView}>
          <View style={styles.email}>
            <Image
              source={ImagePath.AUTH}
              resizeMode="contain"
              style={{ height: height * 0.1, width: width * 0.08 }}
            />
          </View>
          <View style={styles.authView}>
            <Text style={styles.emailVerifyTxt}>Authentication Settings</Text>
            <Text style={styles.twoTxt}> Two-factor Authentication</Text>
          </View>
          <View style={styles.switchView}>
            <Switch
              trackColor={{ false: "#192255", true: "#192255" }}
              thumbColor={isEnabled ? "white" : "#192255"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={styles.borderDrawer}></View>
        <View style={styles.chagePassView}>
          <View style={styles.email}>
            <Image
              source={ImagePath.PRICETAG}
              resizeMode="contain"
              style={{ height: height * 0.1, width: width * 0.07 }}
            />
          </View>
          <View style={styles.passTxtView}>
            <Text style={styles.addUsdtTxt}>Add USDT,BTC,ETH Address</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("UsdtAddress")}
              style={styles.addUsdtBtn}
            >
              <Text style={styles.changeTxt}>+Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.borderDrawer}></View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Support")}
          style={styles.chagePassView}
        >
          <View style={styles.email}>
            <Image
              source={ImagePath.SUPPORT}
              resizeMode="contain"
              style={{ height: height * 0.1, width: width * 0.07 }}
            />
          </View>
          <View style={styles.passTxtView}>
            <Text style={styles.addUsdtTxt}>Support</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.borderDrawer}></View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.chagePassView}
        >
          <View style={styles.email}>
            <Image
              source={ImagePath.LOGOUT}
              resizeMode="contain"
              style={{ height: height * 0.1, width: width * 0.07 }}
            />
          </View>
          <View style={styles.passTxtView}>
            <Text style={styles.addUsdtTxt}>Logout</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.bottomBorder}></View>
      </ScrollView>
    );
  }

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: width * 0.89 },
      }}
      drawerContent={(props) => customerDrawerContent(props)}
    >
      <Drawer.Screen name="Tab" component={BottomTab} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;

const styles = StyleSheet.create({
  tabContaner: {
    flex: 1,
    // backgroundColor: "pink"
  },
  profileView: {
    height: height * 0.18,
    width: width * 0.89,
    // backgroundColor: "lightblue",
    flexDirection: "row",
  },
  profile: {
    height: height * 0.18,
    width: width * 0.3,
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: height / 60,
    color: COLOR.lightGrey,
    fontFamily: "Poppins",
  },
  textStyle: {
    fontSize: height / 55,
    color: "white",
    fontFamily: "Poppins",
  },
  modalParent: {
    height: height * 1,
    width: width * 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  crossView: {
    height: height * 0.06,
    width: width * 0.72,
    // backgroundColor: "red",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingVertical: height * 0.015,
  },
  modalView: {
    height: height * 0.28,
    width: width * 0.8,
    borderRadius: height / 80,
    backgroundColor: "white",
    justifyContent: "flex-start",
    // paddingVertical: height * 0.04,
    alignItems: "center",
    // marginTop: height * 0.22,
    alignSelf: "center",
  },
  email: {
    height: height * 0.14,
    width: width * 0.18,
    // backgroundColor: "yellow",
    // justifyContent: "center",
    alignItems: "center",
  },
  switchView: {
    height: height * 0.12,
    width: width * 0.2,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  changeBtn: {
    height: height * 0.035,
    width: width * 0.22,
    borderRadius: 20,
    backgroundColor: COLOR.BUTTONCOLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  addUsdtBtn: {
    height: height * 0.04,
    width: width * 0.2,
    borderRadius: 20,
    backgroundColor: COLOR.BUTTONCOLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  updateBtn: {
    height: height * 0.035,
    width: width * 0.22,
    borderRadius: 20,
    backgroundColor: COLOR.BUTTONCOLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  btnView: {
    height: height * 0.13,
    width: width * 0.58,
    // backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addBtn: {
    height: height * 0.035,
    width: width * 0.3,
    borderRadius: 20,
    backgroundColor: COLOR.BUTTONCOLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  emailView: {
    height: height * 0.11,
    width: width * 0.89,
    // backgroundColor: "pink",
    flexDirection: "row",
  },
  chagePassView: {
    height: height * 0.08,
    width: width * 0.89,
    // backgroundColor: "pink",
    flexDirection: "row",
  },
  kycView: {
    height: height * 0.1,
    width: width * 0.89,
    // backgroundColor: "pink",
    flexDirection: "row",
  },
  emailConfirmView: {
    height: height * 0.04,
    width: width * 0.6,
    // backgroundColor: "lightblue",s
    flexDirection: "row",
    justifyContent: "space-between",
  },
  approveView: {
    height: height * 0.12,
    width: width * 0.2,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  changeTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 85,
    color: "white",
  },
  approveTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 75,
    color: COLOR.GREEN,
  },
  incompTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 75,
    color: "red",
  },
  nameView: {
    height: height * 0.18,
    width: width * 0.578,
    // backgroundColor: "lightgreen",
    justifyContent: "center",
  },
  emailTxtView: {
    height: height * 0.14,
    width: width * 0.9,
    // backgroundColor: "lightgreen",
    justifyContent: "center",
  },
  passTxtView: {
    height: height * 0.1,
    width: width * 0.68,
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  kycVerifyView: {
    height: height * 0.065,
    width: width * 0.49,
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    // flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    alignSelf: "center",
  },
  authView: {
    height: height * 0.03,
    width: width * 0.49,
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    // flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    alignSelf: "center",
  },
  usernameTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 92,
    color: COLOR.MAILTXT,
  },
  completedImg: {
    height: height * 0.018,
    width: width * 0.04,
  },
  emaiUnderTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 92,
    color: COLOR.MAILTXT,
  },
  twoTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 75,
    color: "black",
  },
  border: {
    height: height * 0.001,
    width: width * 0.8,
    backgroundColor: COLOR.BORDERDRAWER,
    alignSelf: "center",
    marginTop: height * 0.027,
  },
  borderDrawer: {
    height: height * 0.001,
    width: width * 0.8,
    backgroundColor: COLOR.BORDERDRAWER,
    alignSelf: "center",
    marginTop: height * 0.01,
  },
  bottomBorder: {
    height: height * 0.001,
    width: width * 0.8,
    backgroundColor: COLOR.BORDERDRAWER,
    alignSelf: "center",
    marginTop: height * 0.01,
    marginBottom: height * 0.1,
  },
  nameTxt: {
    fontFamily: "Poppins-Bold",
    fontSize: height / 63,
    color: COLOR.BUTTONCOLOR,
  },
  emailVerifyTxt: {
    fontFamily: "Poppins-SemiBold",
    fontSize: height / 65,
    color: "black",
  },
  addUsdtTxt: {
    fontFamily: "Poppins-SemiBold",
    fontSize: height / 72,
    color: "black",
  },
});
