import {
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthInput from "../../Components/AuthInput";
import CodeInput from "react-native-code-input";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import CountDown from "react-native-countdown-component";
import Header from "../../Components/Header";
const { height, width } = Dimensions.get("screen");

const ResetPassword = (props) => {
  // ************ validaiton start here ******************************

  const [Password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(null);

  const [confirmpassword, setConfirmpassword] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);
  const [isvisileConfirmPassword, setvisibleConfirmPassword] = useState(false);

  const _passwordvalidate = (pass) => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (pass === "") {
      setErrorPassword("*Please enter password.");
    } else if (/([A-Z]+)/g.test(pass) && pass.length < 8) {
      setErrorPassword(
        "*Please enter a special character and length must be 8 digit."
      );
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword("*Please enter valid password.");
    } else {
      setErrorPassword(null);
    }
  };

  const _confirmpassword = (pass) => {
    if (Password != pass) {
      setErrorConfirmPassword("*Password Don't Match");
      setCheckConfirmPassword(false);
    } else {
      setCheckConfirmPassword(true);
      setErrorConfirmPassword(null);
    }
  };

  const validate = () => {
    let flag = true;

    if (Password === "") {
      setErrorPassword("*Please enter password.");
      flag = false;
    }

    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      // LoginApi();
      props.navigation.navigate("Login");
    } else {
      Alert.alert("Please fill above details");
    }
  };

  // ************ validaiton End here ******************************

  const [hidepass, setHidePass] = useState(false);
  const [cnfrmHidepass, setcnfrmHidepass] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function renderModal() {
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalParent}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Your password has been {"\n"} changed succesfully.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible),
                  props.navigation.navigate("Login");
              }}
              style={{
                borderRadius: height * 0.01,
                backgroundColor: COLOR.BUTTONCOLOR,
                height: height * 0.09,
                width: width * 0.45,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  function renderQr() {
    return (
      <View style={styles.parentViewQr}>
        <View style={styles.inputView}>
          <View
            style={{
              height: height * 0.03,
              width: width * 0.88,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: height / 62,
                color: COLOR.lightGrey,
              }}
            >
              Please never share with anyone for safe use.
            </Text>
          </View>
          <View style={styles.passwordView}>
            <View style={{ height: height * 0.1, width: width * 0.9 }}>
              <AuthInput
                LeftIcon={true}
                leftImg={ImagePath.LOCK}
                separator={true}
                RightIcon={true}
                secureTextEntry={hidepass}
                rightImg={hidepass ? ImagePath.SHOWEYE : ImagePath.HIDEEYE}
                rightPress={() => setHidePass(hidepass ? false : true)}
                placeholder={"Enter your New Password"}
                returnKeyType="done"
                keyboardType="number-pad"
                onChangeText={(txt) => {
                  setPassword(txt), _passwordvalidate(txt);
                }}
              />
              {errorPassword != null ? (
                <View
                  style={{
                    height: height * 0.015,
                    width: width / 1.3,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "red",
                      fontSize: 13,
                    }}
                  >
                    {errorPassword}
                  </Text>
                </View>
              ) : null}
            </View>
            <View style={{ height: height * 0.1, width: width * 0.9 }}>
              <AuthInput
                LeftIcon={true}
                leftImg={ImagePath.LOCK}
                separator={true}
                RightIcon={true}
                rightImg={cnfrmHidepass ? ImagePath.SHOWEYE : ImagePath.HIDEEYE}
                rightPress={() =>
                  setcnfrmHidepass(cnfrmHidepass ? false : true)
                }
                placeholder={"Confirm New Password"}
                onChangeText={(txt) => {
                  setConfirmpassword(txt), _confirmpassword(txt);
                }}
              />
              {errorConfirmPassword != null ? (
                <View
                  style={{
                    height: height * 0.015,
                    // width: width * 1,
                    width: width / 1.3,
                    // backgroundColor: "blue",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "red",
                      fontSize: 13,
                    }}
                  >
                    {errorConfirmPassword}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: height * 0.1,
            height: height * 0.1,
            width: width * 1,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <CustomButton
            title={"Submit & Reset"}
            // ButtonPress={() => setModalVisible(true)}
            onPressButton={() => onSubmit()}
          />
        </View>
        <View
          style={{
            marginTop: height * 0.1,
            height: height * 0.2,
            width: width * 1,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: COLOR.BUTTONCOLOR,
              height: height * 0.1,
              borderRadius: 15,
              width: width * 0.6,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                fontSize: height / 60,
                color: COLOR.BUTTONCOLOR,
              }}
            >
              Back To Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={ImagePath.SPLASHBACK}
        resizeMode="cover"
        style={{
          height: height * 1,
          width: width * 1,
        }}
      >
        <Header
          title={"Set a new Password"}
          LeftIcon={true}
          leftImg={ImagePath.BACKICON}
          leftPress={() => props.navigation.goBack()}
        />
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <ScrollView>
            {renderQr()}
            {renderModal()}
          </ScrollView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  parentViewQr: {
    backgroundColor: "white",
    width: width * 1,
    height: height * 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  inputView: {
    height: height * 0.35,
    width: width * 1,
    // backgroundColor: "yellow",
    marginTop: height * 0.035,
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordView: {
    height: height * 0.22,
    width: width * 1,
    // backgroundColor: "pink",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalView: {
    height: height * 0.28,
    width: width * 0.8,
    borderRadius: height / 80,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingVertical: height * 0.04,
    alignItems: "center",
    // marginTop: height * 0.22,
    alignSelf: "center",
  },
  modalParent: {
    height: height * 1,
    width: width * 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: height / 45,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  modalText: {
    fontSize: height / 55,
    color: COLOR.lightGrey,
    fontFamily: "Poppins-Regular",
  },
});
