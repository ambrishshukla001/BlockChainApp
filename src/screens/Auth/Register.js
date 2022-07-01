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
import { CountryCode } from "../../utils/CountryCode";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthInput from "../../Components/AuthInput";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import Header from "../../Components/Header";
import { BottomSheet } from "@rneui/base";
const { height, width } = Dimensions.get("screen");

const Register = (props) => {
  // ************ Country Code States Starts Here ************
  // ************* step 1 ***************
  const [FirstName, setFirstName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState(null);

  const [LastName, setLastName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");

  const [Email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);

  const [Phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(null);

  const [Password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(null);

  const [Address, setAddress] = useState("");
  const [errorAdde, setErrorAddress] = useState(null);

  // ************* step 2 ***************

  const _validateFirstName = (fname) => {
    var fnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (fname == "" || fname == undefined || fname == null) {
      setErrorFirstName("*Please enter first name.");
    } else if (!fnameRegex.test(fname)) {
      setErrorFirstName("*Please enter valid first name.");
    } else {
      setErrorFirstName(null);
    }
  };

  const _validateLastName = (lname) => {
    var lnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (lname == "" || lname == undefined || lname == null) {
      setErrorLastName("*Please enter last  name.");
    } else if (!lnameRegex.test(lname)) {
      setErrorLastName("*Please enter valid last name.");
    } else {
      setErrorLastName(null);
    }
  };

  const _emailvalidate = (mail) => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //  /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
    if (mail === "") {
      setErrorEmail("*Please enter email.");
    } else if (!emailRegex.test(mail)) {
      setErrorEmail("*Please enter valid email.");
    } else {
      setErrorEmail(null);
    }
  };

  const _Phonevalidate = (Phone) => {
    var PhoneRegex = /^([0-9]){10,14}$/;
    if (Phone === "") {
      setErrorPhone("*Please enter Phone Number.");
    } else if (!PhoneRegex.test(Phone)) {
      setErrorPhone("*Please enter valid Phone Number.");
    } else {
      setErrorPhone(null);
    }
  };


  

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

  // ************* step 3 ***************

  const validate = () => {
    let flag = true;

    if (FirstName === "") {
      setErrorFirstName("*Please enter First Name.");
      flag = false;
    }

    if (LastName === "") {
      setErrorLastName("*Please enter Last Name.");
      flag = false;
    }

    if (Email === "") {
      setErrorEmail("*Please enter email.");
      flag = false;
    }
    if (Password === "") {
      setErrorPassword("*Please enter password.");
      flag = false;
    }
    if (Phone === "") {
      setErrorPhone("*Please enter Phone Number.");
      flag = false;
    }
    if (Password === "") {
      setErrorPassword("*Please enter password.");
      flag = false;
    }

    return flag;
  };

  // ************ step 4 ************

  const onSubmit = () => {
    if (validate()) {
      // onVerifySignUp();
      props.navigation.navigate("DashBoard");
    } else {
      alert("Mandatory field is required");
      // setModalVisible(!modalVisible);
    }
  };

  // ************ Country Code States End Here ************

  const [hidepass, setHidePass] = useState(false);
  const [check, setCheck] = useState(false);

  // ************ Country Code States Starts Here ************
  const [filterdata, setFilterdata] = useState("");
  const [countryImage, setCountryImage] = useState();
  const [contrymodal, setcontrymodal] = useState(false);
  const [code, setCode] = React.useState("+91");
  const [isText, setIsText] = React.useState("");
  // ************ Country Code States Ends Here ************

  // ************ Country Code Search Functions ************
  const SeacrFunct = (value) => {
    if (value !== "") {
      // console.log("countryCode----", CountryCode);
      let mydata = CountryCode.filter((item) =>
        item.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilterdata(mydata);
      setIsText(value);
    }
  };

  // ************ Country Code Render Item ************
  const renderItem = ({ item }) => (
    <Item name={item.label} dialCode={item.value} icon={item.icon} />
  );

  // ************ Country Code Item Functions ************
  const Item = ({ name, dialCode, icon }) => (
    <TouchableOpacity
      key={String(name)}
      onPress={() => {
        setCode(dialCode);
        setCountryImage(icon);
        setcontrymodal(!contrymodal);
      }}
    >
      <View style={styles.item}>
        <Image source={icon} style={styles.image2} resizeMode="cover" />
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.dialcodeText}>{dialCode}</Text>
      </View>
    </TouchableOpacity>
  );

  function renderModal() {
    return (
      <View style={styles.modalView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={contrymodal}
          onRequestClose={() => {
            setcontrymodal(!contrymodal);
          }}
        >
          <View style={styles.MainModalContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.ModalSecondContainer}>
                <View style={styles.searchView}>
                  <TextInput
                    value={filterdata}
                    style={styles.searchInput}
                    placeholder="Search country name"
                    onChangeText={(text) => {
                      setIsText(text);
                      SeacrFunct(text);
                    }}
                    placeholderTextColor="#9796A8"
                  />
                </View>

                <View style={{ height: "80%", width: width }}>
                  <FlatList
                    data={filterdata ? filterdata : CountryCode}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.value}
                  />
                </View>
                <View style={styles.ModalThirdContainer}></View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </View>
    );
  }

  function renderModal() {
    return (
      <View style={styles.modalView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={contrymodal}
          onRequestClose={() => {
            setcontrymodal(!contrymodal);
          }}
        >
          <View style={styles.MainModalContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.ModalSecondContainer}>
                <View style={styles.searchView}>
                  <TextInput
                    value={filterdata}
                    style={styles.searchInput}
                    placeholder="Search country name"
                    onChangeText={(text) => {
                      setIsText(text);
                      SeacrFunct(text);
                    }}
                    placeholderTextColor="#9796A8"
                  />
                </View>

                <View style={{ height: "80%", width: width }}>
                  <FlatList
                    data={filterdata ? filterdata : CountryCode}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.value}
                  />
                </View>
                <View style={styles.ModalThirdContainer}></View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </View>
    );
  }

  function renderQr() {
    return (
      <View style={styles.parentViewQr}>
        <View style={styles.inputView}>
          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Enter your first name"}
              keyboardType="default"
              maxLength={30}
              autoCorrect={false}
              onChangeText={(txt) => {
                setFirstName(txt), _validateFirstName(txt);
              }}
            />
            {errorFirstName != null ? (
              <View
                style={{
                  height: height * 0.02,
                  // width: width * 1,
                  width: width / 1.3,
                  // backgroundColor: "blue",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorFirstName}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Enter your last name"}
              keyboardType="default"
              maxLength={30}
              autoCorrect={false}
              onChangeText={(txt) => {
                setLastName(txt), _validateLastName(txt);
              }}
            />

            {errorLastName != null ? (
              <View
                style={{
                  height: height * 0.02,
                  // width: width * 1,
                  width: width / 1.3,
                  // backgroundColor: "blue",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 10,
                  }}
                >
                  {errorLastName}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
             // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Enter your email address"}
              onChangeText={(txt) => {
                setEmail(txt), _emailvalidate(txt);
              }}
            />

            {errorEmail != null ? (
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
                    fontSize: 10,
                  }}
                >
                  {errorEmail}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              separator={true}
              CountryCode={true}
              countryCode={code}
              leftIconPress={() => setcontrymodal(true)}
              countryImage={
                countryImage
                  ? countryImage
                  : require("../../assets/Images/flag.png")
              }
              placeholder={"Enter your phone number"}
              keyboardType={"numeric"}
              returnKeyType="done"
              onChangeText={(txt) => {
                setPhone(txt), _Phonevalidate(txt);
              }}
            />

            {errorPhone != null ? (
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
                    fontSize: 10,
                  }}
                >
                  {errorPhone}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput placeholder={"Enter your address"} />
          </View>
          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput placeholder={"Enter your country"} />
          </View>
          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput placeholder={"Enter your state"} />
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput placeholder={"Enter your city"} />
          </View>
          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput placeholder={"Enter your zip code"} />
          </View>
          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput placeholder={"Enter your DOB"} />
          </View>

          <View
            style={{
              height: height * 0.1,
              width: width * 1,
              // backgroundColor: "green",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuthInput
              placeholder={"Password"}
              RightIcon={true}
              secureTextEntry={hidepass}
              rightImg={hidepass ? ImagePath.HIDEEYE : ImagePath.SHOWEYE}
              rightPress={() => setHidePass(hidepass ? false : true)}
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
                    fontSize: 10,
                  }}
                >
                  {errorPassword}
                </Text>
              </View>
            ) : null}
          </View>

          {/* <AuthInput
            separator={true}
            CountryCode={true}
            countryCode={code}
            leftIconPress={() => setcontrymodal(true)}
            countryImage={
              countryImage
                ? countryImage
                : require("../../assets/Images/flag.png")
            }
            placeholder={"Enter your phone number"}
            keyboardType={"numeric"}
          />

          <AuthInput placeholder={"Enter your address"} />
          <AuthInput placeholder={"state"} />
          <AuthInput placeholder={"city"} />
          <AuthInput placeholder={"Zip code"} /> */}
          {/* <AuthInput
            placeholder={"DOB"}
            // RightIcon={true}
            // secureTextEntry={hidepass}
            // rightImg={hidepass ? ImagePath.HIDEEYE : ImagePath.SHOWEYE}
            // rightPress={() => setHidePass(hidepass ? false : true)}
          />

          <AuthInput
            placeholder={"Password"}
            RightIcon={true}
            secureTextEntry={hidepass}
            rightImg={hidepass ? ImagePath.HIDEEYE : ImagePath.SHOWEYE}
            rightPress={() => setHidePass(hidepass ? false : true)}
          /> */}
        </View>

        <View
          style={{
            marginTop: height * 0.01,
            marginBottom: height * 0.01,
            left:width*0.02,
            alignItems: "center",
            height: height * 0.05,
            width: width * 0.9,
            alignSelf: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: height * 0.045,
              width: width * 0.6,
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
              //backgroundColor:'red'
            }}
          >
            {check ? (
              <TouchableOpacity onPress={() => setCheck(false)}>
                <Image
                  source={ImagePath.CHECK}
                  resizeMode="contain"
                  style={{ height: height * 0.05, width: width * 0.05 }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setCheck(true)}
                style={{
                  height: height * 0.025,
                  width: width * 0.05,
                  backgroundColor: check ? COLOR.BUTTONCOLOR : COLOR.CHECK,
                }}
              ></TouchableOpacity>
            )}
            <View
              style={{
                height: height * 0.045,
                width: width * 0.5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: height / 78,
                  color: COLOR.REMEBERTEXT,
                }}
              >
                I agree to{" "}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: height / 78,
                    color: COLOR.BUTTONCOLOR,
                  }}
                >
                  Terms and Conditions
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            // marginTop: height * 0.0,
            height: height * 0.1,
            width: width * 1,
            justifyContent: "space-around",
            alignItems: "center",
            // backgroundColor: "aqua",
          }}
        >
          <CustomButton title={"Register"} ButtonPress={() => onSubmit("")} />
        </View>

        <View
          style={{
            height: height * 0.045,
            alignSelf: "center",
            // position: "absolute",
            // bottom: height * 0.1,
            width: width * 0.5,
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: height / 78,
              color: COLOR.REMEBERTEXT,
              textAlign:'center'
            }}
          >
            Already have an account ?{" "}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: height / 78,
                color: COLOR.BUTTONCOLOR,
                textDecorationLine: "underline",
                textAlign:'center'
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
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
        <Header title={"Register"} />
        {renderModal()}
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <ScrollView>{renderQr()}</ScrollView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  parentViewQr: {
   backgroundColor: "#FFFFFF",
    width: width * 1,
    height: height * 1.46, // 1.2
    //justifyContent:"space-between",
    // flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  inputView: {
    height: height * 1.08,
    width: width * 1,
    // backgroundColor: "yellow",
    marginTop: height * 0.08,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
